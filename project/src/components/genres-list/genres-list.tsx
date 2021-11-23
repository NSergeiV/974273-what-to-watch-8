import {movieData} from '../../mocks/films';

/* eslint-disable no-console */
console.log(movieData);

function GenresList(): JSX.Element {
  const genresAllFilms = movieData.map((film) => film.genre);
  const genres = ['All genres', ...genresAllFilms];
  const uniqueSet = new Set(genres);
  const uniqListGenres = Array.from(uniqueSet);

  console.log(uniqListGenres);

  return (
    <div className="catalog__films-list">
      {}
    </div>
  );

}

export default GenresList;
