const express = require('express')
const http  = require('http')
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
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

// Add headers before the routes are defined
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});



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