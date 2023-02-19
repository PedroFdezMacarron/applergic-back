const mongoose = require("mongoose");
const Component = require('../api/models/component.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const components = [
{   letter: "A",
    components: [
      { name: "Aceitunas negras" },      
      { name: "Aceitunas verdes" },      
      { name: "Acidulante" },      
      { name: "Alcaparras" },      
      { name: "Anchoas" },      
      { name: "Azúcar" },      
      { name: "Azúcar glas" },      
      { name: "Azúcar moreno" },
    ]
},
{
  letter: "C",
  components: [
    { name: "Caldo de pollo" },
    { name: "Carne de cerdo" },
    { name: "Carne de vacuno" },
    { name: "Cebolla" },
    { name: "Cebolla frita" },
    { name: "Canela" },
    { name: "Chorizo" },
    { name: "Chocolate negro" },
    { name: "Condimentos" },
  ]
},
{
  letter: "E",
  components: [
    { name: "Especias" },
  ]
},
{
  letter: "G",
  components: [
    { name: "Guisantes" },
  ]
},
{
  letter: "H",
  components: [
    { name: "Harina de almendras" },
    { name: "Harina de trigo" },
  ]
},
{
  letter: "J",
  components: [
    { name: "Jamón serrano" },
  ]
},
{
  letter: "L",
  components: [
    { name: "Leche" },
    { name: "Levadura" },
    { name: "Levadura en polvo" },
  ]
},
{
  letter: "M",
  components: [
    { name: "Mantequilla" },
    { name: "Miel" },
  ]
},
{
  letter: "P",
  components: [
    { name: "Pimentón" },
    { name: "Pimiento rojo" },
    { name: "Pimiento verde" },
    { name: "Pollo" },
  ]
},
{
  letter: "Q",
  components: [
    { name: "Queso" },
  ]
},
{
  letter: "S",
  components: [
    { name: "Sal" },
    { name: "Sal marina" },
    { name: "Salchicha" },
  ]
},
{
  letter: "T",
  components: [
    { name: "Tomate" },
  ]
},
{
  letter: "V",
  components: [
    { name: "Vainilla" },
    { name: "Vitamina A" },
    { name: "Vitamina B" },
  ]
},
{
  letter: "Z",
  components: [
    { name: "Zanahoria" },
  ]
},
]

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