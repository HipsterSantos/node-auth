const express = require('express');
const app = express();
const path = require('path');
const config = require('config');

const port = process.env.PORT || 4000;

app.set(express.json());

app.use(express.urlencoded({extended:true}))
app.use(express.static('resouces'));

// app.use('/resources', express.static( path.join(__dirname,'resources') ));
//routes
app.post('/api/users',(req,res)=>{
    console.log(req.body)
    res.send(req.body.name);
})
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

console.log(__dirname )
app.listen(`${port}`,()=>{
    console.log(`Listening on port ${port} ...`)
})