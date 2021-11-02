import React from 'react';

function PlayerPreviewVideo(restProps: any): JSX.Element {

  const {...props} = restProps;

  const prop = props;

  return (
    <video autoPlay src={prop.previewVideoLink} width="280" height="175" muted />
  );
}

export default PlayerPreviewVideo;
