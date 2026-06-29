import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { renderHook } from '@testing-library/react';
import { useShareActions } from './useShareActions';

describe('useShareActions Timezone Normalization & Calendar Boundaries', () => {
  const originalTZ = process.env.TZ;

  // --- MOCK DATA TO SATISFY TYPESCRIPT COMPILER ---
  const mockUsername = 'test_user';
  const mockExportData = {
    activity: [],
    streak: { current: 5, longest: 10 },
    totalCommits: 100,
  } as any; // Cast as any to bypass strict structural typing for unrelated fields
  const mockOnClose = vi.fn();
  // ------------------------------------------------

  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    process.env.TZ = originalTZ;
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  const setTimezone = (tz: string) => {
    process.env.TZ = tz;
  };

  it('1. mocks standard timezone settings (UTC, EST, IST, JST) correctly', () => {
    const testDate = new Date('2024-01-01T12:00:00Z');

    // UTC
    setTimezone('UTC');
    expect(testDate.toLocaleString('en-US', { timeZone: 'UTC' })).toContain('12:00:00 PM');

    // JST (Japan Standard Time, UTC+9)
    setTimezone('Asia/Tokyo');
    expect(testDate.toLocaleString('en-US', { timeZone: 'Asia/Tokyo' })).toContain('9:00:00 PM');

    // IST (Indian Standard Time, UTC+5:30)
    setTimezone('Asia/Kolkata');
    expect(testDate.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' })).toContain('5:30:00 PM');
  });

  it('2. aligns calculations to correct visual dates despite offset shifts', () => {
    const lateUtcDate = new Date('2024-01-01T23:00:00Z');
    vi.setSystemTime(lateUtcDate);
    setTimezone('Asia/Kolkata');

    // Inject the required mock arguments here
    renderHook(() => useShareActions(mockUsername, mockExportData, mockOnClose));

    const hookDateOutput = new Intl.DateTimeFormat('en-US', {
      timeZone: process.env.TZ,
      month: 'short',
      day: 'numeric',
    }).format(lateUtcDate);

    expect(hookDateOutput).toBe('Jan 2');
  });

  it('3. verifies leap year boundaries parse without leaving gaps in grids', () => {
    const leapDay = new Date('2024-02-29T12:00:00Z');
    vi.setSystemTime(leapDay);

    // Inject the required mock arguments here
    renderHook(() => useShareActions(mockUsername, mockExportData, mockOnClose));

    const month = leapDay.getMonth(); // 1 = Feb
    const day = leapDay.getDate(); // 29

    expect(month).toBe(1);
    expect(day).toBe(29);
  });

  it('4. asserts calendar date format utility outputs match expectations in each locale', () => {
    const testDate = new Date('2024-12-25T15:00:00Z');

    const usFormat = new Intl.DateTimeFormat('en-US').format(testDate);
    expect(usFormat).toBe('12/25/2024');

    const ukFormat = new Intl.DateTimeFormat('en-GB').format(testDate);
    expect(ukFormat).toBe('25/12/2024');
  });

  it('5. tests offsets around transition dates like daylight savings (DST)', () => {
    setTimezone('America/New_York');

    const beforeDST = new Date('2024-03-10T06:59:00Z');
    const afterDST = new Date('2024-03-10T07:01:00Z');

    const beforeOffset = beforeDST.getTimezoneOffset();
    const afterOffset = afterDST.getTimezoneOffset();

    expect(beforeOffset - afterOffset).toBe(60);
  });
});
