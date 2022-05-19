"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
// Create styles
const styles = {
    root: {
        margin: 0,
        width: '100%',
        height: '141vw',
        overflowY: 'hidden',
    },
    snapshot: {
        width: '100%',
        position: 'relative',
        marginTop: '-5vw',
    },
    details: {
        padding: '2.5vw 4.5vw',
    },
    snapshotImg: {
        width: '100%',
        height: 'auto',
        zIndex: -1,
    },
    logo: {
        position: 'absolute',
        top: '10vw',
        right: '5vw',
        width: '21vw',
        border: '1px solid yellow',
    },
    configurationName: {
        margin: '0.5vw 0 2.5vw',
    },
    svg: {
        width: '100%',
        height: 'auto',
    },
    configurationItems: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: '-1vw 0 0 -7vw',
        width: '107.5vw',
    },
    configurationItem: {
        display: 'flex',
        flexDirection: 'column',
        width: '42vw',
        margin: '1vw 0 0 7vw',
    },
    configurationItemName: {
        margin: '1vw 0 0.75vw',
    },
    configurationItemContent: {
        borderTop: '0.15vw solid #001667',
        borderBottom: '0.15vw solid #B82121',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '14.8vw',
        overflowY: 'hidden',
    },
    column: {
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
    },
    cell: {
        height: '3.7vw',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    nextCell: {
        borderTop: '0.15vw solid #D8D8D8',
    },
    mediumText: {
        color: '#001667',
        fontSize: '1.7vw',
        fontFamily: 'OptimaLTPro-Medium',
        fontWeight: 500,
        lineHeight: '0.17vw',
    },
    smallText: {
        color: '#001667',
        fontFamily: 'OptimaLTPro-Medium',
        fontSize: '1.3vw',
        fontWeight: 500,
        lineHeight: '0.19vw',
    },
    title: {
        color: '#001667',
        fontFamily: 'OptimaLTPro-Medium',
        fontSize: '2.4vw',
        fontWeight: 500,
        lineHeight: '0.25vw',
    },
    subtitle: {
        color: '#001667',
        fontFamily: 'OptimaLTPro-Bold',
        fontSize: '1.7vw',
        fontWeight: 'bold',
        lineHeight: '0.17vw',
    },
    configurationItemValue: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    configurationNote: {
        width: '100%',
        overflowY: 'hidden',
    },
};
function createMewaLogo() {
    const polygon = react_1.default.createElement('POLYGON', { id: 'path-1', points: '128 39 -9.93944645e-15 39 -9.93944645e-15 0 128 0' }, null);
    const defs = react_1.default.createElement('DEFS', { key: 1 }, polygon);
    const p = react_1.default.createElement('PATH', {
        d: 'M-8.34740561e-15,0 L0.203844119,0.719949654 C1.910539,6.85138901 3.09763122,13.1113908 4.09087169,19.3901825 L4.5005584,22 L10.522953,21.9772543 L17,21.9772543 L16.9090695,21.4600378 L16.7511903,20.6945968 L16.5233645,19.4129282 L16.1826251,19.4574305 C13.9503321,19.7462016 11.5881385,19.7788366 9.34085699,19.6829093 L8.86422148,19.6601636 L8.72732616,19.1656927 C8.19273497,17.2956037 7.83001234,15.3800234 7.45529889,13.4743325 L7.31840357,12.7543828 L9.34085699,12.7998741 L11.569153,12.8671222 L13.6375713,12.9343702 L14.4779286,12.9798615 L15.1374243,13.0016183 L15.0464939,12.5071474 L14.9095985,11.7871977 L14.7047552,10.5272858 L14.2501029,10.5727771 C12.132722,10.7606761 9.92341151,10.7596871 7.79503909,10.8200126 L6.88673367,10.8200126 L6.20525481,6.77128473 L5.70463763,3.86874045 L5.54475989,2.83430729 L5.47681185,2.47433246 L5.45382942,2.29434505 L6.15928995,2.29434505 C8.54546523,2.28643352 10.9596191,2.43081902 13.3417974,2.57520453 L14.7327338,2.67508766 L14.4919179,1.32814888 L14.2650914,0 L-8.34740561e-15,0',
        id: 'path6161',
    });
    const g4 = react_1.default.createElement('G', {
        id: 'g6159',
        transform: 'translate(74.500000, 15.000000) scale(-1, 1) rotate(-180.000000) translate(-74.500000, -15.000000) translate(66.000000, 4.000000)',
        fill: '#BD1933',
        fillRule: 'nonzero',
    }, p);
    const g3 = react_1.default.createElement('G', { id: 'MEWA_Textil-Management_Logo-(1)', transform: 'translate(438.000000, 29.000000)' }, g4);
    const g2 = react_1.default.createElement('G', { id: '1-DE', transform: 'translate(-438.000000, -29.000000)' }, g3);
    const g1 = react_1.default.createElement('G', { id: 'PDF', stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd', key: 2 }, g2);
    return react_1.default.createElement('SVG', { width: '128px', height: '39px', viewBox: '0 0 128 39', style: styles.svg }, [defs, g1]);
}
function createArticle(article, index, dictionary) {
    const attr1Text = react_1.default.createElement('TEXT', { style: styles.mediumText }, dictionary['color']);
    const attr2Text = react_1.default.createElement('TEXT', { style: styles.mediumText }, dictionary['material']);
    const attr3Text = react_1.default.createElement('TEXT', { style: styles.mediumText }, dictionary['weight']);
    const attr4Text = react_1.default.createElement('TEXT', { style: styles.mediumText }, dictionary['articleNo']);
    const attr1 = react_1.default.createElement('VIEW', { key: 1, style: [styles.cell] }, attr1Text);
    const attr2 = react_1.default.createElement('VIEW', { key: 2, style: [styles.cell, styles.nextCell] }, attr2Text);
    const attr3 = react_1.default.createElement('VIEW', { key: 3, style: [styles.cell, styles.nextCell] }, attr3Text);
    const attr4 = react_1.default.createElement('VIEW', { key: 4, style: [styles.cell, styles.nextCell] }, attr4Text);
    const column1 = react_1.default.createElement('VIEW', { key: 1, style: [styles.column, { borderRight: '0.15vw solid #001667' }] }, [attr1, attr2, attr3, attr4]);
    const val1Text = react_1.default.createElement('TEXT', { style: styles.smallText }, article.color);
    const val1 = react_1.default.createElement('VIEW', { style: [styles.cell, styles.configurationItemValue], key: 11 }, val1Text);
    const val2Text = react_1.default.createElement('TEXT', { style: styles.smallText }, article.fabric);
    const val2 = react_1.default.createElement('VIEW', { style: [styles.cell, styles.configurationItemValue, styles.nextCell], key: 12 }, val2Text);
    const val3Text = react_1.default.createElement('TEXT', { style: styles.smallText }, article.weight);
    const val3 = react_1.default.createElement('VIEW', { style: [styles.cell, styles.configurationItemValue, styles.nextCell], key: 13 }, val3Text);
    const val4Text = react_1.default.createElement('TEXT', { style: styles.smallText }, article.articleNo);
    const val4 = react_1.default.createElement('VIEW', { style: [styles.cell, styles.configurationItemValue, styles.nextCell], key: 14 }, val4Text);
    const column2 = react_1.default.createElement('VIEW', { key: 2, style: styles.column }, [
        val1,
        val2,
        val3,
        val4,
    ]);
    const title = react_1.default.createElement('TEXT', { key: 1, style: [styles.configurationItemName, styles.subtitle] }, article.name);
    const content = react_1.default.createElement('VIEW', { key: 2, style: styles.configurationItemContent }, [
        column1,
        column2,
    ]);
    return react_1.default.createElement('VIEW', { key: `article-${index}`, style: styles.configurationItem }, [
        title,
        content,
    ]);
}
function createNote(note, dictionary) {
    const noteText = react_1.default.createElement('TEXT', { style: styles.smallText }, note);
    const noteSpace = react_1.default.createElement('VIEW', { style: styles.configurationNote }, noteText);
    const noteTitle = react_1.default.createElement('TEXT', { key: 1, style: [styles.configurationItemName, styles.subtitle] }, dictionary['note']);
    const noteContent = react_1.default.createElement('VIEW', { key: 2, style: styles.configurationItemContent }, noteSpace);
    return react_1.default.createElement('VIEW', { key: 'note', style: styles.configurationItem }, [
        noteTitle,
        noteContent,
    ]);
}
function createSnapshotView(snapshot) {
    const image = react_1.default.createElement('IMAGE', {
        source: snapshot,
        style: styles.snapshotImg,
        key: 'im',
    });
    const logo = react_1.default.createElement('VIEW', { style: styles.logo, key: 'log' }, createMewaLogo());
    return react_1.default.createElement('VIEW', { style: styles.snapshot, key: 'snap' }, [
        image,
        logo,
    ]);
}
function createDetailsView(title, articles, note, dictionary) {
    const titleText = react_1.default.createElement('TEXT', { style: [styles.configurationName, styles.title], key: 1 }, title);
    const items = [];
    for (let index = 0; index < articles.length; index++) {
        items.push(createArticle(articles[index], index, dictionary));
    }
    if (note) {
        items.push(createNote(note, dictionary));
    }
    const configurationItems = react_1.default.createElement('VIEW', { key: 2, style: styles.configurationItems }, items);
    return react_1.default.createElement('VIEW', { style: styles.details, key: 'det' }, [
        titleText,
        configurationItems,
    ]);
}
function createDetailsPage(props) {
    const { note, title, texts, articles, snapshot } = props;
    return react_1.default.createElement('VIEW', { style: styles.root, key: 'page' }, [
        createSnapshotView(snapshot),
        createDetailsView(title, articles, note, texts),
    ]);
}
exports.default = createDetailsPage;
//# sourceMappingURL=details.js.map