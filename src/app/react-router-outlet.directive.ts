import * as ReactDOM from 'react-dom';
import * as React from 'react';

import { Directive, ElementRef, OnInit } from '@angular/core';

import ReactRouting from './react-routing.react-component';
import { withRouter } from 'react-router-dom';

@Directive({
    selector: 'react-router-outlet'
})
export class ReactRouterOutletDirective implements OnInit {
    constructor(
        private elementRef: ElementRef
    ) {
    }

    public ngOnInit() {
        ReactDOM.render(
            React.createElement(ReactRouting),
            this.elementRef.nativeElement
        );
    }
}