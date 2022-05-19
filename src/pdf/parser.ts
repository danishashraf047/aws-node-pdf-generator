import { Parser } from 'htmlparser2';
import { XmlElement, Styles } from './model';

const STYLE_ATTRIBUTE_PATTERN = /([\w-]*)\s*:\s*([^;]*)/g;

export function parseXmlTemplate(xml: string, styles: Styles): XmlElement {
  const path = [];
  let root: XmlElement | null = null;
  const parser = new Parser({
      onopentag(name, attributes) {
          const { style, className = '', ...props} = attributes;

          let match;
          const properties={};
          while (match=STYLE_ATTRIBUTE_PATTERN.exec(style)) {
            properties[match[1]] = match[2].trim();
          }

          const newInstance = {
              type: name.toUpperCase(),
              box: {},
              style: className.trim().split(/\s+/)
                .map((_class) => styles[_class])
                .filter((style) => !!style)
                .reduce((a, b) => ({ ...a, ...b }), properties),
              children: [],
              props,
          };
          if (path.length === 0) {
            root = newInstance;
          } else {
            path[path.length - 1].children.push(newInstance);
          }
          path.push(newInstance);
      },
      ontext(text) {
          if (/^\s+$/.test(text)) {
              return;
          }
          path[path.length-1].children.push({ type: 'TEXT_INSTANCE', value: text });
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