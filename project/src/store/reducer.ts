import {movieData} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GAME_STEP} from '../const';

const initialState = {
  genre: 'All genres',
  films: movieData,
};

const findSimilarGenres = (genre, listFilms) => {

};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChoosingComedyGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Comedy', state.films)};
    case ActionType.ChoosingCrimeGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Crime', state.films)};
    case ActionType.ChoosingDocumentaryGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Documentary', state.films)};
    case ActionType.ChoosingDramaGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Drama', state.films)};
    case ActionType.ChoosingHorrorGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Horror', state.films)};
    case ActionType.ChoosingKidsFamilyGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Kids & Family', state.films)};
    case ActionType.ChoosengRomanceGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Romance', state.films)};
    case ActionType.ChoosengSciFiGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('SciFi', state.films)};
    case ActionType.choosengThrillerGenre:
      return {...state, genre: action.payload, films: findSimilarGenres('Thriller', state.films)};
    case ActionType.SelectAllGenre:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
