import { AppPage } from './app.po';

describe('roost-angular App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have a correct logo text', () => {
    page.navigateTo();
    expect(page.getLogoTextHeader()).toEqual('ROOST');
    expect(page.getLogoTextSubHeader()).toEqual('Material Design Real Estate');
  });
});
