import React from 'react';
import { margin } from '../../assets/images';

export type Configuration = {
  image: string;
  gender: 'female' | 'male';
};

export type CoverPageProps = {
  background?: string;
  logo?: string;
  title: string;
  subtitle: string;
  date: string;
  configurations: Configuration[];
};

const styles = {
  root: {
    margin: 0,
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  logo: {
    position: 'absolute',
    top: '7vw',
    right: '6vw',
    width: '21vw',
    height: '12vw',
  },
  margin: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '28vw',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  header: {
    position: 'absolute',
    top: '21vw',
    right: '6vw',
    width: '69vw',
  },
  headerContent: {
    position: 'relative',
    with: '100%',
  },
  svg: {
    width: '100%',
    height: 'auto',
  },
  configuration: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  title: {
    position: 'absolute',
    left: '2.3vw',
    top: '6.5vw',
  },
  subtitle: {
    position: 'absolute',
    left: '2.3vw',
    top: '18vw',
  },
  date: {
    position: 'absolute',
    left: '52vw',
    top: '1.5vw',
  },
  titleText: {
    color: '#FFFFFF',
    fontFamily: 'OptimaLTPro-Roman',
    fontSize: '4vw',
    letterSpacing: '0.5px',
    lineHeight: '0.22vw',
    margin: '0.5vw 0',
  },
  subtitleText: {
    color: '#FFFFFF',
    fontFamily: 'OptimaLTPro-Bold',
    fontSize: '1.7vw',
    letterSpacing: 0,
    lineHeight: '0.2vw',
    margin: '0.5vw 0',
  },
  dateText: {
    color: '#FFFFFF',
    fontFamily: 'OptimaLTPro-Bold',
    fontSize: '1.7vw',
    letterSpacing: 0,
    lineHeight: '0.2vw',
    margin: '0.5vw 0',
  },
};

function createBackground(image: string): React.ReactElement {
  const bgImage = React.createElement('IMAGE', { style: styles.image, source: image }, null);
  return React.createElement('VIEW', { key: 'bg', style: styles.background }, bgImage);
}

function createLogo(image: string): React.ReactElement {
  const lgImage = React.createElement('IMAGE', { style: styles.logoImage, source: image }, null);
  return React.createElement('VIEW', { key: 'lg', style: styles.logo }, lgImage);
}

function createHeaderBackground(): React.ReactElement {
  const polygon = React.createElement(
    'POLYGON',
    { id: 'path-1', points: '0 0 408.8976 0 408.8976 136.063 0 136.063' },
  );
  const defs = React.createElement('DEFS', { key: 'defs' }, polygon);
  const headerPolygon = React.createElement('POLYGON', {
    id: 'Fill-1',
    fill: '#b01d1c',
    points: '408.8976 0 408.8976 136.063 -0.0004 136.063 -0.0004 27.213 291.7696 27.213 297.4396 0',
    style: { fillOpacity: 0.85 },
  });
  const g = React.createElement(
    'G',
    { id: 'PDF', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', key: 'g' },
    headerPolygon,
  );
  return React.createElement(
    'SVG',
    { key: 'svg', width: '409px', height: '137px', viewBox: '0 0 409 137', style: styles.svg },
    [defs, g],
  );
}

function createHeader(title: string, subtitle: string, date: string): React.ReactElement {
  const titleText = React.createElement(
    'TEXT',
    { style: styles.titleText, hyphenationCallback: (word: string) => [word] },
     title,
  );
  const titleView = React.createElement('VIEW', { key: 'title', style: styles.title }, titleText);
  const subtitleText = React.createElement(
    'TEXT',
    { style: styles.subtitleText, hyphenationCallback: (word: string) => [word] },
    subtitle,
  );
  const subtitleView = React.createElement(
    'VIEW',
    { key: 'subtitle', style: styles.subtitle },
    subtitleText,
  );
  const dateText = React.createElement('TEXT', { style: styles.dateText }, date);
  const dateView = React.createElement('VIEW', { key: 'date', style: styles.date }, dateText);
  const headerContent = React.createElement('VIEW', { style: styles.headerContent }, [
    createHeaderBackground(),
    titleView,
    subtitleView,
    dateView,
  ]);
  return React.createElement('VIEW', { key: 'hd', style: styles.header }, headerContent);
}

function createConfigurationImage(configuration: Configuration, index: number, arraySize: number): React.ReactElement {
  const imageStyles = configuration.gender === 'male' ?
    {
      width: `${150 - index * 11 - (arraySize - 1) * 9}vw`,
      marginLeft: `${-23 + ((arraySize - 1) * 80) / (arraySize + 1) - index * (30 - arraySize * 2 - index * 1.5)}vw`,
      marginBottom: `${-55 - index * (4.5 - arraySize * 1.5) + (arraySize - 1) * 9}vw`,
      height: 'auto',
    } : {
      width: `${160 - index * 12.5 - (arraySize - 1) * 9}vw`,
      marginLeft: `${-30 + ((arraySize - 1) * 80) / (arraySize + 1) - index * (29 - arraySize * 2 - index * 1.5)}vw`,
      marginBottom: `${-55 - index * (4.5 - arraySize * 1.5) + (arraySize - 1) * 9}vw`,
      height: 'auto',
    };
  const image = React.createElement('IMAGE', { key: index, source: configuration.image, style: imageStyles }, null);
  return React.createElement(
    'VIEW',
    { key: `conf-${index}`, style: styles.configuration },
    image,
  );
}

function createCoverPage(props: CoverPageProps): React.ReactElement {
  const { background, logo, title, subtitle, date } = props;

  const children: React.ReactElement[] = [];
  if (background) {
    //children.push(createBackground(background));
  }
  if (logo) {
    children.push(createLogo(logo));
  }

  const mgImage = React.createElement('IMAGE', { style: styles.image, source: margin });
  const mg = React.createElement('VIEW', { key: 'mg', style: styles.margin }, mgImage);
  children.push(mg);
  children.push(createHeader(title, subtitle, date));

  for (let index = props.configurations.length - 1; index >= 0; index--) {
    children.push(createConfigurationImage(props.configurations[index], index, props.configurations.length));
  }

  return React.createElement('VIEW', { style: styles.root }, children);
}

export default createCoverPage;
