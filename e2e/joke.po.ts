import { browser, element, by } from 'protractor';

export class JokePage {
  static navigateTo() {
    return browser.get('/');
  }

  static getTitleText() {
    return element(by.css('h1')).getText();
  }

  static getParagraphText() {
    return element(by.css('p')).getText();
  }

  static getNextQuote() {
    return element(by.css('button')).click();
  }

}
