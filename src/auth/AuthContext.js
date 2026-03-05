import React, {createContext, useContext, useEffect, useMemo, useState} from 'react';
import {useHistory, useLocation} from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import {getAuth0Client} from './auth0Client';

const AuthContext = createContext(null);

function stripTrailingSlash(pathname) {
  if (!pathname) return pathname;
  return pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function isPathOrChildPath(pathname, basePath) {
  const p = stripTrailingSlash(pathname);
  const b = stripTrailingSlash(basePath);
  return p === b || p.startsWith(b + '/');
}

export function AuthProvider({children}) {
  const {siteConfig} = useDocusaurusContext();

  // SSR/prerender-safe no-op context
  if (!ExecutionEnvironment.canUseDOM) {
    const value = {
      isLoading: false,
      isAuthenticated: false,
      user: null,
      login: async () => {},
      logout: async () => {},
      handleCallback: async () => ({appState: null}),
    };
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

  const history = useHistory();
  const location = useLocation();

  // Prefer trailing slashes for GH Pages static hosting
  const signinPath = useBaseUrl('/signin');
  const callbackPath = useBaseUrl('/auth/callback');
  const logoutPath = useBaseUrl('/logout');
  const siteRootPath = useBaseUrl('/');

  const toAbsoluteUrl = (path) => new URL(path, window.location.origin).toString();

  const redirectUri = toAbsoluteUrl(callbackPath);

  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const auth0Options = useMemo(() => {
    return {
      domain: siteConfig.customFields.auth0Domain,
      clientId: siteConfig.customFields.auth0ClientId,
      authorizationParams: {
        audience: siteConfig.customFields.auth0Audience,
        redirect_uri: redirectUri,
      },
      cacheLocation: 'localstorage',
      useRefreshTokens: true,
      // Helps with “Invalid state” in some browsers/privacy modes:
      useCookiesForTransactions: true,
    };
    // redirectUri already includes callbackPath+origin and will change if baseUrl changes
  }, [siteConfig, redirectUri]);

  useEffect(() => {
    let mounted = true;

    (async () => {
      const auth0 = await getAuth0Client(auth0Options);
      const authed = await auth0.isAuthenticated();

      if (!mounted) return;

      setIsAuthenticated(authed);
      setUser(authed ? await auth0.getUser() : null);
      setIsLoading(false);

      // Gate: redirect to /signin unless whitelisted routes
      const pathname = location.pathname;

      const isWhitelisted =
        isPathOrChildPath(pathname, callbackPath) ||
        isPathOrChildPath(pathname, signinPath) ||
        isPathOrChildPath(pathname, logoutPath) ||
        pathname.includes('/assets/') ||
        pathname.endsWith('.css') ||
        pathname.endsWith('.js');

      if (!authed && !isWhitelisted) {
        const returnTo = location.pathname + location.search + location.hash;
        history.replace(`${signinPath}?returnTo=${encodeURIComponent(returnTo)}`);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [
    auth0Options,
    history,
    location.pathname,
    location.search,
    location.hash,
    signinPath,
    callbackPath,
    logoutPath,
  ]);

  const value = useMemo(() => {
    return {
      isLoading,
      isAuthenticated,
      user,

      async login(returnTo) {
        const auth0 = await getAuth0Client(auth0Options);
        await auth0.loginWithRedirect({
          authorizationParams: {redirect_uri: redirectUri},
          appState: {returnTo},
        });
      },

      async handleCallback() {
        const auth0 = await getAuth0Client(auth0Options);

        const result = await auth0.handleRedirectCallback();

        // Refresh local auth state after processing the callback
        const authed = await auth0.isAuthenticated();
        setIsAuthenticated(authed);
        setUser(authed ? await auth0.getUser() : null);
        setIsLoading(false);

        return result; // { appState, ... }
      },

      async logout(returnToPath) {
        setIsAuthenticated(false);
        setUser(null);

        const auth0 = await getAuth0Client(auth0Options);
        auth0.logout({
          logoutParams: {
            returnTo: toAbsoluteUrl(returnToPath || siteRootPath),
          },
        });
      },

      // Expose these if you want to reuse them elsewhere
      paths: {signinPath, callbackPath, logoutPath, siteRootPath},
      redirectUri,
    };
  }, [
    isLoading,
    isAuthenticated,
    user,
    auth0Options,
    redirectUri,
    signinPath,
    callbackPath,
    logoutPath,
    siteRootPath,
  ]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within <AuthProvider>');
  return ctx;
}