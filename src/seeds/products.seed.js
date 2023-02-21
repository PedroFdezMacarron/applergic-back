const mongoose = require("mongoose");
const Product= require('../api/models/product.model');
const dotenv = require('dotenv');
dotenv.config();
const DB_URL = process.env.DB_URL;

const products=[
  {
    "_id": "63f34eabfb3892b2cfad604c",
    "name": "Galletas de avena orgánicas",
    "brand": "Green Valley",
    "EAN": "2001234567890",
    "img":"https://m.media-amazon.com/images/I/81EfaZgPMTL._AC_UF8941000_QL80_.jpg",
    "components": [
      "63f33eabdad6960d60dd0468",
      "63f33eabdad6960d60dd045e",
      "63f33eabdad6960d60dd0462",
      "63f33eabdad6960d60dd0466",
      "63f33eabdad6960d60dd046a",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad604d",
    "name": "Salsa de tomate casera",
    "brand": "Orlando",
    "EAN": "2002345678901",
    "img":"https://a1.soysuper.com/048ee1d87ea27215df8c15952aba16e9.1500.0.0.0.wmark.8220b670.jpg",
    "components": [
      "63f33c3f392ab8494126501d",
      "63f33eabdad6960d60dd0456",
      "63f33eabdad6960d60dd0457",
      "63f33eabdad6960d60dd0458",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad604e",
    "name": "Cereal de miel y nueces",
    "brand": "Honey Nutty",
    "EAN": "2003456789012",
    "img":"https://e7.pngegg.com/pngimages/946/388/png-clipart-breakfast-cereal-honey-nut-cheerios-bee-breakfast-honey-bee-food.png",
    "components": [
      "63f33eabdad6960d60dd0459",
      "63f33eabdad6960d60dd045a",
      "63f33eabdad6960d60dd045b",
      "63f33eabdad6960d60dd045c"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad604f",
    "name": "Yogurt griego de fresa",
    "brand": "Yoplait",
    "EAN": "2004567890123",
    "img":"https://res.cloudinary.com/walmart-labs/image/upload/d_default.jpg/w_960,dpr_auto,f_auto,q_auto:best/gr/images/product-images/img_large/00750104009528L.jpg",
    "components": [
      "63f33eabdad6960d60dd045d",
      "63f33eabdad6960d60dd045e",
      "63f33eabdad6960d60dd045f",
      "63f33eabdad6960d60dd0460",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6050",
    "name": "Atún enlatado en aceite",
    "brand": "Calvo",
    "EAN": "2005678901234",
    "img":"https://m.media-amazon.com/images/I/71DFBcvLOEL._AC_SL1500_.jpg",
    "components": [
      "63f33eabdad6960d60dd0461",
      "63f33eabdad6960d60dd0463",
      "63f33eabdad6960d60dd0462"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6051",
    "name": "Jugo de naranja recién exprimido",
    "brand": "El Corte Inglés",
    "EAN": "2006789012345",
    "img":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202107/12/00118827000748____7__600x600.jpg",
    "components": [
      "63f33eabdad6960d60dd0465",
      "63f33eabdad6960d60dd0466",
      "63f33eabdad6960d60dd0464",
      "63f33eabdad6960d60dd0468"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6052",
    "name": "Sopa de tomate enlatada",
    "brand": "Heinz",
    "EAN": "2007890123456",
    "img":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA02/CONTENIDOS/201507/07/05218002000109____1__600x600.jpg",
    "components": [
      "63f33eabdad6960d60dd0468",
      "63f33eabdad6960d60dd0469",
      "63f33eabdad6960d60dd046a",
      "63f33eabdad6960d60dd046b",
      "63f33eabdad6960d60dd046c",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6053",
    "name": "Sándwich de pollo a la parrilla",
    "brand": "Sandwich Maco",
    "EAN": "2008901234567",
    "img":"https://static.condisline.com/resize_1280x1024/images/catalog/large/875027.jpg",
    "components": [
      "63f33eabdad6960d60dd046d",
      "63f33eabdad6960d60dd046e",
      "63f33eabdad6960d60dd046f",
      "63f33eabdad6960d60dd0470"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6054",
    "name": "Helado de vainilla con chispas de chocolate",
    "brand": "Häagen-Dazs",
    "EAN": "2009012345678",
    "img":"http://www.icecream.com/content/dam/dreyersgrandicecreaminc/us/en/haagen-dazs/products/pints/haagen-dazs-vanilla-chocolate-chip-ice-cream-pint-1500x1140.png",
    "components": [
      "63f33eabdad6960d60dd0471",
      "63f33eabdad6960d60dd0472",
      "63f33eabdad6960d60dd0473",
      "63f33eabdad6960d60dd0474",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6055",
    "name": "Mantequilla de maní natural",
    "brand": "Karay",
    "EAN": "2000123456789",
    "img":"https://karayfoods.com/wp-content/uploads/2021/02/mantequilla-de-mani.jpg",
    "components": [
      "63f33eabdad6960d60dd0475",
      "63f33eabdad6960d60dd0476",
      "63f33eabdad6960d60dd0477",
      "63f33eabdad6960d60dd0478",
      "63f33eabdad6960d60dd0479"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6056",
    "name": "Pasta de trigo integral",
    "brand": "Gallo",
    "EAN": "2001234567890",
    "img":"https://www.supereko.net/media/catalog/product/cache/1/image/1000x1231/9df78eab33525d08d6e5fb8d27136e95/m/a/macarron_gallo_integral.jpg",
    "components": [
      "63f33eabdad6960d60dd047a",
      "63f33eabdad6960d60dd047b",
      "63f33eabdad6960d60dd047c",
      "63f33eabdad6960d60dd0473",
      "63f33eabdad6960d60dd046e",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6057",
    "name": "Hamburguesa vegetariana con queso cheddar",
    "brand": "Very Burger",
    "EAN": "2002345678901",
    "img":"https://distribudiet.net/tienda/346868-thickbox_default/refrig-very-burguer-hamburguesa-vegana-220-g.jpg",
    "components": [
      "63f33eabdad6960d60dd0468",
      "63f33eabdad6960d60dd0466",
      "63f33eabdad6960d60dd0469"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6058",
    "name": "Leche descremada orgánica",
    "brand": "Bové",
    "EAN": "2003456789012",
    "img":"https://images.openfoodfacts.org/images/products/750/163/930/472/front_es.3.full.jpg",
    "components": [
      "63f33eabdad6960d60dd047b",
      "63f33eabdad6960d60dd047c",
      "63f33eabdad6960d60dd0473",
      "63f33eabdad6960d60dd046e",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6059",
    "name": "Café molido para espresso",
    "brand": "Lavazza",
    "EAN": "2004567890123",
    "img":"https://euskovazza.com/wp-content/uploads/2018/07/cafe-molido-lavazza-espresso.jpg",
    "components": [
      "63f33eabdad6960d60dd045f",
      "63f33eabdad6960d60dd045e",
      "63f33eabdad6960d60dd0462",
      "63f33eabdad6960d60dd0469",
      "63f33eabdad6960d60dd0465",
  ]
  },
  {
    "_id": "63f34eabfb3892b2cfad605a",
    "name": "Tortilla de trigo",
    "brand": "Eliges",
    "EAN": "2005678901234",
    "img":"https://www.supermercadosmas.com/media/catalog/product/cache/d91bc430dbe2e3d899436802c7aa5233/a/e/aecoc_08480012029107_08480012029107_c1c1.jpg",
    "components": [
      "63f33eabdad6960d60dd047b",
      "63f33eabdad6960d60dd0479",
      "63f33eabdad6960d60dd0478",
      "63f33eabdad6960d60dd0477",
      "63f33eabdad6960d60dd046e",
      "63f33eabdad6960d60dd046d"
  ]
  },
  {
    "_id": "63f34eabfb3892b2cfad605b",
    "name": "Queso cheddar rallado",
    "brand": "Margui",
    "EAN": "2006789012345",
    "img":"https://a0.soysuper.com/45fb6e565831a6863e66c28e6e0316d6.1500.0.0.0.wmark.e2129039.jpg",
    "components": [
      "63f33c3f392ab8494126501d",
      "63f33eabdad6960d60dd0456",
      "63f33eabdad6960d60dd0457",
      "63f33eabdad6960d60dd0462",
      "63f33eabdad6960d60dd0467",
  ]
  },
  {
    "_id": "63f34eabfb3892b2cfad605c",
    "name": "Ensalada de atún",
    "brand": "Mercadona",
    "EAN": "2007890123456",
    "img":"https://imagenes.lainformacion.com/files/article_default_content/uploads/imagenes/2020/06/27/ensatun-la-ensalada-mas-sana-de-mercadona.png",
    "components": [
      "63f33eabdad6960d60dd0468",
      "63f33eabdad6960d60dd0469",
      "63f33eabdad6960d60dd046a",
      "63f33eabdad6960d60dd0471",
      "63f33eabdad6960d60dd0475",
      "63f33eabdad6960d60dd0478",
      "63f33eabdad6960d60dd047b",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad605d",
    "name": "Palomitas de maíz con sabor a mantequilla",
    "brand": "Great Value",
    "EAN": "2008901234567",
    "img":"https://images.openfoodfacts.org/images/products/750/179/166/3182/front_es.7.400.jpg",
    "components": [
      "63f33eabdad6960d60dd047c",
      "63f33eabdad6960d60dd0475",
      "63f33eabdad6960d60dd046f",
      "63f33eabdad6960d60dd046d",
      "63f33eabdad6960d60dd0468",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad605e",
    "name": "Aceitunas verdes rellenas de pimiento",
    "brand": "La Española",
    "EAN": "2009012345678",
    "img":"https://static.ulabox.com/media/172760_xl.jpg",
    "components": [
      "63f33eabdad6960d60dd0466",
      "63f33eabdad6960d60dd0462",
      "63f33eabdad6960d60dd045d"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad605f",
    "name": "Galletas de avena",
    "brand": "Granvita",
    "EAN": "2000123456789",
    "img":"https://granvita.com/wp-content/uploads/2020/06/gvita_galletas_tradicionales_granola_plegadizo_280g_3-4.png",
    "components": [
      "63f33eabdad6960d60dd0457",
      "63f33eabdad6960d60dd0459",
      "63f33c3f392ab8494126501d",
      "63f33eabdad6960d60dd0458",
      "63f33eabdad6960d60dd0456"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6060",
    "name": "Leche de almendra sin azúcar",
    "brand": "Alpro",
    "EAN": "2012345678901",
    "img":"https://static.carrefour.es/hd_510x_/img_pim_food/732758_00_1.jpg",
    "components": [
      "63f33eabdad6960d60dd0457",
      "63f33eabdad6960d60dd0458",
      "63f33eabdad6960d60dd0459",
      "63f33eabdad6960d60dd0464",
      "63f33eabdad6960d60dd0465",
      "63f33eabdad6960d60dd046a",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6061",
    "name": "Salsa de tomate",
    "brand": "Alacena",
    "EAN": "2013456789012",
    "img":"https://www.supermercadosantamaria.com/documents/10180/10504/123501294_G.jpg",
    "components": [
      "63f33eabdad6960d60dd046d",
      "63f33eabdad6960d60dd046f",
      "63f33eabdad6960d60dd0470",
      "63f33eabdad6960d60dd0465",
      "63f33eabdad6960d60dd0464",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6062",
    "name": "Cereal de arroz inflado",
    "brand": "Kellogg's",
    "EAN": "2014567890123",
    "img":"https://www.despensa.es/documents/10180/10736/220005_G.jpg",
    "components": [
      "63f33eabdad6960d60dd045a",
      "63f33eabdad6960d60dd045b",
      "63f33eabdad6960d60dd045d",
      "63f33eabdad6960d60dd0465",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6063",
    "name": "Sopa de pollo",
    "brand": "Gallina Blanca",
    "EAN": "2015678901234",
    "img":"https://es.openfoodfacts.org/images/products/841/030/010/1840/front_es.50.full.jpg",
    "components": [
      "63f33eabdad6960d60dd046a",
      "63f33eabdad6960d60dd046e",
      "63f33eabdad6960d60dd046d",
      "63f33eabdad6960d60dd0473",
      "63f33eabdad6960d60dd0477",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6064",
    "name": "Gelatina de frutas",
    "brand": "Royal",
    "EAN": "2016789012345",
    "img":"https://sgfm.elcorteingles.es/SGFM/dctm/MEDIA03/202106/29/00118821304062____6__600x600.jpg",
    "components": [
      "63f33eabdad6960d60dd047a",
      "63f33eabdad6960d60dd047b",
      "63f33eabdad6960d60dd047c",
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6065",
    "name": "Pan integral",
    "brand": "Recondo",
    "EAN": "2017890123456",
    "img":"https://www.tuquetraes.com/imagenes/productos/productos_vipges/AP01031203.JPG",
    "components": [
      "63f33eabdad6960d60dd0475",
      "63f33eabdad6960d60dd0472",
      "63f33eabdad6960d60dd046f",
      "63f33eabdad6960d60dd046d"
    ]
  },
  {
    "_id": "63f34eabfb3892b2cfad6066",
    "name": "Mermelada de fresa",
    "brand": "La quesera de la vera",
    "EAN": "2018901234567",
    "img":"https://laqueseradelavera.es/wp-content/uploads/2020/11/mermelada-extra-de-fresa-artesana.jpg",
    "components": [
      "63f33eabdad6960d60dd0465",
      "63f33eabdad6960d60dd0460",
      "63f33eabdad6960d60dd045a",
      "63f33eabdad6960d60dd0457",
      "63f33c3f392ab8494126501d",
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