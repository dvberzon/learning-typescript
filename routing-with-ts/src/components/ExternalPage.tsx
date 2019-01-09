import React, { FunctionComponent } from 'react';

/* External page */
// opens the page in an iframe in the main area
const ExternalPage: FunctionComponent<{src: string}> = ({src}) => (
  <iframe src={src}></iframe>
)

export { ExternalPage }