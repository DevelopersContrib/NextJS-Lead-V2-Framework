import { NextResponse } from 'next/server';
import { apiMonitor } from '@/lib/monitoring';

export async function GET() {
  try {
    const stats = apiMonitor.getStats();
    
    return NextResponse.json({
      success: true,
      data: {
        ...stats,
        timestamp: new Date().toISOString(),
        thresholds: {
          requestsPerMinute: 1000,
          errorsPerMinute: 50,
          dailyRequests: 100000
        }
      }
    });
  } catch (error) {
    console.error('Monitoring API error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch monitoring data' },
      { status: 500 }
    );
  }
}
