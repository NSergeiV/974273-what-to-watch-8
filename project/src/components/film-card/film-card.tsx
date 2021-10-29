import {DataFilm} from '../../types/movie-data';
import {Link} from 'react-router-dom';
import PlayerPreviewVideo from '../player-preview-video/player-preview-video';

function FilmCard(props: DataFilm): JSX.Element {

  const route = `/films/${props.id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <PlayerPreviewVideo {...props as DataFilm} />
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={route}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
