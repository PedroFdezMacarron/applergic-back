const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const foodsRouter = require('./src/api/routes/foods.routes');
const usersRouter = require('./src/api/routes/user.routes');
dotenv.config();
const { urlencoded } = require('express');
const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();

app.use(express.json());

app.use(cors()); 

app.use(express.urlencoded({extended: true}));

app.use('/foods', foodsRouter);

app.use('/users', usersRouter);
app.listen(PORT, () => console.log('listening on port', PORT));

