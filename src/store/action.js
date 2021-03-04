export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  RESET_GENRE: `genre/reset`,
  RESET_VISIBLE_FILMS_COUNT: `films/resetVisibleFilmsCount`,
  INCREASE_VISIBLE_FILMS_COUNT: `films/increaseVisibleFilmsCount`
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  }),
  resetVisibleFilmsCount: () => ({
    type: ActionType.RESET_VISIBLE_FILMS_COUNT,
  }),
  increaseVisibleFilmsCount: () => ({
    type: ActionType.INCREASE_VISIBLE_FILMS_COUNT,
  })
};
