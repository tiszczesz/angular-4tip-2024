import { Component } from "@angular/core";

@Component({
    selector: 'my-comp',
    standalone: true,
    template: `
        <h1>Nagłówek</h1>
        <div>To jest mój komponent</div>
        <div>{{message}}</div>
    `,
    styleUrl: './app-mycomp.css'
})
export class MyComp {
    message = 'Hello from MyComp';
}