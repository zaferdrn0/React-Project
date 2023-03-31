const express = require('express')
const http  = require('http')
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBStore = require("connect-mongodb-session")(session);
const cors = require("cors")
const app = express()
const server = http.createServer(app);
app.use(require("body-parser").json());
app.use(express.json());
const User = require("./models/user");



mongoose.connect("mongodb://localhost:27017/React")
  .then(() => console.log("Connected!"));
 const store = new MongoDBStore({
  uri: "mongodb://localhost:27017/React",
  collection: "sessions",
});
app.use(
  session({
    secret: "my-secret",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);


app.options('*', cors({
  credentials: true,
  methods: '*',
  origin: "http://localhost:3000"
})) // include before other routes

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  exposedHeaders: ['set-cookie'],
}));

app.post("/register", async (req,res) =>{
  let username = req.body.username;
  let email = req.body.email;
  let password = req.body.password;
  console.log("calıstım")

  await User.findOne({
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
          message: ".Basariyla kayit oldunuz.",
          data: "1"
        });
        return res.send(message);
      }
    })
    .catch((error) => {
      console.log(error);
    });
})


app.post("/login", async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  await User.findOne({
    email: email,
  })
    .then((result) => {
      if (result) {
        if (email === result.email && password === result.password) {
          req.session.user = result
          console.log(req.session);
          let message = JSON.stringify({
            message: ".Basarıyla Giris Yaptınız.",
            yonlendir: "/",
          });
          return res.send(message);
        } else {
          let hataMesaji = JSON.stringify({
            message: ".Sifre yanlis.",
          });
          return res.send(hataMesaji);
        }
      } else {
        let hataMesaji = JSON.stringify({
          message: ".Eposta Adresi Kayıtlı Degil.",
        });
        return res.send(hataMesaji);
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

app.post("/addtodo", async (req,res) =>{
  const todo = req.body.todo;
  let user = req.session.user; // Retrieve user object from session
  console.log(user);
})






console.log("server calısıyor")
server.listen(3001, () => {
    console.log(`Server running on port 3000`);
  });