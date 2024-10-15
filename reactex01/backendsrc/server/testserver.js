const express = require('express');
const noCache = require('nocache');

const path = require('path')
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

a
app.use('/',express.static(path.join(__dirname,'../../frontendsrc/webapp/imgs')),(req,res)=>{
    res.render(path.join(__dirname,'../../frontendsrc/webapp/views/test.ejs'))
})






app.listen(3000, () => {

    console.log("서버온")
})






