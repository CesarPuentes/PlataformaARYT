const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");


const app = express();
app.use(cors());


mongoose.connect(
  "mongodb+srv://ARYTSAS:QzexhdlTdLo2sXy0@cluster0-ze9rt.azure.mongodb.net/test?retryWrites=true&w=majority",
  { useNewUrlParser: true })
  .then(() => console.log("Mongodb connected"))
  .catch(err => console.log(err));

mongoose.connection.once("open", () => {
  console.log("Connected to mongo");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("Servidor se encuentra en: ", 4000);
});
