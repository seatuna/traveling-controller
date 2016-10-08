import { TravelingControllerPage } from './app.po';

describe('traveling-controller App', function() {
  let page: TravelingControllerPage;

  beforeEach(() => {
    page = new TravelingControllerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
