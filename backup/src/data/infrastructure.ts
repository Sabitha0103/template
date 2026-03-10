export interface Infrastructure {
    id: string;
    name: string;
    description: string;
    image: string;
    span?: string;
}

export const infrastructureData: Infrastructure[] = [
    {
        id: 'infra-1',
        name: 'Central Library',
        description: 'Vast collection of technical volumes, international journals, and an advanced digital resource center.',
        image: 'https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        span: 'md:col-span-2'
    },
    {
        id: 'infra-2',
        name: 'Smart Classrooms',
        description: 'Wi-Fi enabled, fully air-conditioned rooms equipped with interactive displays and lecture capture systems.',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'infra-3',
        name: 'Sports Complex',
        description: 'Indoor stadium, modern gymnasium, and expansive outdoor courts for all major athletic activities.',
        image: 'https://images.unsplash.com/photo-1574629810360-7efbbc21bf75?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
        id: 'infra-4',
        name: 'Student Hostels',
        description: 'Comfortable, secure residential facilities with high-speed internet, recreational areas, and hygienic mess blocks.',
        image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        span: 'md:col-span-2'
    }
];
