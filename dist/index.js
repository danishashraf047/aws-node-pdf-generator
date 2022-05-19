"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// generatePdf({
//   coverPage,
//   configurations: [configuration],
// }, true).then((pdf) => convertPdfToBase64(pdf)).then((base64) => fs.writeFileSync(`${__dirname}/outputs/exampleBase64.txt`, base64, 'utf-8'));
// generatePdf({
//   coverPage,
//   configurations: [configuration],
// }, true).then((pdf) => savePdfAsFile(pdf, `${__dirname}/outputs/example1.pdf`));
// generatePdf({
//   coverPage,
//   configurations: [configuration, configuration, configuration, configuration],
// }, true).then((pdf) => savePdfAsFile(pdf, `${__dirname}/outputs/example2.pdf`));
// generatePdf({
//   configurations: [configuration, configuration],
// }, true).then((pdf) => savePdfAsFile(pdf, `${__dirname}/outputs/example3.pdf`));
// generatePdf({
//   coverPage,
//   configurations: [configuration, configuration, configuration, configuration],
// }, true).then((pdf) => savePdfAsFile(pdf, `${__dirname}/outputs/example.pdf`));
exports.handler = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    const pdf = yield (0, generator_1.generatePdf)({
        coverPage,
        configurations: [configuration],
    }, true);
    const base64PDF = yield (0, generator_1.convertPdfToBase64)(pdf);
    // const response = {
    //   statusCode: 200,
    //   body: base64PDF,
    // };
    // const buffer = Buffer.from(base64PDF, 'base64');
    // fs.writeFileSync(`${__dirname}/outputs/exampleBase64.pdf`, buffer, 'utf-8')
    let response = {
        statusCode: 200,
        headers: {
            'Content-type': 'application/pdf',
            'content-disposition': 'attachment; filename=test.pdf'
        },
        // body: buffer.toString('base64'),
        body: base64PDF,
        isBase64Encoded: true,
    };
    return callback(null, response);
    // return response;
    // const response = "Test";
    // return response;
});
//# sourceMappingURL=index.js.map