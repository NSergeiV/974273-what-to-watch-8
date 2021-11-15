import {ActionType, ChoosingComedyGenreAction, ChoosingCrimeGenreAction, ChoosingDocumentaryGenreAction, ChoosingDramaGenreAction, ChoosingHorrorGenreAction, ChoosingKidsFamilyGenreAction} from '../types/action';

export const choosingComedyGenre = (): ChoosingComedyGenreAction => ({
  type: ActionType.ChoosingComedyGenre,
  payload: 'Comedy',
});

export const choosingCrimeGenre = (): ChoosingCrimeGenreAction => ({
  type: ActionType.ChoosingCrimeGenre,
});

export const choosingDocumentaryGenre = (): ChoosingDocumentaryGenreAction => ({
  type: ActionType.ChoosingDocumentaryGenre,
});

export const choosingDramaGenreAction = (): ChoosingDramaGenreAction => ({
  type: ActionType.ChoosingDramaGenre,
});

export const choosingHorrorGenre = (): ChoosingHorrorGenreAction => ({
  type: ActionType.ChoosingHorrorGenre,
});

export const choosingKidsFamilyGenre = (): ChoosingKidsFamilyGenreAction => ({
  type: ActionType.ChoosingKidsFamilyGenre,
});
