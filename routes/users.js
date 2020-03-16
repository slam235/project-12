const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});
router.get('/users/:id', (req, res) => {
  const index = users.findIndex((data) => data._id === req.params.id);
  if (index < 0) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  } else {
    res.send(users[index]);
  }
});
module.exports = router;
