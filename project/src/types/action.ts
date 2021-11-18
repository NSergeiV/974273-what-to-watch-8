export enum ActionType {
  ChoosingGenre = 'films/chooseng-genre',

  SelectAllGenre = 'films/genre-all'
}

export type ChoosingGenreAction = {
  type: ActionType.ChoosingGenre;
};

export type SelectAllGenreAction = {
  type: ActionType.SelectAllGenre;
};

export type Actions = ChoosingGenreAction | SelectAllGenreAction;
