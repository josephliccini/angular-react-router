import { ReactRouterAngularPage } from './app.po';

describe('react-router-angular App', () => {
  let page: ReactRouterAngularPage;

  beforeEach(() => {
    page = new ReactRouterAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
