// eslint-disable-line
const buildHtml = (data) => {
  [tag, other] = data;
  // let tail = '';
  const attributes = other.filter(a => (io instanceof Object && !Array.isArray(io)) ? true : false);
  const res = other.map((io) => {
    if (io instanceof Object && !Array.isArray(io)) {
      const atrs = Object.keys(io)
        .map(iKey => ` ${iKey}: "${item[iKey]}"`).join(' ');
       `<${tag} ${atr}>`;
    }
    return `<${tag}>`
    }
    if (typeof io === 'string') {
      return `<${tag}>${io}`;
    }

  });

};

const data = ['html', [
  ['meta', [
    ['title', 'hello, hexlet!'],
  ]],
  ['body', { class: 'container' }, [
    ['h1', { class: 'header' }, 'html builder example'],
    ['div', [
      ['span', 'span text2'],
      ['span', 'span text3'],
    ]],
  ]],
]];

const res1 = buildHtml(data);
// <html>
//   <meta><title>hello, hexlet!</title></meta>
//   <body class="container">
//     <h1 class="header">html builder example</h1>
//     <div>
//       <span>span text2</span>
//       <span>span text3</span>
//     </div>
//   </body>
// </html>
console.log(res1);
// console.log(res2);
// console.log(res3);
// console.log(res4);
