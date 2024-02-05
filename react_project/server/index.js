require("dotenv").config(); // для большей безопастности

const express = require("express"); // подключаем модули из express
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index");
const errorMiddleware = require("./middlewares/error_middlewares");
const PORT =  5000;
const app = express();

app.use(express.json()); // разбирать тело запроса в формате JSON
app.use(cookieParser()); // работать с куки , которые могут использоваться для хранения информации на стороне клиента.
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use(errorMiddleware);

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
