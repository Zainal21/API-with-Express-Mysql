const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// required route
const BarangRoutes = require('./routes/barang');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/api/barang', BarangRoutes);


app.listen(3000, ()=>{
  console.log("Server berjalan di http://localhost:"+3000)
})