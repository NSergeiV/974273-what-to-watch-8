import {ActionType, ChoosingGenreAction, SelectAllGenreAction} from '../types/action';

export const choosingGenre = (genre): ChoosingGenreAction => ({
  type: ActionType.ChoosingGenre,
  payload: genre,
});

export const selectAllGenreAction = (): SelectAllGenreAction => ({
  type: ActionType.SelectAllGenre,
});
