export interface Achievement {
    id: string;
    title: string;
    description: string;
    date: string;
    type: 'hackathon' | 'research' | 'competition' | 'startup';
}

export const studentAchievements: Achievement[] = [
    {
        id: 'ach-1',
        title: 'Winners at Smart India Hackathon',
        description: 'Team of 6 CSE students secured first prize for developing an AI-based agricultural crop disease detection system.',
        date: 'August 2025',
        type: 'hackathon'
    },
    {
        id: 'ach-2',
        title: 'IEEE Conference Publication',
        description: 'Three undergraduate research papers accepted for presentation at the IEEE International Conference on Advanced Computing.',
        date: 'October 2025',
        type: 'research'
    },
    {
        id: 'ach-3',
        title: 'National Robotics Challenge Finalists',
        description: 'MEC and ECE interdisciplinary team placed among top 5 finalists in the national autonomous drone navigation challenge.',
        date: 'December 2025',
        type: 'competition'
    },
    {
        id: 'ach-4',
        title: 'AI Startup Incubation',
        description: 'Student-led startup focused on ed-tech solutions selected for incubation funding by the State Innovation Council.',
        date: 'January 2026',
        type: 'startup'
    }
];
