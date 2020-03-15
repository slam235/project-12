const router = require('express').Router();
const path = require('path');

const cards = path.join(__dirname, 'cards.json');

router.get('/cards', (req, res) => {
  res.send(cards);
});
module.exports = router;
