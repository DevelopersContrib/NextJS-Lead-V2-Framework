// Monitoring and guardrails for API usage
class APIMonitor {
  constructor() {
    this.requestCounts = new Map();
    this.errorCounts = new Map();
    this.dailyLimits = new Map();
    this.alertThresholds = {
      requestsPerMinute: 1000,
      errorsPerMinute: 50,
      dailyRequests: 100000,
      responseTime: 5000 // 5 seconds
    };
  }

  // Track API request
  trackRequest(endpoint, domain, responseTime, success = true) {
    const now = Date.now();
    const minute = Math.floor(now / 60000);
    const day = Math.floor(now / 86400000);
    
    // Track per-minute requests
    const minuteKey = `${endpoint}-${minute}`;
    this.requestCounts.set(minuteKey, (this.requestCounts.get(minuteKey) || 0) + 1);
    
    // Track daily requests per domain
    const dailyKey = `${domain}-${day}`;
    this.dailyLimits.set(dailyKey, (this.dailyLimits.get(dailyKey) || 0) + 1);
    
    // Track errors
    if (!success) {
      const errorKey = `${endpoint}-${minute}`;
      this.errorCounts.set(errorKey, (this.errorCounts.get(errorKey) || 0) + 1);
    }
    
    // Check thresholds
    this.checkThresholds(endpoint, domain, minuteKey, dailyKey);
    
    // Cleanup old data (keep last 24 hours)
    this.cleanup();
  }

  checkThresholds(endpoint, domain, minuteKey, dailyKey) {
    const requestsThisMinute = this.requestCounts.get(minuteKey) || 0;
    const errorsThisMinute = this.errorCounts.get(minuteKey) || 0;
    const requestsToday = this.dailyLimits.get(dailyKey) || 0;
    
    // Alert if thresholds exceeded
    if (requestsThisMinute > this.alertThresholds.requestsPerMinute) {
      console.warn(`🚨 HIGH REQUEST RATE: ${endpoint} - ${requestsThisMinute} requests/minute`);
      this.sendAlert('high_request_rate', { endpoint, count: requestsThisMinute });
    }
    
    if (errorsThisMinute > this.alertThresholds.errorsPerMinute) {
      console.warn(`🚨 HIGH ERROR RATE: ${endpoint} - ${errorsThisMinute} errors/minute`);
      this.sendAlert('high_error_rate', { endpoint, count: errorsThisMinute });
    }
    
    if (requestsToday > this.alertThresholds.dailyRequests) {
      console.warn(`🚨 DAILY LIMIT EXCEEDED: ${domain} - ${requestsToday} requests today`);
      this.sendAlert('daily_limit_exceeded', { domain, count: requestsToday });
    }
  }

  sendAlert(type, data) {
    // In production, send to monitoring service (DataDog, New Relic, etc.)
    console.error(`ALERT: ${type}`, data);
    
    // You can integrate with:
    // - Slack webhooks
    // - Email notifications
    // - PagerDuty
    // - Custom monitoring dashboard
  }

  cleanup() {
    const now = Date.now();
    const cutoff = now - (24 * 60 * 60 * 1000); // 24 hours ago
    
    // Clean up old request counts
    for (const [key, value] of this.requestCounts.entries()) {
      const minute = parseInt(key.split('-').pop());
      if (minute * 60000 < cutoff) {
        this.requestCounts.delete(key);
      }
    }
    
    // Clean up old error counts
    for (const [key, value] of this.errorCounts.entries()) {
      const minute = parseInt(key.split('-').pop());
      if (minute * 60000 < cutoff) {
        this.errorCounts.delete(key);
      }
    }
    
    // Clean up old daily limits
    for (const [key, value] of this.dailyLimits.entries()) {
      const day = parseInt(key.split('-').pop());
      if (day * 86400000 < cutoff) {
        this.dailyLimits.delete(key);
      }
    }
  }

  // Get current stats
  getStats() {
    const now = Date.now();
    const minute = Math.floor(now / 60000);
    const day = Math.floor(now / 86400000);
    
    let totalRequestsThisMinute = 0;
    let totalErrorsThisMinute = 0;
    let totalRequestsToday = 0;
    
    for (const [key, count] of this.requestCounts.entries()) {
      if (key.endsWith(`-${minute}`)) {
        totalRequestsThisMinute += count;
      }
    }
    
    for (const [key, count] of this.errorCounts.entries()) {
      if (key.endsWith(`-${minute}`)) {
        totalErrorsThisMinute += count;
      }
    }
    
    for (const [key, count] of this.dailyLimits.entries()) {
      if (key.endsWith(`-${day}`)) {
        totalRequestsToday += count;
      }
    }
    
    return {
      requestsThisMinute: totalRequestsThisMinute,
      errorsThisMinute: totalErrorsThisMinute,
      requestsToday: totalRequestsToday,
      activeDomains: new Set([...this.dailyLimits.keys()].map(key => key.split('-')[0])).size
    };
  }
}

// Global instance
const apiMonitor = new APIMonitor();

// Wrapper for API calls
export function withMonitoring(apiFunction, endpoint) {
  return async (...args) => {
    const startTime = Date.now();
    let success = true;
    let domain = 'unknown';
    
    try {
      // Extract domain from args if possible
      if (args.length > 0 && typeof args[0] === 'string') {
        domain = args[0];
      }
      
      const result = await apiFunction(...args);
      return result;
    } catch (error) {
      success = false;
      console.error(`API Error in ${endpoint}:`, error);
      throw error;
    } finally {
      const responseTime = Date.now() - startTime;
      apiMonitor.trackRequest(endpoint, domain, responseTime, success);
    }
  };
}

// Export monitoring functions
export { apiMonitor };
export default apiMonitor;
