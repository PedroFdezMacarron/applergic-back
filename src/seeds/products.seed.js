const mongoose = require("mongoose");
const Product= require('../api/models/product.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const products=[
    {
      "name": "Galletas de avena orgánicas",
      "brand": "Green Valley",
      "EAN": "2001234567890",
      "components": [
        "Harina de avena orgánica",
        "Azúcar de caña orgánico",
        "Aceite de girasol orgánico",
        "Huevos orgánicos",
        "Sal marina"
      ]
    },
    {
      "name": "Salsa de tomate casera",
      "brand": "Nonna's Kitchen",
      "EAN": "2002345678901",
      "components": [
        "Tomates frescos",
        "Cebolla",
        "Ajo",
        "Aceite de oliva",
        "Sal",
        "Azúcar"
      ]
    },
    {
      "name": "Cereal de miel y nueces",
      "brand": "Honey Nutty",
      "EAN": "2003456789012",
      "components": [
        "Avena integral",
        "Nueces",
        "Miel",
        "Aceite de canola",
        "Sal"
      ]
    },
    {
      "name": "Yogurt griego de fresa",
      "brand": "Olympia Farms",
      "EAN": "2004567890123",
      "components": [
        "Leche entera",
        "Cultivos de yogur",
        "Fresas",
        "Azúcar",
        "Almidón modificado",
        "Saborizante natural",
        "Jugo de zanahoria (para color)"
      ]
    },
    {
      "name": "Atún enlatado en aceite",
      "brand": "OcEAN Catch",
      "EAN": "2005678901234",
      "components": [
        "Atún",
        "Aceite de girasol",
        "Sal"
      ]
    },
    {
      "name": "Jugo de naranja recién exprimido",
      "brand": "Sunburst Farms",
      "EAN": "2006789012345",
      "components": [
        "Naranjas frescas",
        "Agua",
        "Azúcar"
      ]
    },
    {
      "name": "Sopa de tomate enlatada",
      "brand": "Big Kettle",
      "EAN": "2007890123456",
      "components": [
        "Tomates",
        "Agua",
        "Cebolla",
        "Aceite de oliva",
        "Sal",
        "Ajo",
        "Azúcar",
        "Especias"
      ]
    },
    {
      "name": "Sándwich de pollo a la parrilla",
      "brand": "Grill King",
      "EAN": "2008901234567",
      "components": [
        "Pan de trigo",
        "Pechuga de pollo a la parrilla",
        "Queso suizo",
        "Lechuga",
        "Tomate",
        "Mayonesa"
      ]
    },
    {
      "name": "Helado de vainilla con chispas de chocolate",
      "brand": "Sweet Treats",
      "EAN": "2009012345678",
      "components": [
        "Crema",
        "Leche",
        "Vainilla",
        "Chips de chocolate",
        "Azúcar",
        "Jarabe de maíz",
        "Yemas de huevo"
      ]
    },
    {
      "name": "Mantequilla de maní natural",
      "brand": "Nutty Buddy",
      "EAN": "2000123456789",
      "components": [
        "Maní tostado",
        "Aceite de maní",
        "Sal"
      ]
    },
    {
      "name": "Pasta de trigo integral",
      "brand": "Fiberlicious",
      "EAN": "2001234567890",
      "components": [
        "Harina de trigo integral",
        "Agua"
      ]
    },
    {
      "name": "Hamburguesa vegetariana con queso cheddar",
      "brand": "Green Garden",
      "EAN": "2002345678901",
      "components": [
        "Hamburguesa vegetariana",
        "Pan de hamburguesa",
        "Queso cheddar",
        "Lechuga",
        "Tomate",
        "Mayonesa"
      ]
    },
    {
      "name": "Leche descremada orgánica",
      "brand": "Organic Dairy",
      "EAN": "2003456789012",
      "components": [
        "Leche descremada orgánica",
        "Vitamina A",
        "Vitamina D"
      ]
    },
    {
      "name": "Café molido para espresso",
      "brand": "Dark Roast",
      "EAN": "2004567890123",
      "components": [
        "Café de grano",
        "Agua"
    ]
    },
    {
      "name": "Tortilla de trigo",
      "brand": "Tortilla Time",
      "EAN": "2005678901234",
      "components": [
        "Harina de trigo",
        "Agua",
        "Aceite de canola",
        "Sal"
    ]
    },
    {
      "name": "Queso cheddar rallado",
      "brand": "Cheesy Goodness",
      "EAN": "2006789012345",
      "components": [
        "Leche",
        "Cultivos de queso",
        "Sal",
        "Enzima del queso",
        "Colorante"
    ]
    },
    {
      "name": "Ensalada de atún",
      "brand": "Seafood Delight",
      "EAN": "2007890123456",
      "components": [
        "Atún",
        "Huevos",
        "Cebolla",
        "Apio",
        "Pepinillos",
        "Mayonesa",
        "Mostaza",
        "Sal",
        "Pimienta negra"
      ]
    },
    {
      "name": "Palomitas de maíz con sabor a mantequilla",
      "brand": "Buttery Pop",
      "EAN": "2008901234567",
      "components": [
        "Maíz para palomitas",
        "Aceite de canola",
        "Sal",
        "Saborizante artificial a mantequilla",
        "Colorante amarillo"
      ]
    },
    {
      "name": "Aceitunas verdes rellenas de pimiento",
      "brand": "MediterranEAN Delights",
      "EAN": "2009012345678",
      "components": [
        "Aceitunas verdes",
        "Pimiento",
        "Sal",
        "Acidulante"
      ]
    },
    {
      "name": "Galletas de avena",
      "brand": "Oatmeal Bliss",
      "EAN": "2000123456789",
      "components": [
        "Avena",
        "Harina de trigo",
        "Azúcar",
        "Aceite vegetal",
        "Huevos",
        "Vainilla",
        "Polvo de hornear",
        "Sal"
      ]
    },
    {
      "name": "Leche de almendra sin azúcar",
      "brand": "Almond Breeze",
      "EAN": "2012345678901",
      "components": [
        "Agua filtrada",
        "Almendras",
        "Carbonato de calcio",
        "Sal marina",
        "Goma de xantano",
        "Lecitina de girasol",
        "Vitamina A palmitato",
        "Vitamina D2",
        "Vitamina E acetato"
      ]
    },
    {
      "name": "Salsa de tomate",
      "brand": "Tomato Time",
      "EAN": "2013456789012",
      "components": [
        "Tomates",
        "Cebolla",
        "Ajo",
        "Aceite de oliva",
        "Vinagre",
        "Azúcar",
        "Sal",
        "Orégano",
        "Pimienta negra"
      ]
    },
    {
      "name": "Cereal de arroz inflado",
      "brand": "Rice Puffs",
      "EAN": "2014567890123",
      "components": [
        "Arroz integral",
        "Azúcar",
        "Sal",
        "Saborizante natural de vainilla"
      ]
    },
    {
      "name": "Sopa de pollo",
      "brand": "Chicken Soup Co.",
      "EAN": "2015678901234",
      "components": [
        "Caldo de pollo",
        "Carne de pollo",
        "Zanahorias",
        "Apio",
        "Cebolla",
        "Fideos",
        "Sal",
        "Pimienta negra"
      ]
    },
    {
      "name": "Gelatina de frutas",
      "brand": "Fruit Jellies",
      "EAN": "2016789012345",
      "components": [
        "Agua",
        "Azúcar",
        "Gelatina",
        "Jugo de frutas",
        "Ácido cítrico",
        "Colorante",
        "Saborizante natural"
      ]
    },
    {
      "name": "Pan integral",
      "brand": "Whole Wheat Bakery",
      "EAN": "2017890123456",
      "components": [
        "Harina de trigo integral",
        "Agua",
        "Levadura",
        "Azúcar",
        "Aceite vegetal",
        "Sal"
      ]
    },
    {
      "name": "Mermelada de fresa",
      "brand": "Berry Good",
      "EAN": "2018901234567",
      "components": [
        "Fresas",
        "Azúcar",
        "Pectina",
        "Ácido cítrico"
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