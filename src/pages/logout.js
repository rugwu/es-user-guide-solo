import React, {useEffect} from 'react';
import Layout from '@theme/Layout';
import {useHistory} from '@docusaurus/router';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useAuth} from '@site/src/auth/AuthContext';

export default function Logout() {
    const history = useHistory();
    const signinUrl = useBaseUrl('/signin');

    const {isLoading, logout} = useAuth();

  useEffect(() => {
    if (isLoading) return;
    
    const t1 = setTimeout(() => logout(signinUrl), 250);

    // Give the UI a moment to paint the "Signing you out..." message
    const t2 = setTimeout(() => history.replace(signinUrl), 2000);

    return () => {
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [isLoading, logout, history, signinUrl]);


  return (
    <Layout title="Signing out">
      <main style={{maxWidth: 560, margin: '3rem auto', padding: '0 1rem'}}>
        <h1>Signing you out…</h1>
        <p>Please wait.</p>
      </main>
    </Layout>
  );
}