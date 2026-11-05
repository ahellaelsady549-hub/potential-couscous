export interface AvailabilityRow { weekday: number; start_time: string; end_time: string }
export interface BookingRow { starts_at: string; ends_at: string; status: string }

const SLOT_MIN = 30;
const toMin = (t: string) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };

/** Slots (local time) for a given date that fall inside availability and don't overlap bookings. */
export function availableSlots(date: Date, availability: AvailabilityRow[], bookings: BookingRow[], now = new Date()): Date[] {
  const day = date.getDay();
  const out: Date[] = [];
  for (const a of availability.filter((x) => x.weekday === day)) {
    for (let m = toMin(a.start_time); m + SLOT_MIN <= toMin(a.end_time); m += SLOT_MIN) {
      const s = new Date(date); s.setHours(Math.floor(m / 60), m % 60, 0, 0);
      const e = new Date(s.getTime() + SLOT_MIN * 60000);
      if (s <= now) continue;
      const taken = bookings.some((b) => b.status === 'confirmed' && new Date(b.starts_at) < e && new Date(b.ends_at) > s);
      if (!taken) out.push(s);
    }
  }
  return out.sort((a, b) => a.getTime() - b.getTime());
}

/** Chat is open from session start until one hour after it ends. */
export function isSessionOpen(b: BookingRow, now = new Date()): boolean {
  return b.status === 'confirmed' && now >= new Date(b.starts_at) && now.getTime() <= new Date(b.ends_at).getTime() + 3600000;
}

export const SLOT_MINUTES = SLOT_MIN;

export const BAN_DURATIONS = { month: 30, year: 365, forever: null } as const;
export function banExpiry(kind: keyof typeof BAN_DURATIONS, now = new Date()): string | null {
  const days = BAN_DURATIONS[kind];
  return days === null ? null : new Date(now.getTime() + days * 86400000).toISOString();
}
