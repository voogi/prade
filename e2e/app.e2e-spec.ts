import { PradePage } from './app.po';

describe('prade App', () => {
  let page: PradePage;

  beforeEach(() => {
    page = new PradePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to prade!');
  });
});
