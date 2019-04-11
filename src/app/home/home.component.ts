import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <h1>{{ title }}</h1>
    <p>Angular input output decorator example</p>
    <app-parent></app-parent>`
})
export class HomeComponent {
    title = 'Home';
}
