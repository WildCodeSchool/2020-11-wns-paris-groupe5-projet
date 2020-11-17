const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/testdb", {
    "auth": { "authSource": "admin" },
    "user": process.env.DB_USER,
    "pass": process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    autoIndex: true,
})
.then(()=> console.log('Connected to db'))
.catch((err)=> console.log('err', err))