import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { history } from './history.service';

@Component({
    selector: 'my-angular-component',
    template: `
        <div>{{ title }}</div>
    `
})
export class MyAngularComponent {
    public title = 'Hello from Angular!';
}