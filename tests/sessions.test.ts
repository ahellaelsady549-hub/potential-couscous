import { describe, expect, test } from 'bun:test';
import { availableSlots, isSessionOpen, banExpiry } from '../src/lib/sessions';

const now = new Date(2026, 10, 1, 8, 0); // Sunday 08:00
const day = new Date(2026, 10, 2); // Monday

describe('sessions', () => {
  test('no slots outside working hours', () => {
    expect(availableSlots(day, [{ weekday: 0, start_time: '09:00', end_time: '12:00' }], [], now)).toHaveLength(0);
  });
  test('30-min slots inside working hours, booked slot removed', () => {
    const booked = { starts_at: new Date(2026, 10, 2, 9, 30).toISOString(), ends_at: new Date(2026, 10, 2, 10, 0).toISOString(), status: 'confirmed' };
    const slots = availableSlots(day, [{ weekday: 1, start_time: '09:00', end_time: '11:00' }], [booked], now);
    expect(slots.map((s) => s.getHours() * 60 + s.getMinutes())).toEqual([540, 600, 630]);
  });
  test('chat open from start until 1 hour after end', () => {
    const b = { starts_at: '2026-11-02T09:00:00Z', ends_at: '2026-11-02T09:30:00Z', status: 'confirmed' };
    expect(isSessionOpen(b, new Date('2026-11-02T08:59:00Z'))).toBe(false);
    expect(isSessionOpen(b, new Date('2026-11-02T10:30:00Z'))).toBe(true);
    expect(isSessionOpen(b, new Date('2026-11-02T10:31:00Z'))).toBe(false);
  });
  test('ban durations', () => {
    const n = new Date('2026-01-01T00:00:00Z');
    expect(banExpiry('month', n)).toBe('2026-01-31T00:00:00.000Z');
    expect(banExpiry('year', n)).toBe('2027-01-01T00:00:00.000Z');
    expect(banExpiry('forever', n)).toBeNull();
  });
});
