// import React, { useState } from 'react';

// const DialogBox = ({ title, onAction, actionLabel, defaultText = '' }: { title: string, onAction: any, actionLabel: string, defaultText?: string }) => {
//   const [text, setText] = useState(defaultText);
//   const [isOpen, setIsOpen] = useState(false);

//   const handleOpen = () => setIsOpen(true);
//   const handleClose = () => setIsOpen(false);
//   const handleAction = () => {
//     // Handle action here, passing input text if necessary
//     onAction(text); // Pass the current text value
//     handleClose();
//   };
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

//   return (
//     <div className="fixed inset-0 z-50 overflow-hidden">
//       <div className="flex items-center justify-center h-screen">
//         <div className="fixed inset-0 transition-opacity">
//           <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//         </div>
//         <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//           <div className="flex items-center justify-between sm:items-stretch">
//             <h5 className="text-3xl font-medium leading-6 text-gray-900">{title}</h5>
//             <button onClick={handleClose} type="button" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
//               Close
//             </button>
//           </div>
//           <div className="mt-2">
//             <input
//               type="text"
//               value={text}
//               onChange={handleChange}
//               className="block w-full px-4 py-2 pr-10 border rounded-md sm:text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-offset-2"
//               placeholder="Enter text..."
//             />
//           </div>
//           <div className="mt-4 sm:mt-5 sm:flex sm:flex-row-reverse">
//             <button
//               type="button"
//               onClick={handleAction}
//               className="inline-flex items-center px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-full sm:flex-grow-0"
//             >
//               {actionLabel}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DialogBox;

import React, { useState } from 'react';

// const DialogBox = ({ title, onAction, actionLabel, defaultText = '' }) => {
const DialogBox = ({ title, onAction, actionLabel, defaultText = '' }: { title: string, onAction: any, actionLabel: string, defaultText?: string }) => {

  const [isOpen, setIsOpen] = useState(false);

  const [text, setText] = useState(defaultText);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  const handleAction = () => {
    // Handle action here, passing input text if necessary
    // onAction(text); // Pass the current text value
    handleClose();
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setText(event.target.value);

  return (
    <>
      {/* Modal toggle */}
      <button
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Toggle modal
      </button>
      {/* Main modal */}
      <div
        id="default-modal"

        aria-hidden="true"
        className=" overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
      >
        <div className="relative p-4 w-full max-w-2xl max-h-full">
          {/* Modal content */}
          <div className="relative bg-black rounded-lg shadow dark:bg-gray-700">
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Terms of Service
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4">
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                With less than a month to go before the European Union enacts new
                consumer privacy laws for its citizens, companies around the world
                are updating their terms of service agreements to comply.
              </p>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                The European Union’s General Data Protection Regulation (G.D.P.R.)
                goes into effect on May 25 and is meant to ensure a common set of
                data rights in the European Union. It requires organizations to
                notify users as soon as possible of high-risk data breaches that
                could personally affect them.
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                I accept
              </button>
              <button
                data-modal-hide="default-modal"
                type="button"
                className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default DialogBox;
