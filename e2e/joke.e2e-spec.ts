import { JokePage } from './joke.po';

describe(`Page: Joke Page`, () => {
  it(`should have a title of "Chuck Norris Jokes"`, async () => {
    JokePage.navigateTo();

    let title = await JokePage.getTitleText();

    expect(title).toEqual('Chuck Norris Jokes');
  });

   it(`should have a new joke on button click`, async() => {
    JokePage.navigateTo();

    let firstJoke = await JokePage.getParagraphText();

    JokePage.getNextQuote();

    let secondJoke = await JokePage.getParagraphText();

    expect(firstJoke).not.toEqual(secondJoke);
  });
});
