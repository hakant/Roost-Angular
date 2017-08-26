import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  async getLogoTextHeader() {
    const texts = await this.getLogoTexts();
    return texts[0].getText();
  }

  async getLogoTextSubHeader() {
    const texts = await this.getLogoTexts();
    return texts[1].getText();
  }

  private async getLogoTexts(): Promise<ElementFinder[]> {
    const logoTextComponents = element.all(by.css('app-header .logo__text span'));

    if (await logoTextComponents.count() < 2) {
      throw new Error('Can not find logo text.');
    }

    return logoTextComponents;
  }
}
