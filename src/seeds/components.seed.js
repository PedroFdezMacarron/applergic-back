const mongoose = require("mongoose");
const Component = require('../api/models/component.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const components = [
    { name: "Aceitunas negras", _id: "63f33c3f392ab8494126501d" },
    { name: "Aceitunas verdes", _id: "63f33eabdad6960d60dd0456" },
    { name: "Acidulante", _id: "63f33eabdad6960d60dd0457"},
    { name: "Alcaparras", _id: "63f33eabdad6960d60dd0458" },
    { name: "Anchoas", _id: "63f33eabdad6960d60dd0459" },
    { name: "Azúcar", _id: "63f33eabdad6960d60dd045a" },
    { name: "Azúcar glas", _id: "63f33eabdad6960d60dd045b" },
    { name: "Azúcar moreno", _id: "63f33eabdad6960d60dd045c" },
    { name: "Caldo de pollo", _id: "63f33eabdad6960d60dd045d" },
    { name: "Carne de cerdo", _id: "63f33eabdad6960d60dd045e" },
    { name: "Carne de vacuno", _id: "63f33eabdad6960d60dd045f" },
    { name: "Cebolla", _id: "63f33eabdad6960d60dd0460" },
    { name: "Cebolla frita", _id: "63f33eabdad6960d60dd0461" },
    { name: "Canela", _id: "63f33eabdad6960d60dd0462" },
    { name: "Chorizo", _id: "63f33eabdad6960d60dd0463" },
    { name: "Chocolate negro", _id: "63f33eabdad6960d60dd0464" },
    { name: "Condimentos", _id: "63f33eabdad6960d60dd0465" },
    { name: "Especias", _id: "63f33eabdad6960d60dd0466" },
    { name: "Guisantes", _id: "63f33eabdad6960d60dd0467" },
    { name: "Harina de almendras", _id: "63f33eabdad6960d60dd0468" },
    { name: "Harina de trigo",_id: "63f33eabdad6960d60dd0469" },
    { name: "Jamón serrano", _id: "63f33eabdad6960d60dd046a" },
    { name: "Leche", _id: "63f33eabdad6960d60dd046b" },
    { name: "Levadura", _id: "63f33eabdad6960d60dd046c" },
    { name: "Levadura en polvo", _id: "63f33eabdad6960d60dd046d" },
    { name: "Mantequilla", _id: "63f33eabdad6960d60dd046e" },
    { name: "Miel", _id: "63f33eabdad6960d60dd046f" },
    { name: "Pimentón", _id: "63f33eabdad6960d60dd0470" },
    { name: "Pimiento rojo", _id: "63f33eabdad6960d60dd0471" },
    { name: "Pimiento verde", _id: "63f33eabdad6960d60dd0472" },
    { name: "Pollo", _id: "63f33eabdad6960d60dd0473" },
    { name: "Queso", _id: "63f33eabdad6960d60dd0474" },
    { name: "Sal", _id: "63f33eabdad6960d60dd0475" },
    { name: "Sal marina", _id: "63f33eabdad6960d60dd0476" },
    { name: "Salchicha", _id: "63f33eabdad6960d60dd0477" },
    { name: "Tomate", _id: "63f33eabdad6960d60dd0478" },
    { name: "Vainilla", _id: "63f33eabdad6960d60dd0479" },
    { name: "Vitamina A", _id: "63f33eabdad6960d60dd047a" },
    { name: "Vitamina B", _id: "63f33eabdad6960d60dd047b" },
    { name: "Zanahoria", _id: "63f33eabdad6960d60dd047c" },
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