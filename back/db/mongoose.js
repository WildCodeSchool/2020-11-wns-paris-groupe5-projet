const mongoose = require("mongoose");
// save
// https://stackoverflow.com/questions/53509236/mongo-authentication-inside-docker/53509958

mongoose
  .connect(
    `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_URL}:27017/Runschool?authSource=admin`,
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
