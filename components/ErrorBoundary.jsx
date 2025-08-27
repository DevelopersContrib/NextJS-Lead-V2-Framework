"use client";
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="tw-py-24 tw-bg-black tw-bg-opacity-50">
          <div className="tw-container tw-mx-auto tw-text-center">
            <h2 className="tw-text-2xl tw-font-bold tw-text-white tw-mb-4">
              Something went wrong
            </h2>
                          <p className="tw-text-gray-300 tw-mb-4">
                We&apos;re having trouble loading the blog content. Please try refreshing the page.
              </p>
            <button
              onClick={() => window.location.reload()}
              className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-2 tw-rounded-md tw-transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
