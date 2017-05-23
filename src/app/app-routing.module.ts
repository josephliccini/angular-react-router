import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyAngularComponent } from './my-angular.component';

// Configure Angular routes here
// Don't need to configure React routes here.
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