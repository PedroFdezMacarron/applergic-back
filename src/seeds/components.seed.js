const mongoose = require("mongoose");
const Component = require('../api/models/component.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const components = [
    { name: "Aceitunas negras" },
    { name: "Aceitunas verdes" },
    { name: "Acidulante" },
    { name: "Alcaparras" },
    { name: "Anchoas" },
    { name: "Azúcar" },
    { name: "Azúcar glas" },
    { name: "Azúcar moreno" },
    { name: "Caldo de pollo" },
    { name: "Carne de cerdo" },
    { name: "Carne de vacuno" },
    { name: "Cebolla" },
    { name: "Cebolla frita" },
    { name: "Canela" },
    { name: "Chorizo" },
    { name: "Chocolate negro" },
    { name: "Condimentos" },
    { name: "Especias" },
    { name: "Guisantes" },
    { name: "Harina de almendras" },
    { name: "Harina de trigo" },
    { name: "Jamón serrano" },
    { name: "Leche" },
    { name: "Levadura" },
    { name: "Levadura en polvo" },
    { name: "Mantequilla" },
    { name: "Miel" },
    { name: "Pimentón" },
    { name: "Pimiento rojo" },
    { name: "Pimiento verde" },
    { name: "Pollo" },
    { name: "Queso" },
    { name: "Sal" },
    { name: "Sal marina" },
    { name: "Salchicha" },
    { name: "Tomate" },
    { name: "Vainilla" },
    { name: "Vitamina A" },
    { name: "Vitamina B" },
    { name: "Zanahoria" },
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