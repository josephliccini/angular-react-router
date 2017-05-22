import { Component } from '@angular/core';

@Component({
    selector: 'my-angular-component',
    template: `
        <div>Hello from Angular</div>
    `
})
export class MyAngularComponent {
    public foo = 'foo';
}