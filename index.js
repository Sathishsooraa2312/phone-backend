import express from "express"; 
import * as dotenv from 'dotenv'
import { MongoClient } from "mongodb";
import cors from "cors";
const app = express();
dotenv.config()
app.use(cors())
const PORT = process.env.PORT;
const MONGO_URL=process.env.MONGO_URL;   
const client=new MongoClient(MONGO_URL) 
 await client.connect(); 
 console.log("Mongodb is connected");

 app.use(express.json());

app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩");
});
const mobiles=[{
  "model": "OnePlus 9 5G",
  "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  "company": "Oneplus"
  },
  {
  "model": "Iphone 13 mini",
  "img": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
  "company": "Apple"
  },
  {
  "model": "Samsung s21 ultra",
  "img": "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
  "company": "Samsung"
  },
  {
  "model": "Xiomi mi 11",
  "img": "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
  "company": "Xiomi"
  }
  ]
app.get("/mobiles", function (request, response) {
  response.send(mobiles);
});

// app.use('/mobiles',usersRouter);

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
