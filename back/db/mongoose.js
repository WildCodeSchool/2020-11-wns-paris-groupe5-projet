const mongoose = require("mongoose");
// save
// https://stackoverflow.com/questions/53509236/mongo-authentication-inside-docker/53509958

mongoose
  .connect(
    `mongodb+srv://runschool:${process.env.MONGODB_PASSWORD}@cluster0.rqdet.mongodb.net/runschool?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      autoIndex: true,
    }
  )
  .then(() => console.log("Connected to db"))
  .catch((err) => console.log("err", err));

// 124
