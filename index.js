import { mkdir, mkfile } from 'hexlet-immutable-fs-trees'; // eslint-disable-line

const downcaseFileNames = (getDir) => {
  if (getDir.type === 'directory') {
    return { ...getDir, children: (getDir.children || []).map(downcaseFileNames) };
  }
  return { ...getDir, name: getDir.name.toLowerCase() };
};

const tree = mkdir('/', [
  mkdir('eTc', [
    mkdir('NgiNx'),
    mkdir('CONSUL', [
      mkfile('Config.json'),
    ]),
  ]),
  mkfile('hOsts'),
]);
const updatedTree = downcaseFileNames(tree);
console.log(updatedTree);

// const downcaseFileNames = (node) => {
//   if (node.type === 'directory') {
//     return { ...node, children: (node.children || []).map(downcaseFileNames) };
//   }
//   return { ...node, name: node.name.toLowerCase() };
// };
//
// export default downcaseFileNames;
// const dfs = (tree) => {
//   const [nodeName, children] = tree;
//   const newName = nodeName.toLocaleLowerCase();
//   if (children) {
//     return [newName, children.map(dfs)];
//   }
//   return [newName];
// };

// const tree = ['A',
//  [['B', [['E'], ['F']]],
//  ['C'],
//  ['D', [['G'], ['J']]],
// ]];

// console.log(JSON.stringify(dfs(tree)));
