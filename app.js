const express = require('express');
const path = require('path');
const cardsRouter = require('./routes/cards');
const usersRouter = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use('/cards', cardsRouter);
app.use('/users', usersRouter);
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
