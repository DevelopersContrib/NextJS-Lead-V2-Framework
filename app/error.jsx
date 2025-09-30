'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global error:', error);
  }, [error]);

  return (
    <div className="tw-min-h-screen tw-bg-black tw-flex tw-items-center tw-justify-center tw-px-4">
      <div className="tw-text-center tw-max-w-md tw-mx-auto">
        <div className="tw-mb-8">
          <h1 className="tw-text-4xl tw-font-bold tw-text-white tw-mb-4">
            Something went wrong
          </h1>
          <p className="tw-text-gray-400 tw-mb-8">
            We&apos;re experiencing technical difficulties. Please try again later.
          </p>
        </div>
        
        <div className="tw-space-y-4">
          <button
            onClick={reset}
            className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-font-medium tw-transition-colors tw-mr-4"
          >
            Try Again
          </button>
          
          <Link
            href="/"
            className="tw-inline-block tw-bg-gray-600 hover:tw-bg-gray-700 tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-font-medium tw-transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
