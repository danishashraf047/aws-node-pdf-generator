"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('fs');
const images_1 = require("./src/assets/images");
const generator_1 = require("./src/pdf/generator");
const coverPage = {
    background: images_1.background,
    logo: images_1.logo,
    title: 'Lorem ipsum dolor sit amet, consecteuter adipiscing elit',
    subtitle: 'Lorem ipsum dolor sit amet',
    date: '01.02.2022',
    configurations: [
        { image: images_1.conf1, gender: 'female' },
        { image: images_1.conf1, gender: 'female' },
        { image: images_1.conf1, gender: 'female' },
    ],
};
const configuration = {
    texts: {
        color: 'Farbe',
        material: 'Material',
        weight: 'Gewicht',
        articleNo: 'Artikel-Nr.',
        note: 'Notizen',
    },
    snapshot: images_1.snapshot,
    title: 'Very long configuration name Very long configuration name Very long configuration name Very long configuration name',
    articles: [
        {
            name: 'Dynamic Construct Bundjacke',
            color: 'efeugrun',
            fabric: '65% Polyester / 35% Baumwolle and something else and much more',
            weight: '245',
            articleNo: '564007',
        },
        {
            name: 'Dynamic Construct Bundjacke',
            color: 'efeugrun',
            fabric: '65% Polyester / 35% Baumwolle',
            weight: '245',
            articleNo: '564007',
        },
        {
            name: 'Dynamic Construct Bundjacke',
            color: 'efeugrun',
            fabric: '65% Polyester / 35% Baumwolle',
            weight: '245',
            articleNo: '564007',
        },
        {
            name: 'Dynamic Construct Bundjacke',
            color: 'efeugrun',
            fabric: '65% Polyester / 35% Baumwolle',
            weight: '245',
            articleNo: '564007',
        },
        {
            name: 'Dynamic Construct Bundjacke',
            color: 'efeugrun',
            fabric: '65% Polyester / 35% Baumwolle',
            weight: '245',
            articleNo: '564007',
        },
    ],
    note: 'abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop abcdefghijklmnop dsjfkjdf djsfuirugirjgiuhreh rjehijriughejfij jfi huehfu ehguejei ghuehguwhgwiefioej hhgurrgjirg irguirgoifogifdjgifhdgo feoiufiogjrgfjgh fuerufirgoj gji gjofjdgoh gjiofghrhugo gjrigjirg rhuhgur ghuyrgrygh r',
};
(0, generator_1.generatePdf)({
    coverPage,
    configurations: [configuration],
}, true).then((pdf) => (0, generator_1.convertPdfToBase64)(pdf)).then((base64) => fs.writeFileSync(`${__dirname}/exampleBase64.txt`, base64, 'utf-8'));
(0, generator_1.generatePdf)({
    coverPage,
    configurations: [configuration],
}, true).then((pdf) => (0, generator_1.savePdfAsFile)(pdf, `${__dirname}/example1.pdf`));
(0, generator_1.generatePdf)({
    coverPage,
    configurations: [configuration, configuration, configuration, configuration],
}, true).then((pdf) => (0, generator_1.savePdfAsFile)(pdf, `${__dirname}/example2.pdf`));
(0, generator_1.generatePdf)({
    configurations: [configuration, configuration],
}, true).then((pdf) => (0, generator_1.savePdfAsFile)(pdf, `${__dirname}/example3.pdf`));
//# sourceMappingURL=index.js.map