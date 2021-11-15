export enum ActionType {
  ChoosingComedyGenre = 'films/genre/comedy',
  ChoosingCrimeGenre = 'films/genre/crime',
  ChoosingDocumentaryGenre = 'films/genre/documentary',
  ChoosingDramaGenre = 'films/genre/drama',
  ChoosingHorrorGenre = 'films/genre/horror',
  ChoosingKidsFamilyGenre = 'films/genre/kids_family',
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

export type Actions = ChoosingComedyGenreAction | ChoosingCrimeGenreAction | ChoosingDocumentaryGenreAction | ChoosingDramaGenreAction | ChoosingHorrorGenreAction;
