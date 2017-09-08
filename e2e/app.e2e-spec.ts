import { DemoProjectPage } from './app.po';

describe('demo-project App', () => {
  let page: DemoProjectPage;

  beforeEach(() => {
    page = new DemoProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
