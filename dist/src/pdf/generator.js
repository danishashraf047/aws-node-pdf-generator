"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertPdfToBase64 = exports.savePdfAsFile = exports.generatePdf = void 0;
const pdfkit_1 = __importDefault(require("@react-pdf/pdfkit"));
const layout_1 = __importDefault(require("@react-pdf/layout"));
const render_1 = __importDefault(require("@react-pdf/render"));
const font_1 = __importDefault(require("@react-pdf/font"));
const concat_stream_1 = __importDefault(require("concat-stream"));
const base64_stream_1 = require("base64-stream");
const Handlebars = __importStar(require("handlebars"));
const parser_1 = require("./parser");
const helpers_1 = __importDefault(require("./helpers"));
const postprocessing_1 = require("./postprocessing");
const fs = require('fs');
const templates_1 = require("../assets/templates");
const fonts_1 = __importDefault(require("../assets/fonts"));
const styles_1 = __importDefault(require("../assets/styles"));
const images_1 = require("../assets/images");
function generatePdf(context, compress) {
    return __awaiter(this, void 0, void 0, function* () {
        Handlebars.registerHelper(helpers_1.default);
        Handlebars.registerPartial('mewaLogo', templates_1.mewaLogo);
        Handlebars.registerPartial('configurationDetails', templates_1.configurationDetails);
        Handlebars.registerPartial('cover', templates_1.cover);
        Handlebars.registerPartial('headerPolygon', templates_1.headerPolygon);
        Handlebars.registerPartial('marginImage', images_1.margin);
        const template = Handlebars.compile(templates_1.document);
        const xml = template(context);
        const rootElement = (0, parser_1.parseXmlTemplate)(xml, styles_1.default);
        const fontStore = new font_1.default();
        fonts_1.default.forEach(fontStore.register);
        fontStore.registerHyphenationCallback((word) => [word]);
        let layout = yield (0, layout_1.default)(rootElement, fontStore);
        const compositions = [];
        yield (0, postprocessing_1.renderCompositions)(layout, compositions);
        if (compositions.length > 0) {
            (0, postprocessing_1.putInCompositions)(rootElement, compositions);
            layout = yield (0, layout_1.default)(rootElement, fontStore);
        }
        const props = rootElement.props || {};
        const { pdfVersion, language } = props;
        const ctx = new pdfkit_1.default({
            compress,
            pdfVersion,
            lang: language,
            displayTitle: true,
            autoFirstPage: false,
        });
        return (0, render_1.default)(ctx, layout);
    });
}
exports.generatePdf = generatePdf;
function savePdfAsFile(pdf, filepath) {
    const stream = fs.createWriteStream(filepath);
    pdf.pipe(stream);
    return new Promise((resolve, reject) => {
        stream.on('finish', () => {
            resolve();
        });
        stream.on('error', reject);
    });
}
exports.savePdfAsFile = savePdfAsFile;
function convertPdfToBase64(pdf) {
    return new Promise((resolve, reject) => {
        const base64 = new base64_stream_1.Base64Encode();
        const cbConcat = (base64) => {
            resolve(base64);
        };
        pdf
            .pipe(base64)
            .pipe((0, concat_stream_1.default)(cbConcat))
            .on('error', (error) => {
            reject(error);
        });
    });
}
exports.convertPdfToBase64 = convertPdfToBase64;
//# sourceMappingURL=generator.js.map