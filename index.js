const express = require('express');
const app = express();
const path = require('path');
const config = require('config');
const port = process.env.PORT || 4000;
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const dbURI = 'mongodb://localhost/jwt-db';
const mongooseOption = {
    userNewUrlParser:true,
    useUnifiedTopology: true
}

const connection = mongoose.createConnection(dbURI,mongooseOption);

const sessionStorage = new MongoStore(
    mongooseConnection: connection ,
    collection: 'session'
)

app.use(session({
    secret: 'some secretkey',
    resave: false, 
    saveUninitialized:true,
    store:sessionStore,
    cookie: {
        maxAge: 1000 * 60 * 24 //equal 1 day (1day * 24hr/1day * 60min/1hr)
    }
}))

app.set(express.json());
app.use(express.urlencoded({extended:true}))
app.use(express.static('resouces'));

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