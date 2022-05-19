import PdfDocument from '@react-pdf/pdfkit';
import layoutDocument from '@react-pdf/layout';
import renderPDF from '@react-pdf/render';
import FontStore from '@react-pdf/font';

import concat from 'concat-stream';
import { Base64Encode } from 'base64-stream';
import * as Handlebars from 'handlebars';

import { parseXmlTemplate } from './parser';
import helpers from './helpers';
import { Document } from './model';
import { renderCompositions, putInCompositions } from './postprocessing';
const fs = require('fs');
import { mewaLogo, configurationDetails, cover, headerPolygon, document } from '../assets/templates';
import fonts from '../assets/fonts';
import styles from '../assets/styles';
import { margin } from "../assets/images";

export async function generatePdf(
  context: Document,
  compress: boolean,
): Promise<NodeJS.ReadableStream> {
  Handlebars.registerHelper(helpers);
  Handlebars.registerPartial('mewaLogo', mewaLogo);
  Handlebars.registerPartial('configurationDetails', configurationDetails);
  Handlebars.registerPartial('cover', cover);
  Handlebars.registerPartial('headerPolygon', headerPolygon);
  Handlebars.registerPartial('marginImage', margin);
  const template = Handlebars.compile(document);
  const xml = template(context);
  const rootElement = parseXmlTemplate(xml, styles);

  const fontStore = new FontStore();
  fonts.forEach(fontStore.register);
  fontStore.registerHyphenationCallback((word) => [word]);

  let layout = await layoutDocument(rootElement, fontStore);
  const compositions = [];
  await renderCompositions(layout, compositions);
  if (compositions.length > 0) {
    putInCompositions(rootElement, compositions);
    layout = await layoutDocument(rootElement, fontStore);
  }

  const props = rootElement.props || {};
  const { pdfVersion, language } = props;

  const ctx = new PdfDocument({
    compress,
    pdfVersion,
    lang: language,
    displayTitle: true,
    autoFirstPage: false,
  });

  return renderPDF(ctx, layout);
}

export function savePdfAsFile(pdf: NodeJS.ReadableStream, filepath: string): Promise<void> {
  const stream = fs.createWriteStream(filepath);
  pdf.pipe(stream);

  return new Promise((resolve, reject) => {
    stream.on('finish', () => {
      resolve();
    });
    stream.on('error', reject);
  });
}

export function convertPdfToBase64(pdf: NodeJS.ReadableStream): Promise<string> {
  return new Promise((resolve, reject) => {
    const base64 = new Base64Encode();

    const cbConcat = (base64) => {
      resolve(base64);
    };

    pdf
      .pipe(base64)
      .pipe(concat(cbConcat))
      .on('error', (error) => {
        reject(error)
      });
  });
}
