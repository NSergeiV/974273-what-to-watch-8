import React from 'react';

function PlayerPreviewVideo(restProps: any): JSX.Element {
  return (
    <video autoPlay src={restProps.previewVideoLink} width="280" height="175" muted loop />
  );
}

export default PlayerPreviewVideo;
