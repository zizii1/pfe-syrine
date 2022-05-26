const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;
const db = {
  database:
    // "mongodb+srv://root:root@kidkod.xmqil.mongodb.net/kidkok?retryWrites=true&w=majority" ||
    "mongodb://localhost/pfeSyrine",
  secret: "mysecret",
};

/******************** Mongoose ********************/
mongoose.Promise = global.Promise;
mongoose
  .connect(db.database)
  .then((res) => console.log("mongoose connected !"));

/******************** Middleware ********************/
let app = express();
app.use(cors({ credentials: true, sameSite: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, sameSite: true }));

const user = require("./routers/user");

app.use("/api/user", user);

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port} !`);
});
