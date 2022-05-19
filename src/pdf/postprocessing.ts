import Jimp from 'jimp';
import { LayoutElement, XmlElement } from './model';

export function putInCompositions(node: XmlElement, compositions: XmlElement[]) {
    if (!node.children) {
        return;
    }
    for (let index = 0; index < node.children.length; index++) {
        const child = node.children[index];
        if (child.type === 'COMPOSITION') {
            node.children[index] = compositions.shift();
        } else {
            putInCompositions(child, compositions);
        }
    }
}

export async function renderCompositions(
  pdfLayout: LayoutElement,
  detectedCompositions: XmlElement[],
) {
    if (!pdfLayout.children) {
        return;
    }
    for (let index = 0; index < pdfLayout.children.length; index++) {
        const child = pdfLayout.children[index];
        if (child.type === 'COMPOSITION') {
            const { background = '#FFFFFF', scale = '1', quality = '100' } = child.props;
            const scaleValue = parseFloat(scale);
            const image = await initializeImage(
                child.box.width * scaleValue,
                child.box.height * scaleValue,
                background,
            );
            await renderImage(child, image, child.box, child.box, scaleValue);
            await image.quality(parseInt(quality))
                .getBase64Async(Jimp.MIME_JPEG)
                .then((base64) => detectedCompositions.push({
                        type: 'IMAGE',
                        box: {},
                        children: [],
                        style: child.style,
                        props: { source: base64 },
                    }
                ));
        } else {
            await renderCompositions(child, detectedCompositions);
        }
    }
}

function initializeImage(width: number, height: number, background: string): Promise<Jimp> {
    return new Promise((resolve, reject) => {
        new Jimp(
            width,
            height,
            background,
            (err, image) => {
                if (err) reject();
                else resolve(image);
            },
        );
    });
}

function resizeImage(image, style, box, parentBox, scale) {
    if (style.objectFit === 'contain') {
        return image.contain(
            parentBox.width * scale,
            parentBox.height * scale,
            Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
        );
    } else if (style.objectFit === 'cover') {
        return image.cover(
            parentBox.width * scale,
            parentBox.height * scale,
            Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
        );
    } else if (style.objectFit === 'fill') {
        return image.resize(parentBox.width * scale, parentBox.height * scale);
    }
    return image.resize(
        box.width * scale,
        box.height * scale,
        Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE,
    );
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

async function renderImage(node, image, parentBox, relativeBox, scale) {
    for (const child of node.children) {
        if (child.type === 'VIEW') {
            if (child.style.position === 'relative') {
                const nextBox = {
                    ...child.box,
                    left: child.box.left + parentBox.left,
                    top: child.box.top + parentBox.top,
                }
                await renderImage(child, image, nextBox, nextBox, scale);
            } else if (child.style.position === 'absolute') {
                const nextBox = {
                    ...child.box,
                    left: child.box.left + relativeBox.left,
                    top: child.box.top + relativeBox.top,
                }
                await renderImage(child, image, nextBox, relativeBox, scale);
            } else {
                const nextBox = {
                    ...child.box,
                    left: child.box.left + parentBox.left,
                    top: child.box.top + parentBox.top,
                }
                await renderImage(child, image, nextBox, relativeBox, scale);
            }
        } else if (child.type === 'IMAGE') {
            const referenceBox = child.style.position === 'absolute' ? relativeBox : parentBox;
            let nextImage = await Jimp.read(child.image.data);
            nextImage = resizeImage(nextImage, child.style, child.box, referenceBox, scale);
            nextImage = modifyImage(nextImage, child.props);
            const left = (child.box.left + referenceBox.left) * scale;
            const top = (child.box.top + referenceBox.top) * scale;
            console.log('Put image: ', nextImage.getWidth(), nextImage.getHeight(), left, top);
            await image.composite(nextImage, left, top, { mode: Jimp.BLEND_SOURCE_OVER});
        }
    }
}
