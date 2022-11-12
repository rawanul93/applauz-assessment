const express = require('express');
const cors = require('cors');
const authRouter = require('./routes/users/users.router');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);

app.listen(4000, () => {
    console.log('Listening on 4000');
})