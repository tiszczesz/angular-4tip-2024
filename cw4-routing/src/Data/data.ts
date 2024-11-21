export type Worker = {
    name: string;
    role: string;
    image: string;
    bio: string;
}
export const workers: Worker[] = [
    {
        name: 'John Doe',
        role: 'Web Developer',
        image: 'https://via.placeholder.com/150',
        bio: 'John is a web developer with 10 years of experience.'
    },
    {
        name: 'Jane Doe',
        role: 'Web Designer',
        image: 'https://via.placeholder.com/150',
        bio: 'Jane is a web designer with 5 years of experience.'
    },
    {
        name: 'Jim Doe',
        role: 'Project Manager',
        image: 'https://via.placeholder.com/150',
        bio: 'Jim is a project manager with 15 years of experience.'
    }
];