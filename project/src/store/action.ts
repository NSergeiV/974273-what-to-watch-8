import {ActionType, ChoosingComedyGenreAction, ChoosingCrimeGenreAction, ChoosingDocumentaryGenreAction, ChoosingDramaGenreAction, ChoosingHorrorGenreAction, ChoosingKidsFamilyGenreAction} from '../types/action';

export const choosingComedyGenre = (): ChoosingComedyGenreAction => ({
  type: ActionType.ChoosingComedyGenre,
  payload: 'Comedy',
});

export const choosingCrimeGenre = (): ChoosingCrimeGenreAction => ({
  type: ActionType.ChoosingCrimeGenre,
  payload: 'Crime',
});

export const choosingDocumentaryGenre = (): ChoosingDocumentaryGenreAction => ({
  type: ActionType.ChoosingDocumentaryGenre,
  payload: 'Documentary',
});

export const choosingDramaGenre = (): ChoosingDramaGenreAction => ({
  type: ActionType.ChoosingDramaGenre,
  payload: 'Drama',
});

export const choosingHorrorGenre = (): ChoosingHorrorGenreAction => ({
  type: ActionType.ChoosingHorrorGenre,
  payload: 'Horror',
});

export const choosingKidsFamilyGenre = (): ChoosingKidsFamilyGenreAction => ({
  type: ActionType.ChoosingKidsFamilyGenre,
});
