import {movieData} from '../../mocks/films';

/* eslint-disable no-console */
console.log(movieData);

function GenresList(props: any): JSX.Element {

  /* eslint-disable no-console */
  console.log(props);

  const {handleClickGenre} = props;

  const genresAllFilms = movieData.map((film) => film.genre);
  const genres = ['All genres', ...genresAllFilms];
  const uniqueSet = new Set(genres);
  const uniqListGenres = Array.from(uniqueSet);

  console.log(uniqListGenres);

  return (
    <ul className="catalog__films-list">
      {uniqListGenres.map((genreFilm) => <li key={genreFilm} className='catalog__genres-item'><a href="#" className="catalog__genres-link" onClick={handleClickGenre} >{genreFilm}</a></li>)}
    </ul>
  );

}

export default GenresList;
