"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const images_1 = require("../../assets/images");
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
function createBackground(image) {
    const bgImage = react_1.default.createElement('IMAGE', { style: styles.image, source: image }, null);
    return react_1.default.createElement('VIEW', { key: 'bg', style: styles.background }, bgImage);
}
function createLogo(image) {
    const lgImage = react_1.default.createElement('IMAGE', { style: styles.logoImage, source: image }, null);
    return react_1.default.createElement('VIEW', { key: 'lg', style: styles.logo }, lgImage);
}
function createHeaderPolygon() {
    const polygon = react_1.default.createElement('POLYGON', { id: 'path-1', points: '0 0 408.8976 0 408.8976 136.063 0 136.063' }, null);
    const defs = react_1.default.createElement('DEFS', { key: 1 }, polygon);
    const polygon2 = react_1.default.createElement('POLYGON', {
        key: 2,
        id: 'Fill-1',
        fill: '#b01d1c',
        points: '408.8976 0 408.8976 136.063 -0.0004 136.063 -0.0004 27.213 291.7696 27.213 297.4396 0',
        style: { fillOpacity: 0.85 },
    });
    const g4 = react_1.default.createElement('G', { id: 'Clip-2', key: 1 }, null);
    const g3 = react_1.default.createElement('G', {
        id: 'Group-3-Copy',
        transform: 'translate(150.000000, 106.000000)',
        style: { mixBlendMode: 'multiply' },
    }, [g4, polygon2]);
    const g2 = react_1.default.createElement('G', { id: 'COVER-1-DE', transform: 'translate(-150.000000, -106.000000)' }, g3);
    const g1 = react_1.default.createElement('G', { id: 'PDF', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', key: 2 }, g2);
    return react_1.default.createElement('SVG', { key: 'svg', width: '409px', height: '137px', viewBox: '0 0 409 137', style: styles.svg }, [defs, g1]);
}
function createHeader(title, subtitle, date) {
    const titleText = react_1.default.createElement('TEXT', { style: styles.titleText, hyphenationCallback: (word) => [word] }, title);
    const titleView = react_1.default.createElement('VIEW', { key: 'title', style: styles.title }, titleText);
    const subtitleText = react_1.default.createElement('TEXT', { style: styles.subtitleText, hyphenationCallback: (word) => [word] }, subtitle);
    const subtitleView = react_1.default.createElement('VIEW', { key: 'subtitle', style: styles.subtitle }, subtitleText);
    const dateText = react_1.default.createElement('TEXT', { style: styles.dateText }, date);
    const dateView = react_1.default.createElement('VIEW', { key: 'date', style: styles.date }, dateText);
    const headerContent = react_1.default.createElement('VIEW', { style: styles.headerContent }, [
        createHeaderPolygon(),
        titleView,
        subtitleView,
        dateView,
    ]);
    return react_1.default.createElement('VIEW', { key: 'hd', style: styles.header }, headerContent);
}
function createConfigurationImage(configuration, index, arraySize) {
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
    const image = react_1.default.createElement('IMAGE', { key: index, source: configuration.image, style: imageStyles }, null);
    return react_1.default.createElement('VIEW', { key: `conf-${index}`, style: styles.configuration }, image);
}
function createCoverPage(props) {
    const { background, logo, title, subtitle, date } = props;
    const children = [];
    if (background) {
        children.push(createBackground(background));
    }
    if (logo) {
        children.push(createLogo(logo));
    }
    const mgImage = react_1.default.createElement('IMAGE', { style: styles.image, source: images_1.margin }, null);
    const mg = react_1.default.createElement('VIEW', { key: 'mg', style: styles.margin }, mgImage);
    children.push(mg);
    children.push(createHeader(title, subtitle, date));
    for (let index = props.configurations.length - 1; index >= 0; index--) {
        children.push(createConfigurationImage(props.configurations[index], index, props.configurations.length));
    }
    return react_1.default.createElement('VIEW', { style: styles.root, key: 'cover' }, children);
}
exports.default = createCoverPage;
//# sourceMappingURL=cover.js.map