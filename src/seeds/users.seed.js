const mongoose = require("mongoose");
const User = require("../api/models/user.model");
const dotenv = require("dotenv");
dotenv.config();
const DB_URL = process.env.DB_URL;

const users = [
  {
    "name": "Nerea Fernández",
	"email": "nerea@nerea.com",
	"phone": "+34 111-444-333",
	"password": "$2b$10$BB6BooSb1NSz7GV41CDVseZjAesm4J.K.JAoM4XushYJ.uvrHKAZ6",
	"photourl": "",
	"_id": "63e54e7730c2e623c675f5b3",
  "intolerances": ["63ecc4b1f5b83895ecf0b0fd","63ecc4b1f5b83895ecf0b101"],   
  },
  {
    "name": "Pedro Fernández",
    "email": "pedro@pedro.com",
    "phone": "+34 222-444-333",
    "password": "$2b$10$WYw8qD7sKwYvIQfZ2Ap9hOJzDqwlR7WnnpBf2oHpgMyQ3HnevHB2q",
    "photourl":"",
    "_id": "63e3fec5be74d20951221460", 
    "intolerances": ["63ecc4b1f5b83895ecf0b0f7","63ecc4b1f5b83895ecf0b0f9"],
  },
  {
	"name": "Alba Mozas",
	"email": "alba@alba.com",
	"phone": "+34 333-444-333",
	"password": "$2b$10$ohvodrpeN09kFtHvkPgkWeZduKOVqFE4xuAquCL4sz3lLSQD0pbra",
	"photourl": "",
	"_id": "63e5504972314778f6e32de9",
  "intolerances": ["63ecc4b1f5b83895ecf0b0f2","63ecc4b1f5b83895ecf0b0f5","63ecc4b1f5b83895ecf0b103","63ecc4b1f5b83895ecf0b105","63ecc4b1f5b83895ecf0b0e7","63ecc4b1f5b83895ecf0b10b"],
},
{
	"name": "Marcos Fraile",
	"email": "marcos@marcos.com",
	"phone": "+34 555-444-333",
	"password": "$2b$10$WMwUrb2I1saXP92GR1MZhuPC4NwQtdMW5EcN/HoXMUBhB35AzEtba",
	"photourl": "",
	"_id": "63e5508272314778f6e32dec",
  "intolerances": ["63ecc4b1f5b83895ecf0b0e4","63ecc4b1f5b83895ecf0b0e8","63ecc4b1f5b83895ecf0b100"],
}
  
];

mongoose.set("strictQuery", false);

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then(async () => {
    const allUser = await users.find();
    if (allUser.length > 0) {
      await users.collection.drop();
      console.log("Users Delete");
    }
  }).catch((error) => console.log("error Delete users", error))
  .then(async () => {
    const userMap = users.map((user) => new User(user));
    await User.insertMany(userMap);
    console.log("insert users");
  })
  .catch((error) => console.log("error insert users", error))
  .finally(() => mongoose.disconnect());
