const express = require('express')
const http  = require('http')
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const cors = require("cors")
const app = express()
const server = http.createServer(app);
app.use(require("body-parser").json());
app.use(express.json());
const User = require("./models/user");



mongoose.connect("mongodb://localhost:27017/React")
  .then(() => console.log("Connected!"));
/* const store = new MongoDBStore({
  uri: "mongodb://localhost:27017/React",
  collection: "sessions",
});
 */


app.post("http://localhost:3001/register", async (req,res) =>{
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  console.log("calıstım")

  await Users.findOne({
    email: email,
  })
    .then((result) => {
      if (result) {
        let hataMesaji = JSON.stringify({
          message: "Kullanıcı Mevcut",
        });
        return res.send(hataMesaji);
      } else {
        const yeniKullanici = new User({
          username: username,
          email: email,
          password: password,
        });
        yeniKullanici.save();
        let message = JSON.stringify({
          message: ".Basariyla kayit oldunuz."
        });
        return res.send(message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
})







console.log("server calısıyor")
server.listen(3001, () => {
    console.log(`Server running on port 3000`);
  });