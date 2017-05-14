import { CommercialisNgPage } from './app.po';

describe('commercialis-ng App', () => {
  let page: CommercialisNgPage;

  beforeEach(() => {
    page = new CommercialisNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
