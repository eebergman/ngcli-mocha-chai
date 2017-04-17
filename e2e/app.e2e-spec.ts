import { RootPage } from './app.po';
const expect = global['chai'].expect;

describe('ngcli-mocha-chai App', () => {
  let page: RootPage;

  beforeEach(() => {
    page = new RootPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
