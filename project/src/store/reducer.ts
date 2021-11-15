import {movieData} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GAME_STEP} from '../const';

const initialState = {
  genre: 'All_genres',
  films: movieData,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChoosingComedyGenre:
      return {...state, genre: action.payload, films: searchFilms('Comedy', state.films)};
    case ActionType.ChoosingCrimeGenre:
      return {...state, films: searchFilms('Crime', state.films)};
    case ActionType.ChoosingDocumentaryGenre:
      return {...state, films: searchFilms('Documentary', state.films)};
    case ActionType.ChoosingDramaGenre:
      return {...state, films: searchFilms('Drama', state.films)};
    case ActionType.ChoosingHorrorGenre:
      return {...state, films: searchFilms('Horror', state.films)};
    case ActionType.ChoosingKidsFamilyGenre:
      return {...state, films: searchFilms(['Kids', 'Family'], state.films)};
    default:
      return state;
  }
};

export {reducer};
