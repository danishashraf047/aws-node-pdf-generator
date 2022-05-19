import React from 'react';
import createDetailsPage, { DetailsProps } from './details';
import createCoverPage, { CoverProps } from './cover';

export type DocumentProps = {
  coverPage?: CoverProps;
  configurations: DetailsProps[];
};

function createDocument(props: DocumentProps): React.ReactElement {
  const pages: React.ReactElement[] = [];
  const { coverPage, configurations } = props;
  if ( coverPage ) {
    pages.push(React.createElement(
      'PAGE',
      { size: 'A4', style: {}, key: 'cover' },
      createCoverPage(coverPage),
    ));
  }
  for (let index = 0; index < configurations.length; index++) {
    pages.push(React.createElement(
      'PAGE',
      { size: 'A4', style: {}, key: `page-${index}` },
      createDetailsPage(configurations[index]),
    ));
  }
  return React.createElement('DOCUMENT', { style: {} }, pages);
}

export default createDocument;
