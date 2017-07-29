import { AngularTwoAppPage } from './app.po';

describe('angular-two-app App', () => {
  let page: AngularTwoAppPage;

  beforeEach(() => {
    page = new AngularTwoAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
