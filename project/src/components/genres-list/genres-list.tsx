import {movieData} from '../../mocks/films';

function GenresList(props: any): JSX.Element {

  const {handleClickGenre} = props;

  const genresAllFilms = movieData.map((film) => film.genre);
  const genres = [...genresAllFilms];
  const uniqueSet = new Set(genres);
  const uniqListGenres = Array.from(uniqueSet);

  return (
    <ul className="catalog__genres-list">
      <li className='catalog__genres-item catalog__genres-item--active'><a href="#" className="catalog__genres-link" onClick={handleClickGenre} >All genres</a></li>
      {uniqListGenres.map((genreFilm) => <li key={genreFilm} className='catalog__genres-item'><a href="#" className="catalog__genres-link" onClick={handleClickGenre} >{genreFilm}</a></li>)}
    </ul>
  );

}

export default GenresList;
