// eslint-disable-next-line
// eslint-disable-line
// eslint-disable-line
const wordsCount = (wList, swList) => {
  const newWords = wList.map(item => item.toLowerCase());
  const newStopWords = swList.map(item => item.toLowerCase());
  const exceptStopWord = newWords.filter(item => !newStopWords.includes(item));
  const mapArr = new Map();
  let a = '';
  let b = '';

  exceptStopWord.forEach((item) => {
    if (!mapArr.has(item)) {
      b = item;
      a = exceptStopWord.reduce((acc, value) => (value === item ? acc + 1 : acc), 0);
      mapArr.set(b, a);
    }
  });

  mapArr.forEach((key, value) => console.log(key, value));
  return mapArr;
};
// export default wordsCount;
/* eslint-disable */
const stopWords = ['and', 'or', 'a', 'the', ''];
const words = ['HellO', 'h', 'And', 'heLlo', '', 'AND', 'DOG', 'oR', 'cat', 'HELLO', 'caT'];
wordsCount(words, stopWords);
