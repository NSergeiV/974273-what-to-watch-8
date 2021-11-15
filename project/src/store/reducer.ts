import {movieData} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GAME_STEP} from '../const';

const initialState = {
  genre: All_GENRES,
  films: movieData,
};

const STEP_COUNT = 1;

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case COMEDY:
      return {...state, films: searchFilms('Comedy', state.films)};
    case CRIME:
      return {...state, films: searchFilms('Crime', state.films)};
    default:
      return state;
  }
};

export {reducer};
