const mongoose = require("mongoose");
const Component = require('../api/models/component.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const components = [
  {
    letter: "A",
    components: [
      { id: 1, name: "Aceitunas negras" },      
      { id: 2, name: "Aceitunas verdes" },      
      { id: 3, name: "Acidulante" },      
      { id: 4, name: "Alcaparras" },      
      { id: 5, name: "Anchoas" },      
      { id: 6, name: "Azúcar" },      
      { id: 7, name: "Azúcar glas" },      
      { id: 8, name: "Azúcar moreno" },
    ]
  },
  {
    letter: "C",
    components: [
      { id: 9, name: "Caldo de pollo" },
      { id: 10, name: "Carne de cerdo" },
      { id: 11, name: "Carne de vacuno" },
      { id: 12, name: "Cebolla" },
      { id: 13, name: "Cebolla frita" },
      { id: 14, name: "Canela" },
      { id: 15, name: "Chorizo" },
      { id: 16, name: "Chocolate negro" },
      { id: 17, name: "Condimentos" },
    ]
  },
  {
    letter: "E",
    components: [
      { id: 18, name: "Especias" },
    ]
  },
  {
    letter: "G",
    components: [
      { id: 19, name: "Guisantes" },
    ]
  },
  {
    letter: "H",
    components: [
      { id: 20, name: "Harina de almendras" },
      { id: 21, name: "Harina de trigo" },
    ]
  },
  {
    letter: "J",
    components: [
      { id: 22, name: "Jamón serrano" },
    ]
  },
  {
    letter: "L",
    components: [
      { id: 23, name: "Leche" },
      { id: 24, name: "Levadura" },
      { id: 25, name: "Levadura en polvo" },
    ]
  },
  {
    letter: "M",
    components: [
      { id: 26, name: "Mantequilla" },
      { id: 27, name: "Miel" },
    ]
  },
  {
    letter: "P",
    components: [
      { id: 28, name: "Pimentón" },
      { id: 29, name: "Pimiento rojo" },
      { id: 30, name: "Pimiento verde" },
      { id: 31, name: "Pollo" },
    ]
  },
  {
    letter: "Q",
    components: [
      { id: 32, name: "Queso" },
    ]
  },
  {
    letter: "S",
    components: [
      { id: 33, name: "Sal" },
      { id: 34, name: "Sal marina" },
      { id: 35, name: "Salchicha" },
    ]
  },
  {
    letter: "T",
    components: [
      { id: 36, name: "Tomate" },
    ]
  },
  {
    letter: "V",
    components: [
      { id: 37, name: "Vainilla" },
      { id: 38, name: "Vitamina A" },
      { id: 39, name: "Vitamina B" },
    ]
  },
  {
    letter: "Z",
    components: [
      { id: 40, name: "Zanahoria" },
    ]
  },
];

// const components = [
// {   letter: "A",
//     components: [
//       { name: "Aceitunas negras" },      
//       { name: "Aceitunas verdes" },      
//       { name: "Acidulante" },      
//       { name: "Alcaparras" },      
//       { name: "Anchoas" },      
//       { name: "Azúcar" },      
//       { name: "Azúcar glas" },      
//       { name: "Azúcar moreno" },
//     ]
// },
// {
//   letter: "C",
//   components: [
//     { name: "Caldo de pollo" },
//     { name: "Carne de cerdo" },
//     { name: "Carne de vacuno" },
//     { name: "Cebolla" },
//     { name: "Cebolla frita" },
//     { name: "Canela" },
//     { name: "Chorizo" },
//     { name: "Chocolate negro" },
//     { name: "Condimentos" },
//   ]
// },
// {
//   letter: "E",
//   components: [
//     { name: "Especias" },
//   ]
// },
// {
//   letter: "G",
//   components: [
//     { name: "Guisantes" },
//   ]
// },
// {
//   letter: "H",
//   components: [
//     { name: "Harina de almendras" },
//     { name: "Harina de trigo" },
//   ]
// },
// {
//   letter: "J",
//   components: [
//     { name: "Jamón serrano" },
//   ]
// },
// {
//   letter: "L",
//   components: [
//     { name: "Leche" },
//     { name: "Levadura" },
//     { name: "Levadura en polvo" },
//   ]
// },
// {
//   letter: "M",
//   components: [
//     { name: "Mantequilla" },
//     { name: "Miel" },
//   ]
// },
// {
//   letter: "P",
//   components: [
//     { name: "Pimentón" },
//     { name: "Pimiento rojo" },
//     { name: "Pimiento verde" },
//     { name: "Pollo" },
//   ]
// },
// {
//   letter: "Q",
//   components: [
//     { name: "Queso" },
//   ]
// },
// {
//   letter: "S",
//   components: [
//     { name: "Sal" },
//     { name: "Sal marina" },
//     { name: "Salchicha" },
//   ]
// },
// {
//   letter: "T",
//   components: [
//     { name: "Tomate" },
//   ]
// },
// {
//   letter: "V",
//   components: [
//     { name: "Vainilla" },
//     { name: "Vitamina A" },
//     { name: "Vitamina B" },
//   ]
// },
// {
//   letter: "Z",
//   components: [
//     { name: "Zanahoria" },
//   ]
// },
// ]

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