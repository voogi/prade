import { browser, by, element } from 'protractor';

export class PradePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('prade-root h1')).getText();
  }
}
