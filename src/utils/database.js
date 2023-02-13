const mongoose = require('mongoose');

const DB_URL = process.env.DB_URL;

const connect = async () => {
    try {
        mongoose.set("strictQuery", false);
        const DB = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = DB.connection;
        console.log(`Connected to ${name} DB in host: ${host}`);
    } catch (error) {
        console.log(`Error connecting to my database: ${error}`);
    }
}

module.exports = {connect}