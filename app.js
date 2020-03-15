const express = require('express');
const path = require('path');
const router = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', router);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
