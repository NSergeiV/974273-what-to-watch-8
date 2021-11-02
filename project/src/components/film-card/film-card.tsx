import {DataFilm} from '../../types/movie-data';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import PlayerPreviewVideo from '../player-preview-video/player-preview-video';

function FilmCard(props: DataFilm): JSX.Element {
  const [isActive, setActive] = useState(false);
  const [isFilm, setFilm] = useState(false);

  const handleActiveChange = () => setActive(!isActive);

  const route = `/films/${props.id}`;
  let timeoutId;

  if (isActive === true) {
    if (isFilm !== true) {
      timeoutId = setTimeout(() => setFilm(!isFilm), 1000);
    }
  } else if (isFilm === true) {
    setFilm(!isFilm);
    clearTimeout(timeoutId);
  }

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleActiveChange} onMouseLeave={handleActiveChange} >
      {isFilm && (<div><PlayerPreviewVideo isActive={isActive} {...props} /></div>) || (<div className="small-film-card__image"><img src={props.previewImage} alt={props.name} width="280" height="175" /></div>)}
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={route}>{props.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
