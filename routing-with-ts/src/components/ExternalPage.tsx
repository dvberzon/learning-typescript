import React, { FunctionComponent } from 'react';

const ExternalPage: FunctionComponent<{src: string}> = ({src}) => (
  <iframe src={src}></iframe>
)

export { ExternalPage }