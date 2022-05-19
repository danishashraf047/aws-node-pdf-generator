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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderCompositions = exports.putInCompositions = void 0;
const jimp_1 = __importDefault(require("jimp"));
function putInCompositions(node, compositions) {
    if (!node.children) {
        return;
    }
    for (let index = 0; index < node.children.length; index++) {
        const child = node.children[index];
        if (child.type === 'COMPOSITION') {
            node.children[index] = compositions.shift();
        }
        else {
            putInCompositions(child, compositions);
        }
    }
}
exports.putInCompositions = putInCompositions;
function renderCompositions(pdfLayout, detectedCompositions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!pdfLayout.children) {
            return;
        }
        for (let index = 0; index < pdfLayout.children.length; index++) {
            const child = pdfLayout.children[index];
            if (child.type === 'COMPOSITION') {
                const { background = '#FFFFFF', scale = '1', quality = '100' } = child.props;
                const scaleValue = parseFloat(scale);
                const image = yield initializeImage(child.box.width * scaleValue, child.box.height * scaleValue, background);
                yield renderImage(child, image, child.box, child.box, scaleValue);
                yield image.quality(parseInt(quality))
                    .getBase64Async(jimp_1.default.MIME_JPEG)
                    .then((base64) => detectedCompositions.push({
                    type: 'IMAGE',
                    box: {},
                    children: [],
                    style: child.style,
                    props: { source: base64 },
                }));
            }
            else {
                yield renderCompositions(child, detectedCompositions);
            }
        }
    });
}
exports.renderCompositions = renderCompositions;
function initializeImage(width, height, background) {
    return new Promise((resolve, reject) => {
        new jimp_1.default(width, height, background, (err, image) => {
            if (err)
                reject();
            else
                resolve(image);
        });
    });
}
function resizeImage(image, style, box, parentBox, scale) {
    if (style.objectFit === 'contain') {
        return image.contain(parentBox.width * scale, parentBox.height * scale, jimp_1.default.HORIZONTAL_ALIGN_CENTER | jimp_1.default.VERTICAL_ALIGN_MIDDLE);
    }
    else if (style.objectFit === 'cover') {
        return image.cover(parentBox.width * scale, parentBox.height * scale, jimp_1.default.HORIZONTAL_ALIGN_CENTER | jimp_1.default.VERTICAL_ALIGN_MIDDLE);
    }
    else if (style.objectFit === 'fill') {
        return image.resize(parentBox.width * scale, parentBox.height * scale);
    }
    return image.resize(box.width * scale, box.height * scale, jimp_1.default.HORIZONTAL_ALIGN_CENTER | jimp_1.default.VERTICAL_ALIGN_MIDDLE);
}
function modifyImage(image, props) {
    const { brightness, contrast, fade, opacity, blur } = props;
    if (brightness) {
        image = image.brightness(parseFloat(brightness));
    }
    if (contrast) {
        image = image.contrast(parseFloat(contrast));
    }
    if (fade) {
        image = image.fade(parseFloat(fade));
    }
    if (opacity) {
        image = image.opacity(parseFloat(opacity));
    }
    if (blur) {
        image = image.blur(parseFloat(blur));
    }
    return image;
}
function renderImage(node, image, parentBox, relativeBox, scale) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const child of node.children) {
            if (child.type === 'VIEW') {
                if (child.style.position === 'relative') {
                    const nextBox = Object.assign(Object.assign({}, child.box), { left: child.box.left + parentBox.left, top: child.box.top + parentBox.top });
                    yield renderImage(child, image, nextBox, nextBox, scale);
                }
                else if (child.style.position === 'absolute') {
                    const nextBox = Object.assign(Object.assign({}, child.box), { left: child.box.left + relativeBox.left, top: child.box.top + relativeBox.top });
                    yield renderImage(child, image, nextBox, relativeBox, scale);
                }
                else {
                    const nextBox = Object.assign(Object.assign({}, child.box), { left: child.box.left + parentBox.left, top: child.box.top + parentBox.top });
                    yield renderImage(child, image, nextBox, relativeBox, scale);
                }
            }
            else if (child.type === 'IMAGE') {
                const referenceBox = child.style.position === 'absolute' ? relativeBox : parentBox;
                let nextImage = yield jimp_1.default.read(child.image.data);
                nextImage = resizeImage(nextImage, child.style, child.box, referenceBox, scale);
                nextImage = modifyImage(nextImage, child.props);
                const left = (child.box.left + referenceBox.left) * scale;
                const top = (child.box.top + referenceBox.top) * scale;
                console.log('Put image: ', nextImage.getWidth(), nextImage.getHeight(), left, top);
                yield image.composite(nextImage, left, top, { mode: jimp_1.default.BLEND_SOURCE_OVER });
            }
        }
    });
}
//# sourceMappingURL=postprocessing.js.map