import { element, by, browser } from 'protractor';

describe(`JOKE PAGE`, () => {
  it(`should have a title of 'Chuck Norris Jokes'`, () => {
      browser.get('');

      const title = element(by.css('h1')).getText();

      expect(title).toEqual('Chuck Norris Jokes');
  });

  it(`should have different second joke`, async() => {
    browser.get('');

    const joke1 = element(by.css('p')).getText();
    const button = element(by.css('button')).click();
    const joke2 = await element(by.css('p')).getText();

    expect(joke1).not.toEqual(joke2);

  });
});

// import { JokePage } from './joke.po';

// describe(`Page: Joke Page`, () => {
//   it(`should have a title of "Chuck Norris Jokes"`, async () => {
//     JokePage.navigateTo();

//     let title = await JokePage.getTitleText();

//     expect(title).toEqual('Chuck Norris Jokes');
//   });

//    it(`should have a new joke on button click`, async() => {
//     JokePage.navigateTo();

//     let firstJoke = await JokePage.getParagraphText();

//     JokePage.getNextQuote();

//     let secondJoke = await JokePage.getParagraphText();

//     expect(firstJoke).not.toEqual(secondJoke);
//   });
// });
