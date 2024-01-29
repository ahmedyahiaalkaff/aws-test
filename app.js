
const express = require('express');
const path = require('path');
require('dotenv').config()

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index')
})

const port = process.env.PORT || 8080;

app.listen(port, ()=>{
  console.log(`listening to port ${port}`);
})