const express = require("express");
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const port = 3001;

dbUrl = 'mongodb+srv://mento:mento2022@cluster0.iy0kq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(dbUrl, connectionParams).then(() => {
  console.log('MongoDB Connected');
  const kitty = new Cat({name: 'dani'});
  kitty.save().then(() => console.log('meow'));
  console.log('Hii');
}).catch((err) => console.log(err));
const Cat = mongoose.model('Cat', {name: String});

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
