const router = require('express').Router();
const path = require('path');
const fs = require('fs').promises;

router.get('/', (req, res) => {
  fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
    .then((data) => {
      if (data !== undefined) {
        res.send(data);
      } else {
        res.send({ message: 'Невозможно прочитать .json файл' });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
