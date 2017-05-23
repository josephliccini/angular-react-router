import { UrlHandlingStrategy, UrlTree, PRIMARY_OUTLET } from '@angular/router';

import { history } from './history.service';

export class AngularReactUrlHandlingStrategy implements UrlHandlingStrategy {

    public shouldProcessUrl(url: UrlTree): boolean {
        // Here we would either need to check if the route is Angular, and if not, hand it to react
        // OR, we have a list of React routes, and can test as we are doing in this example.
        const isReactRoute = url.toString().includes('/react') && url.toString() !== '/';

        if (isReactRoute) {
            // Let react-router know we found a React route
            history.push(url.toString(), {});
        }
        return !isReactRoute;
    }

    public extract(url: UrlTree): UrlTree {
        return url;
    }

    public merge(newUrlPart: UrlTree, rawUrl: UrlTree): UrlTree {
        return newUrlPart;
    }
}