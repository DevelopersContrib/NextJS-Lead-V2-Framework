"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faEye, faMousePointer, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

export default function StatsPage() {
  const [stats, setStats] = useState({
    topPages: [
      { page: '/', views: 15420, change: 12.5, referrals: 2340 },
      { page: '/about', views: 8920, change: 8.2, referrals: 1560 },
      { page: '/contact', views: 6540, change: -2.1, referrals: 890 },
      { page: '/partner', views: 5430, change: 15.7, referrals: 1230 },
      { page: '/blog', views: 4320, change: 6.8, referrals: 670 }
    ],
    topReferrers: [
      { source: 'Google', visits: 12500, percentage: 45.2 },
      { source: 'Direct', visits: 8900, percentage: 32.1 },
      { source: 'Social Media', visits: 3200, percentage: 11.6 },
      { source: 'Referral Sites', visits: 2100, percentage: 7.6 },
      { source: 'Email', visits: 1000, percentage: 3.6 }
    ],
    pageViews: {
      today: 1240,
      week: 8920,
      month: 35400,
      total: 154200
    },
    visitors: {
      today: 890,
      week: 6540,
      month: 25400,
      total: 123400
    }
  });

  const [timeRange, setTimeRange] = useState('month');
  const [isLoading, setIsLoading] = useState(false);

  // Simulate data refresh
  const refreshStats = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1) + 'K';
    return num.toString();
  };

  const getChangeColor = (change) => {
    if (change > 0) return 'tw-text-green-500';
    if (change < 0) return 'tw-text-red-500';
    return 'tw-text-gray-500';
  };

  const getChangeIcon = (change) => {
    if (change > 0) return faArrowUp;
    if (change < 0) return faArrowDown;
    return null;
  };

  return (
    <div className="tw-min-h-screen tw-bg-gray-50">
      {/* Header */}
      <div className="tw-bg-white tw-shadow-sm tw-border-b">
        <div className="tw-container tw-mx-auto tw-px-4 tw-py-6">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div>
              <h1 className="tw-text-3xl tw-font-bold tw-text-gray-900">Analytics Dashboard</h1>
              <p className="tw-text-gray-600 tw-mt-1">Track your website performance and user behavior</p>
            </div>
            <div className="tw-flex tw-items-center tw-gap-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="tw-px-4 tw-py-2 tw-border tw-border-gray-300 tw-rounded-lg tw-bg-white tw-text-sm"
              >
                <option value="today">Today</option>
                <option value="week">This Week</option>
                <option value="month">This Month</option>
                <option value="year">This Year</option>
              </select>
              <button
                onClick={refreshStats}
                disabled={isLoading}
                className="tw-bg-blue-600 hover:tw-bg-blue-700 tw-text-white tw-px-4 tw-py-2 tw-rounded-lg tw-text-sm tw-font-medium tw-transition-colors tw-flex tw-items-center tw-gap-2"
              >
                <FontAwesomeIcon icon={faChartLine} className="tw-w-4 tw-h-4" />
                {isLoading ? 'Refreshing...' : 'Refresh'}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="tw-container tw-mx-auto tw-px-4 tw-py-8">
        {/* Overview Cards */}
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-4 tw-gap-6 tw-mb-8">
          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm tw-border">
            <div className="tw-flex tw-items-center tw-justify-between">
              <div>
                <p className="tw-text-sm tw-text-gray-600 tw-font-medium">Page Views</p>
                <p className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mt-1">
                  {formatNumber(stats.pageViews[timeRange])}
                </p>
              </div>
              <div className="tw-bg-blue-100 tw-p-3 tw-rounded-full">
                <FontAwesomeIcon icon={faEye} className="tw-w-6 tw-h-6 tw-text-blue-600" />
              </div>
            </div>
            <div className="tw-mt-4 tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-text-gray-600">Total: {formatNumber(stats.pageViews.total)}</span>
            </div>
          </div>

          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm tw-border">
            <div className="tw-flex tw-items-center tw-justify-between">
              <div>
                <p className="tw-text-sm tw-text-gray-600 tw-font-medium">Unique Visitors</p>
                <p className="tw-text-2xl tw-font-bold tw-text-gray-900 tw-mt-1">
                  {formatNumber(stats.visitors[timeRange])}
                </p>
              </div>
              <div className="tw-bg-green-100 tw-p-3 tw-rounded-full">
                <FontAwesomeIcon icon={faUsers} className="tw-w-6 tw-h-6 tw-text-green-600" />
              </div>
            </div>
            <div className="tw-mt-4 tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-text-gray-600">Total: {formatNumber(stats.visitors.total)}</span>
            </div>
          </div>

          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm tw-border">
            <div className="tw-flex tw-items-center tw-justify-between">
              <div>
                <p className="tw-text-sm tw-text-gray-600 tw-font-medium">Top Page</p>
                <p className="tw-text-lg tw-font-bold tw-text-gray-900 tw-mt-1 tw-truncate">
                  {stats.topPages[0]?.page}
                </p>
              </div>
              <div className="tw-bg-purple-100 tw-p-3 tw-rounded-full">
                <FontAwesomeIcon icon={faMousePointer} className="tw-w-6 tw-h-6 tw-text-purple-600" />
              </div>
            </div>
            <div className="tw-mt-4 tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-text-gray-600">
                {formatNumber(stats.topPages[0]?.views)} views
              </span>
            </div>
          </div>

          <div className="tw-bg-white tw-rounded-xl tw-p-6 tw-shadow-sm tw-border">
            <div className="tw-flex tw-items-center tw-justify-between">
              <div>
                <p className="tw-text-sm tw-text-gray-600 tw-font-medium">Top Referrer</p>
                <p className="tw-text-lg tw-font-bold tw-text-gray-900 tw-mt-1">
                  {stats.topReferrers[0]?.source}
                </p>
              </div>
              <div className="tw-bg-orange-100 tw-p-3 tw-rounded-full">
                <FontAwesomeIcon icon={faChartLine} className="tw-w-6 tw-h-6 tw-text-orange-600" />
              </div>
            </div>
            <div className="tw-mt-4 tw-flex tw-items-center tw-gap-2">
              <span className="tw-text-sm tw-text-gray-600">
                {stats.topReferrers[0]?.percentage}%
              </span>
            </div>
          </div>
        </div>

        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-gap-8">
          {/* Top Pages */}
          <div className="tw-bg-white tw-rounded-xl tw-shadow-sm tw-border">
            <div className="tw-p-6 tw-border-b">
              <h2 className="tw-text-xl tw-font-semibold tw-text-gray-900">Top Pages</h2>
              <p className="tw-text-sm tw-text-gray-600 tw-mt-1">Most visited pages in the selected time period</p>
            </div>
            <div className="tw-p-6">
              <div className="tw-space-y-4">
                {stats.topPages.map((page, index) => (
                  <div key={index} className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-bg-gray-50 tw-rounded-lg">
                    <div className="tw-flex tw-items-center tw-gap-4">
                      <div className="tw-w-8 tw-h-8 tw-bg-blue-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-sm tw-font-semibold tw-text-blue-600">
                        {index + 1}
                      </div>
                      <div>
                        <p className="tw-font-medium tw-text-gray-900">{page.page}</p>
                        <p className="tw-text-sm tw-text-gray-600">{formatNumber(page.referrals)} referrals</p>
                      </div>
                    </div>
                    <div className="tw-text-right">
                      <p className="tw-font-semibold tw-text-gray-900">{formatNumber(page.views)}</p>
                      <div className={`tw-flex tw-items-center tw-gap-1 tw-text-sm ${getChangeColor(page.change)}`}>
                        {getChangeIcon(page.change) && (
                          <FontAwesomeIcon icon={getChangeIcon(page.change)} className="tw-w-3 tw-h-3" />
                        )}
                        <span>{Math.abs(page.change)}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Top Referrers */}
          <div className="tw-bg-white tw-rounded-xl tw-shadow-sm tw-border">
            <div className="tw-p-6 tw-border-b">
              <h2 className="tw-text-xl tw-font-semibold tw-text-gray-900">Top Referrers</h2>
              <p className="tw-text-sm tw-text-gray-600 tw-mt-1">Traffic sources bringing visitors to your site</p>
            </div>
            <div className="tw-p-6">
              <div className="tw-space-y-4">
                {stats.topReferrers.map((referrer, index) => (
                  <div key={index} className="tw-flex tw-items-center tw-justify-between tw-p-4 tw-bg-gray-50 tw-rounded-lg">
                    <div className="tw-flex tw-items-center tw-gap-4">
                      <div className="tw-w-8 tw-h-8 tw-bg-green-100 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-text-sm tw-font-semibold tw-text-green-600">
                        {index + 1}
                      </div>
                      <div>
                        <p className="tw-font-medium tw-text-gray-900">{referrer.source}</p>
                        <p className="tw-text-sm tw-text-gray-600">{formatNumber(referrer.visits)} visits</p>
                      </div>
                    </div>
                    <div className="tw-text-right">
                      <p className="tw-font-semibold tw-text-gray-900">{referrer.percentage}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="tw-mt-8 tw-bg-white tw-rounded-xl tw-shadow-sm tw-border">
          <div className="tw-p-6 tw-border-b">
            <h2 className="tw-text-xl tw-font-semibold tw-text-gray-900">Traffic Overview</h2>
            <p className="tw-text-sm tw-text-gray-600 tw-mt-1">Detailed traffic analysis and trends</p>
          </div>
          <div className="tw-p-6">
            <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-3 tw-gap-6">
              <div className="tw-text-center">
                <div className="tw-text-2xl tw-font-bold tw-text-blue-600 tw-mb-2">
                  {((stats.pageViews[timeRange] / stats.visitors[timeRange]) * 100).toFixed(1)}%
                </div>
                <div className="tw-text-sm tw-text-gray-600">Bounce Rate</div>
              </div>
              <div className="tw-text-center">
                <div className="tw-text-2xl tw-font-bold tw-text-green-600 tw-mb-2">
                  {(stats.pageViews[timeRange] / stats.visitors[timeRange]).toFixed(1)}
                </div>
                <div className="tw-text-sm tw-text-gray-600">Pages per Session</div>
              </div>
              <div className="tw-text-center">
                <div className="tw-text-2xl tw-font-bold tw-text-purple-600 tw-mb-2">
                  {formatNumber(stats.topPages.reduce((sum, page) => sum + page.referrals, 0))}
                </div>
                <div className="tw-text-sm tw-text-gray-600">Total Referrals</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
