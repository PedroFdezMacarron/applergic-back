const mongoose = require("mongoose");
const Food= require('../api/models/food.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const foods=[
    {      
        "ean": "8410014478764",
        "name": "ColaCao",
    },
    {      
        "ean": "8410014478764",
        "name": "ColaCao",
    },
    {      
        "ean": "8410014478764",
        "name": "ColaCao",
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
