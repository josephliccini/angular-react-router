import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { history } from './history.service';

import 'rxjs/add/operator/filter';

// Root App Component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'React + Angular Router!';

  constructor(
    private router: Router
  )  {
  }

  public ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd)
        .subscribe((event: NavigationEnd) => {
            // Let React router history know of Angular route to reset it.
            history.push(event.url, {});
        });
  }

}
