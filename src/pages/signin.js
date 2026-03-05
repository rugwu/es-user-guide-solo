import React from 'react';
import Layout from '@theme/Layout';
import {useLocation} from '@docusaurus/router';
import {useAuth} from '@site/src/auth/AuthContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function SignIn() {
  const {isLoading, login} = useAuth();
  const query = useQuery();
  const defaultReturnTo = useBaseUrl('/');
  const returnTo = query.get('returnTo') || defaultReturnTo;

  return (
    <Layout title="Sign in">
      <main style={{maxWidth: 560, margin: '3rem auto', padding: '0 1rem'}}>
        <h1>Sign in</h1>
        <p>You must sign in to access the documentation.</p>

        <button
          disabled={isLoading}
          onClick={() => login(returnTo)}
          style={{padding: '0.6rem 1rem'}}
        >
          Continue
        </button>
      </main>
    </Layout>
  );
}