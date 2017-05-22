import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyAngularComponent } from './my-angular.component';

const appRoutes: Routes = [
    { path: 'angular', component: MyAngularComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}