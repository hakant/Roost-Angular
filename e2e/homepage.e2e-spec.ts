import { HomePage } from './homepage.po';

describe('roost-angular App', () => {
  let homePage: HomePage;

  beforeEach(() => {
    homePage = new HomePage();
  });

  it('should have a correct logo text', async () => {
    homePage.navigateTo();
    expect(await homePage.getLogoTextHeader()).toEqual('ROOST');
    expect(await homePage.getLogoTextSubHeader()).toEqual('Material Design Real Estate');
  });

  it('recommended property should have the correct properties', async () => {
    homePage.navigateTo();
    const properties = await homePage.getRecommendedProperties();

    let property = properties.filter(p => p.address === '21 Shop St, San Francisco')[0];
    expect(property.price).toBe('$1,175,000');
    expect(property.numberOfBedrooms).toBe(3);
    expect(property.numberOfBathrooms).toBe(2);
    expect(property.numberOfParking).toBe(2);

    property = properties.filter(p => p.address === 'Beverly Hills, CA 90210')[0];
    expect(property.price).toBe('$1,200,000');
    expect(property.numberOfBedrooms).toBe(3);
    expect(property.numberOfBathrooms).toBe(3);
    expect(property.numberOfParking).toBe(1);
  });
});
