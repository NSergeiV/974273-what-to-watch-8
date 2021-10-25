import {DataFilm} from '../../types/movie-data';
import {Link} from 'react-router-dom';

function FilmCard(props: DataFilm): JSX.Element {

  const route = `/films/${props.id}`;

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.previewImage} alt={props.name} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={route}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
