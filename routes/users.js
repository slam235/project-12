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
// const router = require('express').Router();
// const path = require('path');
// const fs = require('fs').promises;

// router.get('/', (req, res) => {
//   fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
//     .then((data) => {
//       if (data !== undefined) {
//         res.send(data);
//       } else {
//         res.send({ message: 'Невозможно прочитать .json файл' });
//       }
//     })
//     .catch((err) => {
//       // eslint-disable-next-line no-console
//       console.log(err);
//     });
// });
// router.get('/:id', (req, res) => {
//   fs.readFile(path.join(__dirname, '../data/users.json'), { encoding: 'utf8' })
//     .then((data) => {
//       if (data !== undefined) {
//         for (let i = 0; i < data.length; i += 1) {
//           // eslint-disable-next-line no-underscore-dangle
//           if (JSON.parse(data)[i]._id === req.params.id) {
//             res.send(JSON.parse(data)[i]);
//             return;
//           }
//         }
//         res.status(404).send({ message: 'Нет пользователя с таким id' });
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

// const usersRouter = require('express').Router();
// const users = require('../data/users.json');

// usersRouter.get('/', (req, res) => {
//   res.send(users);
// });

// usersRouter.get('/:id', (req, res) => {
//   const indexUser = users.findIndex((item) => item._id === req.params.id);
//   if (indexUser < 0) {
//     res.status(404).send({ message: 'Нет пользователя с таким id' });
//   } else {
//     res.send(users[indexUser]);
//   }
// });

// module.exports = usersRouter;
