export enum ActionType {
  ChoosingComedyGenre = 'films/genre/comedy',
  ChoosingCrimeGenre = 'films/genre/crime',
  ChoosingDocumentaryGenre = 'films/genre/documentary',
  ChoosingDramaGenre = 'films/genre/drama',
  ChoosingHorrorGenre = 'films/genre/horror',
  ChoosingKidsFamilyGenre = 'films/genre/kids-family',
  ChoosengRomanceGenre = 'films/genre/romance',
  ChoosengSciFiGenre = 'films/genre/sci_fi',
  ChoosengThrillerGenre = 'films/genre/thriller',
  SelectAllGenre = 'films/genre/all'
}

export type ChoosingComedyGenreAction = {
  type: ActionType.ChoosingComedyGenre;
};

export type ChoosingCrimeGenreAction = {
  type: ActionType.ChoosingCrimeGenre;
};

export type ChoosingDocumentaryGenreAction = {
  type: ActionType.ChoosingDocumentaryGenre;
};

export type ChoosingDramaGenreAction = {
  type: ActionType.ChoosingDramaGenre;
};

export type ChoosingHorrorGenreAction = {
  type: ActionType.ChoosingHorrorGenre;
};

export type ChoosingKidsFamilyGenreAction = {
  type: ActionType.ChoosingKidsFamilyGenre;
};

export type ChoosengRomanceGenreAction = {
  type: ActionType.ChoosengRomanceGenre;
};

export type ChoosengSciFiGenreAction = {
  type: ActionType.ChoosengSciFiGenre;
};

export type ChoosengThrillerGenreAction = {
  type: ActionType.ChoosengThrillerGenre;
};

export type SelectAllGenreAction = {
  type: ActionType.SelectAllGenre;
};

export type Actions = ChoosingComedyGenreAction | ChoosingCrimeGenreAction | ChoosingDocumentaryGenreAction | ChoosingDramaGenreAction | ChoosingHorrorGenreAction | ChoosingKidsFamilyGenreAction | ChoosengRomanceGenreAction | ChoosengSciFiGenreAction | ChoosengThrillerGenreAction | SelectAllGenreAction;
