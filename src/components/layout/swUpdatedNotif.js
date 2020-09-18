import React, { useState, useEffect } from 'react';
import { hasWindow } from '../../utils/hasWindow';
import { motion } from 'framer-motion';

const ServiceWorkerUpdatedNotif = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (hasWindow) {
      if (window.localStorage.getItem('serviceWorkerUpdated') === 'true') {
        setVisible(true);
        window.localStorage.setItem('serviceWorkerUpdated', 'false');
      }
    }
  }, []);

  return (
    <motion.div
      class={`absolute bottom-0 w-full rounded-md bg-blue-50 p-4 ${
        visible ? 'block' : 'hidden'
      }`}
      style={{ zIndex: '900' }}
      // Automatically close the notification window after 1.8 seconds (1000ms * 2.3 * 0.8)
      animate={{ opacity: [1, 0], y: [0, 60] }}
      transition={{ duration: 2.3, times: [0.8, 1] }}
    >
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="w-5 h-5 text-blue-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="flex-1 ml-3 md:flex md:justify-between">
          <p className="text-sm leading-5 text-blue-700">
            Le site est à présent à jour.
          </p>
        </div>
        <div className="pl-3 ml-auto">
          <div className="-mx-1.5 -my-1.5">
            <button
              className="inline-flex rounded-md p-1.5 text-blue-700 hover:bg-blue-100 focus:outline-none focus:bg-blue-100 transition ease-in-out duration-150"
              ariaLabel="Dismiss"
              onClick={() => setVisible(false)}
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceWorkerUpdatedNotif;
