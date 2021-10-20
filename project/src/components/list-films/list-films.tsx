import {MovieData} from '../../types/movie-data';
import {DataFilm} from '../../types/movie-data';
import FilmCard from '../film-card/film-card';

function ListFilms(movieData: MovieData): JSX.Element {
  const movieDataNabor = Object.values(movieData);

  return (
    <div className="catalog__films-list">
      {movieDataNabor.map((oneFilmData: DataFilm) => <FilmCard {...oneFilmData as DataFilm} key={oneFilmData.id} />)}
    </div>
  );


}

export default ListFilms;
