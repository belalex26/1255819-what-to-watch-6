export const ActionType = {
  CHANGE_GENRE: `genre/change`,
  RESET_GENRE: `genre/reset`,
};

export const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  })
};
