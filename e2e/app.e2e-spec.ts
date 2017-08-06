import { NgJenkinsStatusPage } from './app.po';

describe('ng-jenkins-status App', () => {
  let page: NgJenkinsStatusPage;

  beforeEach(() => {
    page = new NgJenkinsStatusPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
