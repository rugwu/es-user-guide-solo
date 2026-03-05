import React, {useEffect, useRef} from 'react';
import Layout from '@theme/Layout';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useAuth} from '@site/src/auth/AuthContext';

export default function Callback() {
  const history = useHistory();
  const fallbackTarget = useBaseUrl('/docs/products/');
  const {handleCallback} = useAuth();

  const ran = useRef(false);

  useEffect(() => {
    if (ran.current) return;
    ran.current = true;

    (async () => {
      // Only handle actual Auth0 redirect responses
      const search = window.location.search;
      if (!search.includes('code=') || !search.includes('state=')) {
        history.replace(fallbackTarget);
        return;
      }

      const {appState} = await handleCallback();
      history.replace(appState?.returnTo || fallbackTarget);
    })().catch((e) => {
      console.error('Auth callback error:', e);
      history.replace(fallbackTarget);
    });
  }, [handleCallback, history, fallbackTarget]);

  return (
    <Layout title="Signing in">
      <main style={{maxWidth: 560, margin: '3rem auto', padding: '0 1rem'}}>
        <h1>Signing you in…</h1>
      </main>
    </Layout>
  );
}