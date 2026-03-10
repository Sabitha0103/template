export interface EventItem {
    id: string;
    title: string;
    dateStr: string;
    month: string;
    day: string;
    type: string;
}

export const upcomingEvents: EventItem[] = [
    {
        id: 'ev-1',
        title: 'National Level Tech Fest — Srijana 2026',
        dateStr: 'April 05-06, 2026',
        month: 'APR',
        day: '05',
        type: 'Cultural & Tech Fest'
    },
    {
        id: 'ev-2',
        title: 'Guest Lecture: Quantum Computing Frontiers',
        dateStr: 'April 12, 2026',
        month: 'APR',
        day: '12',
        type: 'Industry Talk'
    },
    {
        id: 'ev-3',
        title: 'Annual Alumni Meet',
        dateStr: 'April 20, 2026',
        month: 'APR',
        day: '20',
        type: 'Networking'
    },
    {
        id: 'ev-4',
        title: 'Hardware Innovation Challenge',
        dateStr: 'May 02, 2026',
        month: 'MAY',
        day: '02',
        type: 'Competition'
    }
];
