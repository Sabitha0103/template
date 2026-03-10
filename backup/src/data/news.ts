export interface NewsItem {
    id: string;
    headline: string;
    date: string;
    summary: string;
    category: string;
}

export const newsUpdates: NewsItem[] = [
    {
        id: 'news-1',
        category: 'Workshop',
        headline: 'International Workshop on Generative AI Conducted successfully',
        date: 'March 15, 2026',
        summary: 'A three-day intensive workshop featuring industry experts discussing the future of LLMs and generative design in engineering applications.'
    },
    {
        id: 'news-2',
        category: 'Placement',
        headline: 'Campus Placement Drive Phase-I concludes with record offers',
        date: 'March 10, 2026',
        summary: 'Over 120 students secured offers from top multinational companies, maintaining the institute\'s strong placement track record.'
    },
    {
        id: 'news-3',
        category: 'Hackathon',
        headline: 'SRIT Hackathon 2026 garners 500+ participants nationwide',
        date: 'February 28, 2026',
        summary: 'The annual 24-hour coding marathon saw innovative solutions developed for sustainable urban mobility and smart healthcare.'
    }
];
