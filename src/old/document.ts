import React from 'react';
import createConfigurationPage, { ConfigurationPageProps } from './configurationPage';
import createCoverPage, { CoverPageProps } from './coverPage';

export type DocumentProps = {
  coverPage?: CoverPageProps;
  configurations: ConfigurationPageProps[];
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
      createConfigurationPage(configurations[index]),
    ));
  }
  return React.createElement('DOCUMENT', { style: {} }, pages);
}

export default createDocument;
