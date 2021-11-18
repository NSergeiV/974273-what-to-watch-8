import {movieData} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {FIRST_GAME_STEP} from '../const';

const initialState = {
  genre: 'All genres',
  films: movieData,
};

const findSimilarGenres = (genreSelected, listFilms) => {
  const movieDataArray = Object.values(listFilms);
  return const relatedMovies = movieDataArray.filter(dataFilm => dataFilm.genre === genreSelected);
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChoosingGenre:
      return {...state, genre: action.payload, films: findSimilarGenres(action.payload, state.films)};
    case ActionType.SelectAllGenre:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
