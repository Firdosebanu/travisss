export class TravisciPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('travisci-app h1')).getText();
  }
}
