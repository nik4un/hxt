// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= Цепочки прототипов ===========
// << PairedTag.js >>
import Node from './Node';

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}

PairedTag.prototype = Object.create(Node.prototype);

PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};

// << SingleTag.js >>
import Node from './Node';

export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}

SingleTag.prototype = Object.create(Node.prototype);

SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};

// << Node.js  >>
export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;
}

Node.prototype.getAttributesAsLine = function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) =>
    `${acc} ${key}="${this.attributes[key]}"`, '');
};

// << buildNode.js >>
import PairedTag from './PairedTag';
import SingleTag from './SingleTag';

const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};

// << solution.js >>
import _ from 'lodash'; // eslint-disable-line

import buildNode from './buildNode';

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: _.identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: _.identity,
  },
];

const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));

const parse = (data) => {
  const args = data.slice(1)
    .reduce((acc, arg) => {
      const { name, process } = getPropertyAction(arg);
      return { ...acc, [name]: process(arg, parse) };
    }, { name: data[0], attributes: {}, body: '', children: [] });
  return buildNode(args.name, args.attributes, args.body, args.children);
};

export default parse;

// << solution.test.js >>
import parse from '../solution';
import buildNode from '../buildNode';

describe('HtmlBuilder', () => {
  it('#parse', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['span', 'span text'],
          ['hr'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = buildNode('html', {}, '', [
      buildNode('head', {}, '', [
        buildNode('title', {}, 'hello, hexlet!'),
      ]),
      buildNode('body', {}, '', [
        buildNode('h1', { class: 'header' }, 'html builder example'),
        buildNode('div', {}, '', [
          buildNode('span', {}, 'span text'),
          buildNode('hr'),
        ]),
      ]),
    ]);

    expect(ast).toEqual(expected);
  });

  it('#toString', () => {
    const data = ['html', [
      ['head', [
        ['title', 'hello, hexlet!'],
      ]],
      ['body', [
        ['div', { class: 'separator' }],
        ['h1', { class: 'header' }, 'html builder example'],
        ['div', [
          ['img', { class: 'image', href: '#' }],
          ['span', 'span text2'],
        ]],
      ]],
    ]];

    const ast = parse(data);
    const expected = `<html><head><title>hello, hexlet!</title></head><body><div class="separator"></div><h1 class="header">html builder example</h1><div><img class="image" href="#"><span>span text2</span></div></body></html>`;
    expect(ast.toString()).toEqual(expected);
  });
});


// ========= Прототипы ===========
// << PairedTag.js >>
import Node from './Node';
export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}
PairedTag.prototype.toString = function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
};

// << SingleTag.js >>
import Node from './Node';
export default function SingleTag(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
}
SingleTag.prototype.toString = function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
};



// ========= Позднее связывание ===========
// << Node.js  >>
function getAttributesAsLine() {
  return Object.keys(this.attributes).reduce((acc, key) =>
    `${acc} ${key}="${this.attributes[key]}"`, '');
}

export default function Node(name, attributes) {
  this.name = name;
  this.attributes = attributes;

  this.getAttributesAsLine = getAttributesAsLine;
}

// << PairedTag.js >>
import Node from './Node';

function toString() {
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
}

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
  this.toString = toString;
}

// << SingleTag.js >>
import Node from './Node';

function toString() {
  return `<${this.name}${this.getAttributesAsLine()}>`;
}

export default function SingleNode(name, attributes = {}) {
  Node.apply(this, [name, attributes]);
  this.toString = toString;
}

// ========= Функции как объекты ===========
const magic = (...args) => {
  const sum = args.reduce((acc, elem) => acc + elem, 0);
  const func = (...other) => magic(sum, ...other);
  func.valueOf = () => sum;
  return func;
};

const res1 = magic() + 0; // 0
const res2 = magic(5, 2, -8) + 2; // 1
const res3 = magic(1, 2)(3, 4, 5)(6)(7, 10) - 8; // 30
const res4 = magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) + 7; // 20

// ========= Наследование ===========
// << Node.js  >>
class Node {
  constructor(name, attributes) {
    this.name = name;
    this.attributes = attributes;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}

// << PairedTag.js >>
class PairedTag extends Node {
  constructor(name, attributes = {}, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ?
      this.children.map(child => child.toString()).join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }
}

// << SingleTag.js >>
class SingleTag extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }
}

// << buildNode.js >>
const singleTagsList = new Set(['hr', 'br', 'img']);
const buildNode = (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};
// ========= Полиморфизм подтипов ===========
// << PairedTag.js >>
class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = this.children.length > 0 ?
      this.children.map(child => child.toString()).join('') : this.body;
    return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// << SingleTag.js >>
class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    return `<${this.name}${this.getAttributesAsLine()}>`;
  }

  getAttributesAsLine() {
    return Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');
  }
}
// << buildNode.js >>
const singleTagsList = new Set(['hr', 'br', 'img']);
export default (name, ...args) => {
  const C = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new C(name, ...args);
};


// ==== Абстрактное синтаксическое дерево (AST) ====
import { find, identity } from 'lodash'; // eslint-disable-line

export const render = ({ name, attributes, body, children }) => {
  const attrsLine = Object.keys(attributes)
    .map(key => ` ${key}="${attributes[key]}"`).join('');
  const content = children.length > 0 ? children.map(render).join('') : body;

  const closeTag = singleTagsList.has(name) ? '' : `</${name}>`;
  return `<${name}${attrsLine}>${content}${closeTag}`;
};

const propertyActions = [
  {
    name: 'body',
    check: arg => typeof arg === 'string',
    process: identity,
  },
  {
    name: 'children',
    check: arg => arg instanceof Array,
    process: (children, f) => children.map(f),
  },
  {
    name: 'attributes',
    check: arg => arg instanceof Object,
    process: identity,
  },
];

const getPropertyAction = arg => find(propertyActions, ({ check }) => check(arg));

export const parse = (data) => {
  const [first, ...rest] = data;
  const root = { name: first, attributes: {}, body: '', children: [] };
  return rest.reduce((acc, arg) => {
    const { name, process } = getPropertyAction(arg);
    return { ...acc, [name]: process(arg, parse) };
  }, root);
};
// ========= Проект HTML Builder ===========
// Я:
// const buildHtml = (data) => {
//   const [tag, ...other] = data;
//
//   const arrAtr = other.filter(iObj => (iObj instanceof Object && !Array.isArray(iObj)));
//   let getAttr = '';
// if (arrAtr.length > 0) {
//   const [obj] = arrAtr;
//   getAttr = Object.keys(obj).map(iAtr => ` ${iAtr}="${obj[iAtr]}"`).join('');
// }
//
// let getTag;
// let endTag;
// if (Array.isArray(tag)) {
//   getTag = buildHtml(tag);
//   endTag = '';
// } else {
//   getTag = `<${tag}${getAttr}>`;
//   endTag = `</${tag}>`;
// }
//
// const arrBody = other.filter(iStr => (typeof iStr === 'string'));
// let getBody = '';
// if (arrBody.length > 0) {
//   [getBody] = arrBody;
// }
//
// const arrChild = other.filter(iCh => Array.isArray(iCh));
// let getChildren = null;
// if (arrChild.length > 0) {
//   getChildren = arrChild.map(item => buildHtml(item)).join('');
// }
//
// return [getTag, getBody, getChildren, endTag].join('');
// };

// Учитель:
// import _ from 'lodash'; // eslint-disable-line
// const propertyActions = [
//   {
//     name: 'body',
//     check: arg => typeof arg === 'string',
//   },
//   {
//     name: 'children',
//     check: arg => arg instanceof Array,
//   },
//   {
//     name: 'attributes',
//     check: arg => arg instanceof Object,
//   },
// ];
//
// const getPropertyAction = arg => _.find(propertyActions, ({ check }) => check(arg));
//
// const buildAttrString = attrs =>
//   Object.keys(attrs).map(key => ` ${key}="${attrs[key]}"`).join('');
//
// const buildHtml = (data) => {
//   const [first, ...rest] = data;
//   const root = { name: first, attributes: {}, body: '', children: [] };
//   const tag = rest
//     .reduce((acc, arg) => {
//       const { name } = getPropertyAction(arg);
//       return { ...acc, [name]: arg };
//     }, root);
//
//   return [`<${tag.name}${buildAttrString(tag.attributes)}>`,
//     `${tag.body}${tag.children.map(buildHtml).join('')}`,
//     `</${tag.name}>`,
//   ].join('');
// };

// const data = ['html', [
//       ['body', [
//         ['h2', { class: 'header' }, 'first header'],
//         ['div', [
//           ['p', 'hello, world'],
//           ['p', 'good bye, world'],
//           ['a', { class: 'link', href: 'https://hexlet.io' }, 'hexlet.io'],
//         ]],
//       ]],
    ]];
