export const adaptFilmToClient = (films) => {
  const adaptedFilms = [];
  films.map((film) => {
    const newFilm = {};
    const filmKeys = Object.keys(film);
    const filmValues = Object.values(film);
    filmKeys.map((key, index) => {
      newFilm[key.replace(/_\w/g, (m) => m[1].toUpperCase())] = filmValues[index];
    });
    adaptedFilms.push(newFilm);
  });
  return adaptedFilms;
};
