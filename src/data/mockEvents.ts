export interface CalendarEvent {
  id: string;
  name: string;
  date: string; // ISO date string (YYYY-MM-DD)
  time: string; // Display time (e.g., "7:00 PM")
  ticketLink?: string;
}

export const mockEvents: CalendarEvent[] = [
  // January 2026
  {
    id: '1',
    name: 'Open Mic Night',
    date: '2026-01-09',
    time: '7:00 PM',
    ticketLink: 'https://example.com/tickets/open-mic'
  },
  {
    id: '2',
    name: 'Community Meal',
    date: '2026-01-21',
    time: '6:30 PM'
  },
  {
    id: '3',
    name: 'Live Music: The Wanderers',
    date: '2026-01-24',
    time: '8:00 PM',
    ticketLink: 'https://example.com/tickets/wanderers'
  },
  {
    id: '4',
    name: 'Art Exhibition Opening',
    date: '2026-02-01',
    time: '5:00 PM'
  },
  // February 2026
  {
    id: '5',
    name: 'Poetry Slam',
    date: '2026-02-07',
    time: '7:30 PM',
    ticketLink: 'https://example.com/tickets/poetry'
  },
  {
    id: '6',
    name: 'DJ Night',
    date: '2026-02-14',
    time: '9:00 PM',
    ticketLink: 'https://example.com/tickets/dj-night'
  },
  {
    id: '7',
    name: 'Workshop: Screen Printing',
    date: '2026-02-21',
    time: '2:00 PM',
    ticketLink: 'https://example.com/tickets/screenprint'
  },
  {
    id: '8',
    name: 'Film Screening',
    date: '2026-02-21',
    time: '7:00 PM'
  },
  // March 2026
  {
    id: '9',
    name: 'Spring Market',
    date: '2026-03-07',
    time: '11:00 AM'
  },
  {
    id: '10',
    name: 'Live Music: Echo Chamber',
    date: '2026-03-14',
    time: '8:00 PM',
    ticketLink: 'https://example.com/tickets/echo'
  }
];
