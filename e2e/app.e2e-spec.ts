import { AppPage } from './app.po';

describe('roost-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a correct logo text', async () => {
    page.navigateTo();
    expect(await page.getLogoTextHeader()).toEqual('ROOST');
    expect(await page.getLogoTextSubHeader()).toEqual('Material Design Real Estate');
  });
});
