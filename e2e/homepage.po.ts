import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';
import RecommendedPropertyCard from './recommended-property-card.po';

export class HomePage {
  navigateTo() {
    return browser.get('/');
  }

  async getLogoTextHeader(): Promise<string> {
    const texts = await this.getLogoTexts();
    return texts[0].getText();
  }

  async getLogoTextSubHeader(): Promise<string> {
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

  async getRecommendedProperties(): Promise<Array<RecommendedPropertyCard>> {
    const recommendedPropertyCardElements = element.all(
      by.css('app-header-recommended div.listings-grid__item')
    );

    return await recommendedPropertyCardElements.map<RecommendedPropertyCard>(
      async element => {
        const card = new RecommendedPropertyCard();
        await card.initialize(element);
        return card;
      }
    );
  }
}
