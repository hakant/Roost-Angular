import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getLogoTextHeader() {
    return this.getLogoTexts().first().getText();
  }

  getLogoTextSubHeader() {
    return this.getLogoTexts().last().getText();
  }

  private getLogoTexts() {
    return element.all(by.css('app-header .logo__text span'));
  }
}
