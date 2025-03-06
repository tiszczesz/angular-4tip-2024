export const roles = ["admin", "user", "guest", "editor", "moderator"];
export type User {
    id: number;
    name: string;
    role: string;
    email: string;
    age: number;
}
export const users: User[] = [
    { id: 1, name: "John", role: "admin", email: "john@cc.edu.pl", age: 25 },
    { id: 2, name: "Alice", role: "user", email: "alice@gmail.com", age: 22 },
    { id: 3, name: "Bob", role: "guest", email: "bob.Fret@onet.pl", age: 30 },
    { id: 4, name: "Eve", role: "editor", email: "eveMeve@gmail.com", age: 35 },
    { id: 5, name: "Mallory", role: "moderator", email: "mallory.Exec@gmail.com", age: 40 },
];