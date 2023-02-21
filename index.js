const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const productsRouter = require('./src/api/routes/products.routes');
const componentsRouter = require('./src/api/routes/components.routes');

const usersRouter = require('./src/api/routes/user.routes');
dotenv.config();
const { urlencoded } = require('express');
const {connect} = require('./src/utils/database');
const PORT = process.env.PORT || 5000;
const app = express();
connect();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Method', 'POST, GET, PUT, DELETE, PATCH');  //definimos que metodos permitimos en nuestra API
    res.header('Access-Control-Allow-Credentials', 'true'); //podemos recibir una conexion con credenciales
    res.header('Access-Control-Allow-Headers', 'Content-Type'); //tipos de cabeceras que permitimos
    next();
})


app.use(express.json());

app.use(cors({
    origin:'*',
    credentials: true
})); 

// ejemplo de cors
// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:4200', 'http://RUTADEMIFRONT.com'],
//     credentials: true
// }))




app.use(express.urlencoded({extended: true}));

app.use('/products', productsRouter);
app.use('/components', componentsRouter);
app.use('/users', usersRouter);


app.listen(PORT, () => console.log('listening on port', PORT));

