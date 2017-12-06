import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

// ========= Агрегация ===========
// // Я:
// const du = (getDir) => {
//   const calculateFilesSize = dir =>
//     reduce((cAcc, cNode) => (cNode.type === 'file' ? cAcc + cNode.meta.size : cAcc), dir, 0);
//   const result = getDir.children.reduce((acc, node) => (node.type === 'directory' ?
//     [...acc, [node.name, calculateFilesSize(node)]] :
//     [...acc, [node.name, node.meta.size]]), []).sort(([, a], [, b]) => b - a);
//   return result;
// };
// // УЧитель:
// const calculatefilesSize = node => reduce((acc, n) => {
//   if (n.type === 'directory') {
//     return acc;
//   }
//
//   return acc + n.meta.size;
// }, node, 0);
//
// const du = (node) => {
//   const result = node.children.map(n => [n.name, calculatefilesSize(n)]);
//   result.sort(([, size1], [, size2]) => size2 - size1);
//   return result;
// };
//
// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('apache'),
//     mkdir('nginx', [
//       mkfile('nginx.conf', { size: 800 }),
//     ]),
//     mkdir('consul', [
//       mkfile('config.json', { size: 1200 }),
//       mkfile('data', { size: 8200 }),
//       mkfile('raft', { size: 80 }),
//     ]),
//   ]),
//   mkfile('hosts', { size: 3500 }),
//   mkfile('resolve', { size: 1000 }),
// ]);
//
// const res = du(tree);
// const res2 = du(tree.children[0]);
// // [['etc', 10280], ['hosts', 3500], ['resolve', 1000]]
// // [["consul", 9480], ["nginx", 800], ["apache", 0]]
// console.log(res);
// console.log(res2);

// ========= Поиск ===========
// const findFilesByName = (tree, substr) => {
//   const iter = (node, acc, ancestry) => {
//     if (node.type === 'file') {
//       if (node.name.includes(substr)) {
//         return [...acc, [ancestry, node.name].join(sep)];
//       }
//       return acc;
//     }
//     const newAncestry = node.name === '/' ? '' : [ancestry, node.name].join(sep);
//     return node.children.reduce((iAcc, iNode) => iter(iNode, iAcc, newAncestry), acc);
//   };
//   return iter(tree, [], '');
// };

// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('apache'),
//     mkdir('nginx', [
//       mkfile('nginx.conf', { size: 800 }),
//     ]),
//     mkdir('consul', [
//       mkfile('config.json', { size: 1200 }),
//       mkfile('data', { size: 8200 }),
//       mkfile('raft', { size: 80 }),
//     ]),
//   ]),
//   mkfile('hosts', { size: 3500 }),
//   mkfile('resolve', { size: 1000 }),
// ]);
// const dirs = findFilesByName(tree, 'co'); // => ['/etc/nginx/nginx.conf', '/etc/consul/config.json']

// ========= Reduce ===========
// const reduce = (func, getDir, acc) => {
//   const newAcc = func(acc, getDir);
//   if (getDir.type === 'directory') {
//     return (getDir.children || []).reduce((iAcc, item) => reduce(func, item, iAcc), newAcc);
//   }
//   return newAcc;
// };
// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('nginx'),
//     mkdir('consul', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hosts'),
// ]);
// const res = reduce((acc, n) => acc + 1, tree, 0); // => 6
//
// const reduce = (f, tree, acc) => {
//   const [name, children] = tree;
//   const newAcc = f(acc, tree);
//
//   if (!children) {
//     return newAcc;
//   }
//   return children.reduce((iAcc, n) => reduce(f, n, iAcc), newAcc);
// };
// const tree = ['A',
//   [['B', [['E'], ['F']]],
//     ['C'],
//     ['D', [['G'], ['J']]],
//   ]];
// const actual = reduce((acc, n) => acc + 1, tree, 0);
// console.log(actual);

// ========= Filter ===========
// const filter = (func, getDir) => {
//   if (!func(getDir)) {
//     return null;
//   }
//   return {
//     ...getDir, children: (getDir.children || []).map(item => filter(func, item)).filter(v => v),
//   };
// };

// const tree = mkdir('/', [
//   mkdir('etc', [
//     mkdir('nginx', [
//       mkdir('conf.d'),
//     ]),
//     mkdir('consul', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hosts'),
// ]);
// const actual = filter(n => n.type === 'directory', tree);
// console.log(actual);

// const filter = (f, tree) => {
//   if (!f(tree)) {
//     return null;
//   }
//   const [name, children] = tree;
//   if (!children) {
//     return tree;
//   }
//   return [name, children.map(c => filter(f, c)).filter(v => v)];
// };

// ========= Map ===========
// // Я:
// const map = (func, getDir) => {
//   const updateDir = func(getDir);
//   if (getDir.type === 'directory') {
//     return { ...updateDir, children: (getDir.children || []).map(item => map(func, item)) };
//   }
//   return updateDir;
// };
// // Учитель:
// const map = (f, node) => {
//   const updatedNode = f(node);

//   return node.type === 'directory' ?
//     { ...updatedNode, children: (node.children || []).map(n => map(f, n)) } : updatedNode;
// };

// const tree = mkdir('/', [
//   mkdir('eTc', [
//     mkdir('NgiNx'),
//     mkdir('CONSUL', [
//       mkfile('config.json'),
//     ]),
//   ]),
//   mkfile('hOsts'),
// ]);
// const actual = map(n => ({ ...n, name: n.name.toUpperCase() }), tree);

// const map = (f, tree) => {
//   const [name, children] = tree;
//   const [newName] = f(tree);
//   if (!children) {
//     return [newName];
//   }
//   return [newName, children.map(c => map(f, c))];
// };

// ========= Traversal ===========
// const downcaseFileNames = (getDir) => {
//   if (getDir.type === 'directory') {
//     return { ...getDir, children: (getDir.children || []).map(downcaseFileNames) };
//   }
//   return { ...getDir, name: getDir.name.toLowerCase() };
// };
//
// const tree = mkdir('/', [
//   mkdir('eTc', [
//     mkdir('NgiNx'),
//     mkdir('CONSUL', [
//       mkfile('Config.json'),
//     ]),
//   ]),
//   mkfile('hOsts'),
// ]);
// const updatedTree = downcaseFileNames(tree);

// const anyTree = ['A',
//  [['B', [['E'], ['F']]],
//  ['C'],
//  ['D', [['G'], ['J']]],
// ]];
// * Перебор всех элементов дерева *
// const dfs = (tree) => {
//   const [nodeName, children] = tree;
//   console.log(nodeName);
//   if (children) {
//     return children.map(dfs);
//   }
//   return false;
// };
// dfs(anyTree);

// * Действие над элементом дерева *
// const dfs = (tree) => {
//   const [nodeName, children] = tree;
//   const newName = nodeName.toLocaleLowerCase();
//   if (children) {
//     return [newName, children.map(dfs)];
//   }
//   return [newName];
// };
// console.log(JSON.stringify(dfs(anyTree)));
