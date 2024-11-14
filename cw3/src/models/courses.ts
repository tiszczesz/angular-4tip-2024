export type Course = {
    name: string;
    date: Date;
    city: string;
};
export const courses: Course[] = [
    { name: 'Angular', date: new Date('2020-10-10'), city: 'Warszawa' },
    { name: 'React', date: new Date('2020-10-20'), city: 'Kraków' },
    { name: 'Vue', date: new Date('2020-10-30'), city: 'Wrocław' },
    { name: 'Java', date: new Date('2020-11-10'), city: 'Gdańsk' },
    { name: 'Python', date: new Date('2020-11-20'), city: 'Katowice' },
    { name: 'C#', date: new Date('2020-11-30'), city: 'Poznań' }
];
