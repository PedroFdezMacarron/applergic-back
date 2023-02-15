const mongoose = require("mongoose");
const Food= require('../api/models/food.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const foods=[
    {
      "nombre": "Galletas de avena orgánicas",
      "marca": "Green Valley",
      "ean": "2001234567890",
      "componentes": [
        "Harina de avena orgánica",
        "Azúcar de caña orgánico",
        "Aceite de girasol orgánico",
        "Huevos orgánicos",
        "Sal marina"
      ]
    },
    {
      "nombre": "Salsa de tomate casera",
      "marca": "Nonna's Kitchen",
      "ean": "2002345678901",
      "componentes": [
        "Tomates frescos",
        "Cebolla",
        "Ajo",
        "Aceite de oliva",
        "Sal",
        "Azúcar"
      ]
    },
    {
      "nombre": "Cereal de miel y nueces",
      "marca": "Honey Nutty",
      "ean": "2003456789012",
      "componentes": [
        "Avena integral",
        "Nueces",
        "Miel",
        "Aceite de canola",
        "Sal"
      ]
    },
    {
      "nombre": "Yogurt griego de fresa",
      "marca": "Olympia Farms",
      "ean": "2004567890123",
      "componentes": [
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
      "nombre": "Atún enlatado en aceite",
      "marca": "Ocean Catch",
      "ean": "2005678901234",
      "componentes": [
        "Atún",
        "Aceite de girasol",
        "Sal"
      ]
    },
    {
      "nombre": "Jugo de naranja recién exprimido",
      "marca": "Sunburst Farms",
      "ean": "2006789012345",
      "componentes": [
        "Naranjas frescas",
        "Agua",
        "Azúcar"
      ]
    },
    {
      "nombre": "Sopa de tomate enlatada",
      "marca": "Big Kettle",
      "ean": "2007890123456",
      "componentes": [
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
      "nombre": "Sándwich de pollo a la parrilla",
      "marca": "Grill King",
      "ean": "2008901234567",
      "componentes": [
        "Pan de trigo",
        "Pechuga de pollo a la parrilla",
        "Queso suizo",
        "Lechuga",
        "Tomate",
        "Mayonesa"
      ]
    },
    {
      "nombre": "Helado de vainilla con chispas de chocolate",
      "marca": "Sweet Treats",
      "ean": "2009012345678",
      "componentes": [
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
      "nombre": "Mantequilla de maní natural",
      "marca": "Nutty Buddy",
      "ean": "2000123456789",
      "componentes": [
        "Maní tostado",
        "Aceite de maní",
        "Sal"
      ]
    },
    {
      "nombre": "Pasta de trigo integral",
      "marca": "Fiberlicious",
      "ean": "2001234567890",
      "componentes": [
        "Harina de trigo integral",
        "Agua"
      ]
    },
    {
      "nombre": "Hamburguesa vegetariana con queso cheddar",
      "marca": "Green Garden",
      "ean": "2002345678901",
      "componentes": [
        "Hamburguesa vegetariana",
        "Pan de hamburguesa",
        "Queso cheddar",
        "Lechuga",
        "Tomate",
        "Mayonesa"
      ]
    },
    {
      "nombre": "Leche descremada orgánica",
      "marca": "Organic Dairy",
      "ean": "2003456789012",
      "componentes": [
        "Leche descremada orgánica",
        "Vitamina A",
        "Vitamina D"
      ]
    },
    {
      "nombre": "Café molido para espresso",
      "marca": "Dark Roast",
      "ean": "2004567890123",
      "componentes": [
        "Café de grano",
        "Agua"
    ]
    },
    {
      "nombre": "Tortilla de trigo",
      "marca": "Tortilla Time",
      "ean": "2005678901234",
      "componentes": [
        "Harina de trigo",
        "Agua",
        "Aceite de canola",
        "Sal"
    ]
    },
    {
      "nombre": "Queso cheddar rallado",
      "marca": "Cheesy Goodness",
      "ean": "2006789012345",
      "componentes": [
        "Leche",
        "Cultivos de queso",
        "Sal",
        "Enzima del queso",
        "Colorante"
    ]
    },
    {
      "nombre": "Ensalada de atún",
      "marca": "Seafood Delight",
      "ean": "2007890123456",
      "componentes": [
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
      "nombre": "Palomitas de maíz con sabor a mantequilla",
      "marca": "Buttery Pop",
      "ean": "2008901234567",
      "componentes": [
        "Maíz para palomitas",
        "Aceite de canola",
        "Sal",
        "Saborizante artificial a mantequilla",
        "Colorante amarillo"
      ]
    },
    {
      "nombre": "Aceitunas verdes rellenas de pimiento",
      "marca": "Mediterranean Delights",
      "ean": "2009012345678",
      "componentes": [
        "Aceitunas verdes",
        "Pimiento",
        "Sal",
        "Acidulante"
      ]
    },
    {
      "nombre": "Galletas de avena",
      "marca": "Oatmeal Bliss",
      "ean": "2000123456789",
      "componentes": [
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
      "nombre": "Leche de almendra sin azúcar",
      "marca": "Almond Breeze",
      "ean": "2012345678901",
      "componentes": [
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
      "nombre": "Salsa de tomate",
      "marca": "Tomato Time",
      "ean": "2013456789012",
      "componentes": [
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
      "nombre": "Cereal de arroz inflado",
      "marca": "Rice Puffs",
      "ean": "2014567890123",
      "componentes": [
        "Arroz integral",
        "Azúcar",
        "Sal",
        "Saborizante natural de vainilla"
      ]
    },
    {
      "nombre": "Sopa de pollo",
      "marca": "Chicken Soup Co.",
      "ean": "2015678901234",
      "componentes": [
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
      "nombre": "Gelatina de frutas",
      "marca": "Fruit Jellies",
      "ean": "2016789012345",
      "componentes": [
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
      "nombre": "Pan integral",
      "marca": "Whole Wheat Bakery",
      "ean": "2017890123456",
      "componentes": [
        "Harina de trigo integral",
        "Agua",
        "Levadura",
        "Azúcar",
        "Aceite vegetal",
        "Sal"
      ]
    },
    {
      "nombre": "Mermelada de fresa",
      "marca": "Berry Good",
      "ean": "2018901234567",
      "componentes": [
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
    const allFood = await Food.find();
    if(allFood.length > 0) {
        await Food.collection.drop();
        console.log('Foods Delete');
    }
}).catch((error) => console.log("error Delete foods", error))
.then(async () => {
    const foodMap = foods.map((food) => new Food(food));
    await Food.insertMany(foodMap);
    console.log("insert foods")
})
.catch((error) => console.log("error insert food", error))
.finally(() => mongoose.disconnect());
