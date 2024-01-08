// // LoadingModal.js

// import React from 'react';

// const LoadingModal = () => {
//   return (
//     <div className="modal fade show" tabIndex="-1" role="dialog" aria-labelledby="loading-modal-label" aria-hidden="true">
//       <div className="modal-dialog modal-dialog-centered" role="document">
//         <div className="modal-content">
//           <div className="modal-body text-center">
//             <div className="spinner-border text-primary" role="status">
//               <span className="visually-hidden">Loading...</span>
//             </div>
//             <p className="mt-2" id="loading-modal-label">Submitting your request...</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoadingModal;
// LoadingModal.js

import React from 'react';
import './loadingModal.css'

const LoadingModal = () => {
  return (
    <div className="loading-modal" role="dialog" aria-labelledby="loading-modal-label">
      <div className="loading-content">
        <div className="loading-spinner"></div>
        <p id="loading-modal-label">Submitting your request...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
