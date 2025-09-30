import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="tw-min-h-screen tw-bg-black tw-flex tw-items-center tw-justify-center tw-px-4">
      <div className="tw-text-center tw-max-w-md tw-mx-auto">
        <div className="tw-mb-8">
          <h1 className="tw-text-6xl tw-font-bold tw-text-white tw-mb-4">404</h1>
          <h2 className="tw-text-2xl tw-font-semibold tw-text-gray-300 tw-mb-4">
            Page Not Found
          </h2>
          <p className="tw-text-gray-400 tw-mb-8">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>
        
        <div className="tw-space-y-4">
          <Link
            href="/"
            className="tw-inline-block tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-font-medium tw-transition-colors"
          >
            Go Home
          </Link>
          
          <div className="tw-text-sm tw-text-gray-500">
            <p>If you believe this is an error, please contact support.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
