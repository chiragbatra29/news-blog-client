import { NewsBlogAppPage } from './app.po';

describe('news-blog-app App', () => {
  let page: NewsBlogAppPage;

  beforeEach(() => {
    page = new NewsBlogAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
