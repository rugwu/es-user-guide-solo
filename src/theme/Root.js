// import React from 'react';
// import {AuthProvider} from '@site/src/auth/AuthContext';
// import BrowserOnly from '@docusaurus/BrowserOnly';

// export default function Root({children}) {
//   return (
//     <BrowserOnly fallback={<>{children}</>}>
//       {() => (
//         <AuthProvider>{children}</AuthProvider>
//       )}
//     </BrowserOnly>
//   );
// }

import React from 'react';
import {AuthProvider} from '@site/src/auth/AuthContext';

export default function Root({children}) {
  return <AuthProvider>{children}</AuthProvider>;
}