/* eslint-disable */
// ======= Полиморфизм =======
// const router = {
//   img: tag => getAttribute('src', tag),
//   a: tag => getAttribute('href', tag),
//   link: tag => getAttribute('href', tag),
// };
// export default tagList => map(element => router[getName(element)](element), tagList);

// ============= Нативные объекты / Классы ===============
const run = (player1, player2, cards, customRandom) => {
  // BEGIN
    const iter = (health1, name1, health2, name2, order, log) => {
      if (health1 <= 0) {
        const prevLog = head(log);
        const newLog = {
          message: `${name1} был убит`,
          health1: prevLog.health1,
          health2: prevLog.health2,
        };
        return consList(newLog, log);
      }
      const card = customRandom(cards);
      const cardName = card.name;
      const points = card.damage(health2);
      const newHealth = health2 - points;

      const message = `Игрок '${name1}' применил '${cardName}'
        против '${name2}' и нанес урон '${points}'`;
      const stats = { message };
      if (order === 1) {
        stats.health1 = health1;
        stats.health2 = newHealth;
      } else if (order === 2) {
        stats.health1 = newHealth;
        stats.health2 = health1;
      }
      const newLog = consList(stats, log);
      return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
    };
    // END

  const startHealth = 10;
  const logItem = {
    health1: startHealth,
    health2: startHealth,
    message: 'Начинаем бой!',
  };
  return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
};

export default (cards, customRandom = random) =>
  (name1, name2) =>
    run(name1, name2, cards, customRandom);

// ================== Объекты ===================
// import { cons, car, toString as pairToString } from 'hexlet-pairs'; // eslint-disable-line
// import { cons as consList, l, random, head, reverse, toString as listToString } from 'hexlet-pairs-data'; // eslint-disable-line
//
// const run = (player1, player2, cards, customRandom) => {
//   const iter = (health1, name1, health2, name2, order, log) => {
//     if (health1 <= 0) {
//       return consList(cons(car(head(log)), `${name1} был убит`), log);
//     }
//     const card = customRandom(cards);
//     // BEGIN (write your solution here)
//     const cardName = card('getName');
//     const points = card('damage', health2);
//     console.log(listToString(cardName));
//     console.log(listToString(points));
//     // END
//     const newHealth = health2 - points;
//
//     const message = `Игрок '${name1}' применил '${cardName}'
//       против '${name2}' и нанес урон '${points}'`;
//     let stats;
//     if (order === 1) {
//       stats = cons(cons(health1, newHealth), message);
//     } else if (order === 2) {
//       stats = cons(cons(newHealth, health1), message);
//     }
//     const newLog = consList(stats, log);
//     return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
//   };
//
//   const startHealth = 10;
//   const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
//   return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
// };
//
// export default (cards, customRandom = random) =>
//   (name1, name2) =>
//     run(name1, name2, cards, customRandom);

// simpleCard.js
// const make = (name, damagePoints) =>
//   (message) => {
//     switch (message) {
//       case 'getName':
//         return name;
//       case 'damage':
//         return damagePoints;
//       default:
//         return 'undefined method';
//     }
//   };
// export default make;

// ============ Диспетчеризация по типу. Аддитивность. =======
//cards
// export const damage = (self, health) =>
//   getMethod(self, 'damage')(contents(self), health);


// generic
// export const getMethod = (obj, methodName) => {
//   const currentType = typeTag(obj);
//   const iter = (elements) => {
//     if (isEmpty(elements)) {
//       return null;
//     }
//     const element = head(elements);
//     if (currentType === typeTag(element)) {
//       const method = contents(element);
//       if (methodName === car(method)) {
//         return cdr(method);
//       }
//     }
//     return iter(tail(elements));
//   };
//   return iter(methods);
// };

// simpleCard
// const defmethod = definer('SimpleCard');
// const make = (name, damagePoints) =>
//   attach('SimpleCard', cons(name, damagePoints));
// export default make;
// defmethod('getName', self => car(self));
// defmethod('damage', self => cdr(self));


// ======= Помеченные данные =======
// const isSimpleCard = card => typeTag(card) === 'SimpleCard';
// const isPercentCard = card => typeTag(card) === 'PercentCard';
//
// const run = (player1, player2, cards, customRandom) => {
//   const iter = (health1, name1, health2, name2, order, log) => {
//      if (health1 <= 0) {
//       return consList(cons(car(head(log)), `${name1} был убит`), log);
//     }
//     // BEGIN (write your solution here)
//     if (health1 <= 0) {
//       return consList(cons(car(head(log)), `${name1} был убит`), log);
//     }
//     const card = customRandom(cards);
//     let cardName;
//     let damage;
//     if (isSimpleCard(card)) {
//       cardName = getSimpleCardName(card);
//       damage = simpleCardDamage(card);
//     } else if (isPercentCard(card)) {
//       cardName = getPercentCardName(card);
//       damage = percentCardDamage(card, health2);
//     }
//
//     const newHealth = health2 - damage;
//
//     const message = `Игрок '${name1}' применил '${cardName}'
//       против '${name2}' и нанес урон '${damage}'`;
//     let stats;
//     if (order === 1) {
//       stats = cons(cons(health1, newHealth), message);
//     } else if (order === 2) {
//       stats = cons(cons(newHealth, health1), message);
//     }
//     const newLog = consList(stats, log);
//     return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
//     // END
//   };
//
//   const startHealth = 10;
//   const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
//   return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
// };
//
// export default (cards, customRandom = random) =>
//   (name1, name2) =>
//     run(name1, name2, cards, customRandom);
// -------- SimpleCard.js ------
// export const make = (name, damagePoints) =>
//   attach('SimpleCard', cons(name, damagePoints));
// export const getName = self => car(contents(self));
// export const damage = self => cdr(contents(self));

// ======= Инверсия =======
// // const run = (player1, player2, cards, customRandom) => {
//   const iter = (health1, name1, health2, name2, order, log) => {
//     if (health1 <= 0) {
//       return consList(cons(car(head(log)), `${name1} был убит`), log);
//     }
//     // BEGIN (write your solution here)
//     const newCard = customRandom(cards);
//     // END
//     const cardName = car(newCard);
//     const damage = cdr(newCard)(health2);
//     const newHealth = health2 - damage;
//
//     const message = `Игрок '${name1}' применил '${cardName}'
//       против '${name2}' и нанес урон '${damage}'`;
//     let stats;
//     if (order === 1) {
//       stats = cons(cons(health1, newHealth), message);
//     } else if (order === 2) {
//       stats = cons(cons(newHealth, health1), message);
//     }
//     const newLog = consList(stats, log);
//     return iter(newHealth, name2, health1, name1, order === 1 ? 2 : 1, newLog);
//   };
//
//   const startHealth = 10;
//   const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
//   return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
// };
//
// // BEGIN (write your solution here)
// export default (cards, customRandom = random) =>
//     (name1, name2) =>
//       run(name1, name2, cards, customRandom);
// // END


// ======= Игровой дизайн: карточный бой =======
// const run = (player1, player2, cards) => {
//   const iter = (health1, name1, health2, name2, order, log) => {
//     // BEGIN (write your solution here)
//     if (health1 <= 0) {
//       const newLog = cons(car(head(log)), `${name1} был убит`);
//       return consList(newLog, log);
//     } else if (health2 <= 0) {
//       const newLog = cons(car(head(log)), `${name2} был убит`);
//       return consList(newLog, log);
//     }
//     const newCard = random(cards);
//     const cardName = car(newCard);
//     const damage = cdr(newCard)();
//     let newHealth1 = health1;
//     let newHealth2 = health2;
//     let stats;
//     if (order === 1) {
//       const message = `Игрок '${name1}' применил '${cardName}'
//         против '${name2}' и нанес урон '${damage}'`;
//       newHealth2 -= damage;
//       stats = cons(cons(newHealth1, newHealth2), message);
//     } else {
//       const message = `Игрок '${name2}' применил '${cardName}'
//         против '${name1}' и нанес урон '${damage}'`;
//       newHealth1 -= damage;
//       stats = cons(cons(newHealth1, newHealth2), message);
//     }
//     const changeOrder = num => (num === 1 ? 2 : 1);
//     const newLog = consList(stats, log);
//     return iter(newHealth1, player1, newHealth2, player2, changeOrder(order), newLog);
//     // END
//   };
//
//   const startHealth = 10;
//   const logItem = cons(cons(startHealth, startHealth), 'Начинаем бой!');
//   return reverse(iter(startHealth, player1, startHealth, player2, 1, l(logItem)));
// };
