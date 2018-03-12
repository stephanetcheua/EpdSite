import { UniversalTestPage } from './app.po';

describe('universal-test App', () => {
  let page: UniversalTestPage;

  beforeEach(() => {
    page = new UniversalTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
