// События мыши - https://ru.reactjs.org/docs/events.html#mouse-events
import React from 'react';
import {Fragment} from 'react';
import {DataFilm} from '../../types/movie-data';

// import {withActiveFlag} from "./withActiveFlag.jsx"; // https://up.htmlacademy.ru/profession/react/7/react/demos/5927#12

function PlayerPreviewVideo(props: DataFilm): JSX.Element {
  // const {isActive, onActiveChange, ...restProps} = props;
  const isActive = true;

  return (
    <Fragment>
      <div></div>
      {isActive && <video controls autoPlay src={props.previewVideoLink} width="280" height="175" muted /> || <div className="small-film-card__image"><img src={props.previewImage} alt={props.name} width="280" height="175" /></div>}
    </Fragment>
  );
}

export default PlayerPreviewVideo;
