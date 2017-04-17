import { NgcliMochaChaiPage } from './app.po';

describe('ngcli-mocha-chai App', () => {
  let page: NgcliMochaChaiPage;

  beforeEach(() => {
    page = new NgcliMochaChaiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
