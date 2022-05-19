const fs = require('fs');
import { conf1, background, logo, logo2, snapshot } from './src/assets/images';
import {
  convertPdfToBase64,
  generatePdf,
  savePdfAsFile
} from './src/pdf/generator';
import { Document } from './src/pdf/model';

const coverPage: Document['coverPage'] = {
  background: background,
  logo: logo,
  title: 'Lorem ipsum dolor sit amet, consecteuter adipiscing elit',
  subtitle: 'Lorem ipsum dolor sit amet',
  date: '01.02.2022',
  configurations: [
    { image: conf1, gender: 'female' },
    { image: conf1, gender: 'female' },
    { image: conf1, gender: 'female' },
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
  snapshot: snapshot,
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

exports.handler = async (event, context, callback) => {
  const pdf = await generatePdf({
    coverPage,
    configurations: [configuration],
  }, true);
  const base64PDF = await convertPdfToBase64(pdf);
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
};