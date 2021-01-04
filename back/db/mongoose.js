const mongoose = require('mongoose');

console.log("process.env.MONGODB_URL", process.env.MONGODB_URL)
mongoose.connect("mongodb://mongodb:27017/Runschool", {
    // "auth":process.env.DB_USER ? { "authSource": "admin" }: "",
    // "user": process.env.DB_USER,
    // "pass": process.env.DB_PASS,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    autoIndex: true,
})
.then(()=> console.log('Connected to db'))
.catch((err)=> console.log('err', err))