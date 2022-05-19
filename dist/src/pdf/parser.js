"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseXmlTemplate = void 0;
const htmlparser2_1 = require("htmlparser2");
const STYLE_ATTRIBUTE_PATTERN = /([\w-]*)\s*:\s*([^;]*)/g;
function parseXmlTemplate(xml, styles) {
    const path = [];
    let root = null;
    const parser = new htmlparser2_1.Parser({
        onopentag(name, attributes) {
            const { style, className = '' } = attributes, props = __rest(attributes, ["style", "className"]);
            let match;
            const properties = {};
            while (match = STYLE_ATTRIBUTE_PATTERN.exec(style)) {
                properties[match[1]] = match[2].trim();
            }
            const newInstance = {
                type: name.toUpperCase(),
                box: {},
                style: className.trim().split(/\s+/)
                    .map((_class) => styles[_class])
                    .filter((style) => !!style)
                    .reduce((a, b) => (Object.assign(Object.assign({}, a), b)), properties),
                children: [],
                props,
            };
            if (path.length === 0) {
                root = newInstance;
            }
            else {
                path[path.length - 1].children.push(newInstance);
            }
            path.push(newInstance);
        },
        ontext(text) {
            if (/^\s+$/.test(text)) {
                return;
            }
            path[path.length - 1].children.push({ type: 'TEXT_INSTANCE', value: text });
        },
        onclosetag(tagname) {
            if (path[path.length - 1].type === tagname.toUpperCase()) {
                path.pop();
            }
        },
    }, { xmlMode: true, lowerCaseAttributeNames: false, lowerCaseTags: false });
    parser.write(xml);
    parser.end();
    return root;
}
exports.parseXmlTemplate = parseXmlTemplate;
//# sourceMappingURL=parser.js.map