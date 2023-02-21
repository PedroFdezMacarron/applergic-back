const mongoose = require("mongoose");
const Product= require('../api/models/product.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const products=[
    {
      "_id": "63f34eabfb3892b2cfad604c",
      "name": "Galletas de avena orgánicas",
      "brand": "Green Valley",
      "EAN": "2001234567890",
      "img":"https://m.media-amazon.com/images/I/81EfaZgPMTL._AC_UF8941000_QL80_.jpg",
      "components": [
        "63f33eabdad6960d60dd0468",
        "63f33eabdad6960d60dd045e",
        "63f33eabdad6960d60dd0462",
        "63f33eabdad6960d60dd0466",
        "63f33eabdad6960d60dd046a",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad604d",
      "name": "Salsa de tomate casera",
      "brand": "Orlando",
      "EAN": "2002345678901",
      "img":"https://a1.soysuper.com/048ee1d87ea27215df8c15952aba16e9.1500.0.0.0.wmark.8220b670.jpg",
      "components": [
        "63f33c3f392ab8494126501d",
        "63f33eabdad6960d60dd0456",
        "63f33eabdad6960d60dd0457",
        "63f33eabdad6960d60dd0458",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad604e",
      "name": "Cereal de miel y nueces",
      "brand": "Honey Nutty",
      "EAN": "2003456789012",
      "img":"https://e7.pngegg.com/pngimages/946/388/png-clipart-breakfast-cereal-honey-nut-cheerios-bee-breakfast-honey-bee-food.png",
      "components": [
        "63f33eabdad6960d60dd0459",
        "63f33eabdad6960d60dd045a",
        "63f33eabdad6960d60dd045b",
        "63f33eabdad6960d60dd045c"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad604f",
      "name": "Yogurt griego de fresa",
      "brand": "Olympia Farms",
      "EAN": "2004567890123",
      "img":"https://www.nesquik.es/sites/default/files/2022-03/NQ_POT_390g_FRONT.png",
      "components": [
        "63f33eabdad6960d60dd045d",
        "63f33eabdad6960d60dd045e",
        "63f33eabdad6960d60dd045f",
        "63f33eabdad6960d60dd0460",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6050",
      "name": "Atún enlatado en aceite",
      "brand": "OcEAN Catch",
      "EAN": "2005678901234",
      "components": [
        "63f33eabdad6960d60dd0461",
        "63f33eabdad6960d60dd0463",
        "63f33eabdad6960d60dd0462"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6051",
      "name": "Jugo de naranja recién exprimido",
      "brand": "Sunburst Farms",
      "EAN": "2006789012345",
      "components": [
        "63f33eabdad6960d60dd0465",
        "63f33eabdad6960d60dd0466",
        "63f33eabdad6960d60dd0464",
        "63f33eabdad6960d60dd0468"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6052",
      "name": "Sopa de tomate enlatada",
      "brand": "Big Kettle",
      "EAN": "2007890123456",
      "components": [
        "63f33eabdad6960d60dd0468",
        "63f33eabdad6960d60dd0469",
        "63f33eabdad6960d60dd046a",
        "63f33eabdad6960d60dd046b",
        "63f33eabdad6960d60dd046c",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6053",
      "name": "Sándwich de pollo a la parrilla",
      "brand": "Grill King",
      "EAN": "2008901234567",
      "components": [
        "63f33eabdad6960d60dd046d",
        "63f33eabdad6960d60dd046e",
        "63f33eabdad6960d60dd046f",
        "63f33eabdad6960d60dd0470"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6054",
      "name": "Helado de vainilla con chispas de chocolate",
      "brand": "Sweet Treats",
      "EAN": "2009012345678",
      "components": [
        "63f33eabdad6960d60dd0471",
        "63f33eabdad6960d60dd0472",
        "63f33eabdad6960d60dd0473",
        "63f33eabdad6960d60dd0474",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6055",
      "name": "Mantequilla de maní natural",
      "brand": "Nutty Buddy",
      "EAN": "2000123456789",
      "components": [
        "63f33eabdad6960d60dd0475",
        "63f33eabdad6960d60dd0476",
        "63f33eabdad6960d60dd0477",
        "63f33eabdad6960d60dd0478",
        "63f33eabdad6960d60dd0479"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6056",
      "name": "Pasta de trigo integral",
      "brand": "Fiberlicious",
      "EAN": "2001234567890",
      "components": [
        "63f33eabdad6960d60dd047a",
        "63f33eabdad6960d60dd047b",
        "63f33eabdad6960d60dd047c",
        "63f33eabdad6960d60dd0473",
        "63f33eabdad6960d60dd046e",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6057",
      "name": "Hamburguesa vegetariana con queso cheddar",
      "brand": "Green Garden",
      "EAN": "2002345678901",
      "components": [
        "63f33eabdad6960d60dd0468",
        "63f33eabdad6960d60dd0466",
        "63f33eabdad6960d60dd0469"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6058",
      "name": "Leche descremada orgánica",
      "brand": "Organic Dairy",
      "EAN": "2003456789012",
      "components": [
        "63f33eabdad6960d60dd047b",
        "63f33eabdad6960d60dd047c",
        "63f33eabdad6960d60dd0473",
        "63f33eabdad6960d60dd046e",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6059",
      "name": "Café molido para espresso",
      "brand": "Dark Roast",
      "EAN": "2004567890123",
      "components": [
        "63f33eabdad6960d60dd045f",
        "63f33eabdad6960d60dd045e",
        "63f33eabdad6960d60dd0462",
        "63f33eabdad6960d60dd0469",
        "63f33eabdad6960d60dd0465",
    ]
    },
    {
      "_id": "63f34eabfb3892b2cfad605a",
      "name": "Tortilla de trigo",
      "brand": "Tortilla Time",
      "EAN": "2005678901234",
      "components": [
        "63f33eabdad6960d60dd047b",
        "63f33eabdad6960d60dd0479",
        "63f33eabdad6960d60dd0478",
        "63f33eabdad6960d60dd0477",
        "63f33eabdad6960d60dd046e",
        "63f33eabdad6960d60dd046d"
    ]
    },
    {
      "_id": "63f34eabfb3892b2cfad605b",
      "name": "Queso cheddar rallado",
      "brand": "Cheesy Goodness",
      "EAN": "2006789012345",
      "components": [
        "63f33c3f392ab8494126501d",
        "63f33eabdad6960d60dd0456",
        "63f33eabdad6960d60dd0457",
        "63f33eabdad6960d60dd0462",
        "63f33eabdad6960d60dd0467",
    ]
    },
    {
      "_id": "63f34eabfb3892b2cfad605c",
      "name": "Ensalada de atún",
      "brand": "Seafood Delight",
      "EAN": "2007890123456",
      "components": [
        "63f33eabdad6960d60dd0468",
        "63f33eabdad6960d60dd0469",
        "63f33eabdad6960d60dd046a",
        "63f33eabdad6960d60dd0471",
        "63f33eabdad6960d60dd0475",
        "63f33eabdad6960d60dd0478",
        "63f33eabdad6960d60dd047b",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad605d",
      "name": "Palomitas de maíz con sabor a mantequilla",
      "brand": "Buttery Pop",
      "EAN": "2008901234567",
      "components": [
        "63f33eabdad6960d60dd047c",
        "63f33eabdad6960d60dd0475",
        "63f33eabdad6960d60dd046f",
        "63f33eabdad6960d60dd046d",
        "63f33eabdad6960d60dd0468",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad605e",
      "name": "Aceitunas verdes rellenas de pimiento",
      "brand": "MediterranEAN Delights",
      "EAN": "2009012345678",
      "components": [
        "63f33eabdad6960d60dd0466",
        "63f33eabdad6960d60dd0462",
        "63f33eabdad6960d60dd045d"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad605f",
      "name": "Galletas de avena",
      "brand": "Oatmeal Bliss",
      "EAN": "2000123456789",
      "components": [
        "63f33eabdad6960d60dd0457",
        "63f33eabdad6960d60dd0459",
        "63f33c3f392ab8494126501d",
        "63f33eabdad6960d60dd0458",
        "63f33eabdad6960d60dd0456"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6060",
      "name": "Leche de almendra sin azúcar",
      "brand": "Almond Breeze",
      "EAN": "2012345678901",
      "components": [
        "63f33eabdad6960d60dd0457",
        "63f33eabdad6960d60dd0458",
        "63f33eabdad6960d60dd0459",
        "63f33eabdad6960d60dd0464",
        "63f33eabdad6960d60dd0465",
        "63f33eabdad6960d60dd046a",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6061",
      "name": "Salsa de tomate",
      "brand": "Tomato Time",
      "EAN": "2013456789012",
      "components": [
        "63f33eabdad6960d60dd046d",
        "63f33eabdad6960d60dd046f",
        "63f33eabdad6960d60dd0470",
        "63f33eabdad6960d60dd0465",
        "63f33eabdad6960d60dd0464",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6062",
      "name": "Cereal de arroz inflado",
      "brand": "Rice Puffs",
      "EAN": "2014567890123",
      "components": [
        "63f33eabdad6960d60dd045a",
        "63f33eabdad6960d60dd045b",
        "63f33eabdad6960d60dd045d",
        "63f33eabdad6960d60dd0465",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6063",
      "name": "Sopa de pollo",
      "brand": "Chicken Soup Co.",
      "EAN": "2015678901234",
      "components": [
        "63f33eabdad6960d60dd046a",
        "63f33eabdad6960d60dd046e",
        "63f33eabdad6960d60dd046d",
        "63f33eabdad6960d60dd0473",
        "63f33eabdad6960d60dd0477",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6064",
      "name": "Gelatina de frutas",
      "brand": "Fruit Jellies",
      "EAN": "2016789012345",
      "components": [
        "63f33eabdad6960d60dd047a",
        "63f33eabdad6960d60dd047b",
        "63f33eabdad6960d60dd047c",
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6065",
      "name": "Pan integral",
      "brand": "Whole Wheat Bakery",
      "EAN": "2017890123456",
      "components": [
        "63f33eabdad6960d60dd0475",
        "63f33eabdad6960d60dd0472",
        "63f33eabdad6960d60dd046f",
        "63f33eabdad6960d60dd046d"
      ]
    },
    {
      "_id": "63f34eabfb3892b2cfad6066",
      "name": "Mermelada de fresa",
      "brand": "Berry Good",
      "EAN": "2018901234567",
      "components": [
        "63f33eabdad6960d60dd0465",
        "63f33eabdad6960d60dd0460",
        "63f33eabdad6960d60dd045a",
        "63f33eabdad6960d60dd0457",
        "63f33c3f392ab8494126501d",
      ]
    },
];

mongoose.set("strictQuery", false);

mongoose.connect( DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allProduct = await Product.find();
    if(allProduct.length > 0) {
        await Product.collection.drop();
        console.log('Products Delete');
    }
}).catch((error) => console.log("error Delete products", error))
.then(async () => {
    const productMap = products.map((product) => new Product(product));
    await Product.insertMany(productMap);
    console.log("insert products")
})
.catch((error) => console.log("error insert product", error))
.finally(() => mongoose.disconnect());