export interface DepartmentData {
    slug: string;
    code: string;
    name: string;
    fullName: string;
    tagline: string;
    description: string[];
    highlights: string[];
    image: string;
    researchAreas: string[];
    stats: {
        faculty: string;
        labs: string;
        students: string;
        placement: string;
    };
}

export const departments: DepartmentData[] = [
    {
        slug: 'cse',
        code: 'CSE',
        name: 'Computer Science & Engineering',
        fullName: 'Department of Computer Science & Engineering',
        tagline: 'Knowledge creation and innovation driving every aspect of modern life.',
        description: [
            'Computer Science and Engineering animates our world, driving knowledge creation and innovation that touches every aspect of our lives. The department at SRIT prepares students with a strong foundation in algorithms, data structures, operating systems, databases, and software engineering.',
            'Students gain practical experience through industry-level internship programs and exposure to current technologies. The curriculum is aligned with industry standards, ensuring graduates are equipped for careers in software development, systems architecture, and emerging technology domains.',
        ],
        highlights: [
            'Industry-aligned curriculum with real-world project experience',
            'Advanced internship programs with corporate-level exposure',
            'Certified faculty with industry and academic experience',
        ],
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Artificial Intelligence',
            'Cybersecurity',
            'Cloud Computing',
            'Data Science',
        ],
        stats: {
            faculty: '42+',
            labs: '8',
            students: '750+',
            placement: '96%',
        },
    },
    {
        slug: 'csm',
        code: 'CSM',
        name: 'CSE — AI & Machine Learning',
        fullName: 'Department of CSE (Artificial Intelligence & Machine Learning)',
        tagline: 'Preparing students for the future of intelligent computing and automation.',
        description: [
            'The CSE — AI & Machine Learning specialization prepares students for the rapidly evolving landscape of intelligent systems. The program covers core computer science fundamentals alongside specialized courses in machine learning, neural networks, natural language processing, and computer vision.',
        ],
        highlights: [
            'Hands-on experience with modern AI frameworks',
            'Industry exposure through partner organizations',
            'Project-based learning with real-world datasets',
        ],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Deep Learning',
            'Computer Vision',
            'Natural Language Processing',
            'Autonomous Systems',
        ],
        stats: {
            faculty: '18+',
            labs: '3',
            students: '240+',
            placement: '98%',
        },
    },
    {
        slug: 'ece',
        code: 'ECE',
        name: 'Electronics & Communication',
        fullName: 'Department of Electronics & Communications Engineering',
        tagline: 'Embedded systems, signal processing, VLSI design, and telecommunications.',
        description: [
            'Electronics and Communications Engineering at SRIT drives knowledge creation and innovation in communications devices, embedded systems, signal processing, and VLSI design. The department provides a comprehensive curriculum that spans analog and digital electronics, microprocessors, and communication systems.',
        ],
        highlights: [
            'Modern communication systems curriculum',
            'Industry-standard laboratory equipment',
            'Active technical competitions and research participation',
        ],
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'VLSI Design',
            'Signal Processing',
            'Embedded Systems',
            'Communication Networks',
        ],
        stats: {
            faculty: '35+',
            labs: '10',
            students: '600+',
            placement: '92%',
        },
    },
    {
        slug: 'eee',
        code: 'EEE',
        name: 'Electrical & Electronics',
        fullName: 'Department of Electrical & Electronics Engineering',
        tagline: 'Electrical circuits, machines, power systems, and control engineering.',
        description: [
            'The Electrical & Electronics Engineering department provides students with a wide range of fundamental knowledge in core disciplines such as Electrical Circuits, Electrical Machines, Power Systems, Control Systems, and Power Electronics.',
        ],
        highlights: [
            'Power electronics and control systems focus',
            'Practical lab sessions with modern equipment',
            'Career preparation in power and automation engineering',
        ],
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Power Systems & Smart Grids',
            'Renewable Energy Integration',
            'Power Electronics',
            'Control & Automation',
        ],
        stats: {
            faculty: '28+',
            labs: '7',
            students: '450+',
            placement: '88%',
        },
    },
    {
        slug: 'mec',
        code: 'MEC',
        name: 'Mechanical Engineering',
        fullName: 'Department of Mechanical Engineering',
        tagline: 'The most diverse discipline, spanning aerospace, thermal, and manufacturing.',
        description: [
            'The department at SRIT provides a comprehensive education covering thermodynamics, fluid mechanics, manufacturing processes, machine design, and automobile engineering. Students develop both theoretical knowledge and practical skills through well-equipped workshops and laboratories.',
        ],
        highlights: [
            'Manufacturing processes and machine design focus',
            'Well-equipped workshops and laboratories',
            'Diverse career paths across multiple industries',
        ],
        image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Thermal Sciences',
            'Advanced Manufacturing',
            'Robotics & Kinematics',
            'Materials Engineering',
        ],
        stats: {
            faculty: '30+',
            labs: '12',
            students: '500+',
            placement: '85%',
        },
    },
    {
        slug: 'cad',
        code: 'CAD',
        name: 'CSE — AI & Data Science',
        fullName: 'Department of CSE (Artificial Intelligence & Data Science)',
        tagline: 'Big data analytics, statistical inference, and AI-driven decision systems.',
        description: [
            'The CSE — AI & Data Science program equips students with cutting-edge skills in big data analytics, artificial intelligence, and data-driven decision-making. The curriculum combines core computer science fundamentals with specialized courses in data mining, statistical modeling, and predictive analytics.',
        ],
        highlights: [
            'Cloud computing and data engineering skills',
            'Industry collaboration and project-based learning',
            'Preparation for data science and ML engineering careers',
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Big Data Analytics',
            'Predictive Modeling',
            'Machine Learning',
            'Business Intelligence',
        ],
        stats: {
            faculty: '15+',
            labs: '2',
            students: '180+',
            placement: '97%',
        },
    },
    {
        slug: 'civil',
        code: 'CIV',
        name: 'Civil Engineering',
        fullName: 'Department of Civil Engineering',
        tagline: 'Enhancing the standard of living through infrastructural development.',
        description: [
            'Students develop skills in design, analysis, and construction of infrastructure — from buildings and bridges to highways and water systems. The curriculum includes both theoretical knowledge and practical exposure through site visits and laboratory work.',
        ],
        highlights: [
            'Environmental engineering and sustainable development',
            'Design and analysis of infrastructure systems',
            'Practical exposure through site visits and labs',
        ],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
        researchAreas: [
            'Structural Engineering',
            'Geotechnical Engineering',
            'Transportation Planning',
            'Sustainable Infrastructure',
        ],
        stats: {
            faculty: '22+',
            labs: '6',
            students: '380+',
            placement: '82%',
        },
    },
];

export function getDepartmentBySlug(slug: string): DepartmentData | undefined {
    return departments.find((d) => d.slug === slug);
}
