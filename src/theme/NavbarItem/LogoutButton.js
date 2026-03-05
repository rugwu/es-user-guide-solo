// import React from 'react';
// import {useAuth} from '@site/src/auth/AuthContext';

// export default function LogoutButton({className = '', ...props}) {
//   const {isLoading, isAuthenticated} = useAuth();

//   if (isLoading || !isAuthenticated) {
//     return null;
//   }

//   // Render as a normal navbar link that routes to /logout
//   return (
//     <a
//       className={`navbar__item navbar__link ${className}`}
//       href={props.href || props.to || '/logout'}
//     >
//       {props.label || 'Logout'}
//     </a>
//   );
// }




import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useAuth} from '@site/src/auth/AuthContext';

export default function LogoutButton(props) {
  const {isLoading, isAuthenticated} = useAuth();

  if (isLoading || !isAuthenticated) {
    return null; // hide button until logged in
  }

  const {
    to = '/logout',
    label = 'Logout',
    className = '',
  } = props;

  return (
    <Link
      className={`navbar__item navbar__link ${className}`}
      to={useBaseUrl(to)}
    >
      {label}
    </Link>
  );
}