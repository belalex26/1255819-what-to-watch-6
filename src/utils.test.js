import {getFilmsByGenre, getGenreList, timeFormat} from './utils';
import {DEFAULT_GENRE} from './const';
import {mockFilms} from './test-mocks';

describe(`FilmUtils work correctly.`, () => {
  it(`Function getFilmsByGenre works correctly`, () => {
    const genre = DEFAULT_GENRE;
    const expectedResult = mockFilms;

    expect(getFilmsByGenre(mockFilms, genre)).toEqual(expectedResult);
  });

  it(`Function getGenreList works correctly`, () => {
    const expectedResult = [DEFAULT_GENRE, `Comedy`, `Drama`];

    expect(getGenreList(mockFilms)).toEqual(expectedResult);
  });

  it(`Function timeFormat works correctly`, () => {
    const s = 1200;
    const expectedResultHours = `00:20:00`;

    expect(timeFormat(s, true)).toEqual(expectedResultHours);
  });

});
