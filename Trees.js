import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
// ========= * ===========
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
