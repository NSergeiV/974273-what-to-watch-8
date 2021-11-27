import {ActionType, ChoosingGenreAction, SelectAllGenreAction} from '../types/action';

export const choosingGenre = (genre: string): ChoosingGenreAction => ({
  type: ActionType.ChoosingGenre,
  payload: genre,
});

export const selectAllGenre = (): SelectAllGenreAction => ({
  type: ActionType.SelectAllGenre,
});
