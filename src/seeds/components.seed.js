const mongoose = require("mongoose");
const Component = require('../api/models/component.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const components = [
    "Aceitunas negras",
    "Aceitunas verdes",
    "Acidulante",
    "Alcaparras",
    "Anchoas",
    "Azúcar",
    "Azúcar glas",
    "Azúcar moreno",
    "Caldo de pollo",
    "Carne de cerdo",
    "Carne de vacuno",
    "Cebolla",
    "Cebolla frita",
    "Canela",
    "Chorizo",
    "Chocolate negro",
    "Condimentos",
    "Especias",  "Guisantes",
    "Harina de almendras",
    "Harina de trigo",
    "Jamón serrano",
    "Leche",
    "Levadura",
    "Levadura en polvo",
    "Mantequilla",
    "Miel",  "Pimentón",
    "Pimiento rojo",
    "Pimiento verde",
    "Pollo",
    "Queso",
    "Sal",
    "Sal marina",
    "Salchicha",
    "Tomate",
    "Vainilla",
    "Vitamina A",
    "Vitamina B",
    "Zanahoria",
];

mongoose.set("strictQuery", false);

mongoose.connect( DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(async () => {
    const allComponets = await Component.find();
    if(allComponets.length > 0) {
        await Component.collection.drop();
        console.log('Components Delete');
    }
}).catch((error) => console.log("error Delete components", error))
.then(async () => {
    const componentsMap = components.map((component) => new Component(component));
    await Component.insertMany(componentsMap);
    console.log("insert components")
})
.catch((error) => console.log("error insert component", error))
.finally(() => mongoose.disconnect());