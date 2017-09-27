import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export default class RecommendedPropertyCard {
    price: string;
    address: string;
    description: string;
    numberOfBedrooms: number;
    numberOfBathrooms: number;
    numberOfParking: number;

    async initialize(propertyCardElement: ElementFinder) {
        const priceElement = propertyCardElement.$('div.listings-grid__price');
        this.price = await browser.executeScript('return arguments[0].innerHTML;', priceElement) as string;

        const addressElement = propertyCardElement.$('.listings-grid__body small');
        this.address = await browser.executeScript('return arguments[0].innerHTML;', addressElement) as string;

        const listingAttributes = propertyCardElement.$$('ul.listings-grid__attrs li');
        const bedElement = listingAttributes.get(0);
        const bathElement = listingAttributes.get(1);
        const parkElement = listingAttributes.get(2);

        const bedIconAndText = await browser.executeScript('return arguments[0].innerHTML;', bedElement) as string;
        this.numberOfBedrooms = parseInt(bedIconAndText.slice(-2), 10);

        const bathIconAndText = await browser.executeScript('return arguments[0].innerHTML;', bathElement) as string;
        this.numberOfBathrooms = parseInt(bathIconAndText.slice(-2), 10);

        const parkingIconAndText = await browser.executeScript('return arguments[0].innerHTML;', parkElement) as string;
        this.numberOfParking = parseInt(parkingIconAndText.slice(-2), 10);
    }
}
