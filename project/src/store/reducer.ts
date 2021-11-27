import {movieData} from '../mocks/films';
import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {MovieData} from '../types/movie-data';

const initialState = {
  genre: 'All genres',
  films: movieData,
};

const findSimilarGenres = (genreSelected: string, listFilms: MovieData) => {
  const movieDataArray = Object.values(listFilms);
  const relatedMovies = movieDataArray.filter((dataFilm) => dataFilm.genre === genreSelected);
  return relatedMovies;
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChoosingGenre:
      return {...state, genre: action.payload, films: findSimilarGenres(action.payload, initialState.films)};
    case ActionType.SelectAllGenre:
      return {...initialState};
    default:
      return state;
  }
};

export {reducer};
