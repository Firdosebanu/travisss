import { TravisciPage } from './app.po';

describe('travisci App', function() {
  let page: TravisciPage;

  beforeEach(() => {
    page = new TravisciPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('travisci works!');
  });
});
