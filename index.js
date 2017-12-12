import _ from 'lodash'; // eslint-disable-line
// << Node.js  >>
const getAttributesAsLine = attributes =>
  Object.keys(attributes).reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');


function Node(name, attributes = {}) {
  this.name = name;
  this.attributes = attributes;
  this.getAttributes = getAttributesAsLine(this.attributes);
}

Node.prtotype.getAttributesAsLine = function getAttributesAsLineetAttributesAsLine(attributes) {
  return Object.keys(attributes).reduce((acc, key) => `${acc} ${key}="${attributes[key]}"`, '');
};

// << PairedTag.js >>
function PairedTag(name, attributes, body = '', children = []) {
  Node.apply(this, [name, attributes]);
  this.body = body;
  this.children = children;
}
PairedTag.prototype.toString = function toString() {
  Node.apply(this, [name, attributes]);
  const value = this.children.length > 0 ?
    this.children.map(child => child.toString()).join('') : this.body;
  return `<${this.name}${this.getAttributes}>${value}</${this.name}>`;
};

// << SingleTag.js >>
// function SingleTag(name, attributes) {
//   Node.apply(this, [name, attributes]);
//   this.toString = toString;
// }
// SingleTag.prototype.toString = function toString() {
//   return `<${this.name}${this.getAttributes}>`;
// };

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
// << buildNode.js >>
const singleTagsList = new Set(['hr', 'br', 'img']);
const buildNode = (name, ...args) => {
  const C = singleTagsList.has(name) ? PairedTag : PairedTag; // SingleTag
  return new C(name, ...args);
};

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
console.log(ast);
console.log(ast.toString());
