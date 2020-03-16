const router = require('express').Router();
const cards = require('../data/cards.json');

router.get('/cards', (req, res) => {
  res.send(cards);
});
module.exports = router;
// const path = require('path');
// const fs = require('fs').promises;

// router.get('/cards', (req, res) => {
//   fs.readFile(path.join(__dirname, '../data/cards.json'), { encoding: 'utf8' })
//     .then((data) => {
//       if (data !== undefined) {
//         res.send(JSON.parse(data));
//       } else {
//         res.send({ message: 'Невозможно прочитать .json файл' });
//       }
//     })
//     .catch((err) => {
//       // eslint-disable-next-line no-console
//       console.log(err);
//     });
// });
// module.exports = router;
