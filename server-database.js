const mongoose = require("mongoose");
require("dotenv").config();

//Agregar base de datos mongo acá
mongoose
  .connect(
    process.env.MONGO_URI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

module.exports= mongoose;