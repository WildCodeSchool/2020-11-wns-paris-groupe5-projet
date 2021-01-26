import mongoose from "mongoose";
// save
// https://stackoverflow.com/questions/53509236/mongo-authentication-inside-docker/53509958

const start = async () => {
  console.log("process.env.JWT_KEY", process.env.JWT_KEY)
  console.log("process.env.MONGODB_PASSWORD", process.env.MONGODB_PASSWORD)
  if (!process.env.JWT_KEY || !process.env.MONGODB_PASSWORD) {
    throw new Error("JWT must be defined and MONGODB_PASSWORD ");
  }
  try {
    await mongoose.connect(
      `mongodb+srv://runschool:${process.env.MONGODB_PASSWORD}@cluster0.rqdet.mongodb.net/runschool?retryWrites=true&w=majority`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        autoIndex: true,
      }
    );
  
    console.log("Connected to db");
  } catch (err) {
    console.log("error to connect to db", err);
  }
  
};

export { start }


// 124
