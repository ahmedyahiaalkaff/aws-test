
const express = require('express');
const path = require('path');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('*', (req, res) => {
  res.render('index')
})


app.listen(80, ()=>{
  console.log('listening to port 80');
})