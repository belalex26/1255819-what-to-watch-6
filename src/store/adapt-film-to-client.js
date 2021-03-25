export const adaptFilmToClient = (film) => {
  return {
    id: film.id,
    name: film.name,
    posterImage: film.poster_image,
    previewImage: film.preview_image,
    backgroundImage: film.background_image,
    backgroundColor: film.background_color,
    scoresCount: film.scores_count,
    runTime: film.run_time,
    rating: film.rating,
    director: film.director,
    starring: film.starring,
    genre: film.genre,
    description: film.description,
    isFavorite: film.is_favorite,
    released: film.released,
    videoLink: film.video_link,
    previewVideoLink: film.preview_video_link,
  };
};
