export type Course = {
    id: number;
    name: string;
    date: Date;
    city: string;
    };
    export const courses:Course[] = [
    {id: 1, name: 'Angular', date: new Date('2020-10-10'), city: 'Warszawa'},
    {id: 2, name: 'React', date: new Date('2020-10-20'), city: 'Kraków'},
    {id: 3, name: 'Vue', date: new Date('2020-10-30'), city: 'Wrocław'},
    {id: 4, name: 'Java', date: new Date('2020-11-10'), city: 'Gdańsk'},
    {id: 5, name: 'Python', date: new Date('2020-11-20'), city: 'Katowice'},
    {id: 6, name: 'C#', date: new Date('2020-11-30'), city: 'Poznań'}
    ];