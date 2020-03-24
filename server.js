const { createServer } = require("http");
const compression = require("compression");
const morgan = require("morgan");
const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./backend/schema/schema");
const cors = require("cors");
var path = require("path");

const { mongoose } = require('./server-database')
const createWord = require("./serverOffice")


const normalizePort = port => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || 4000);

const relacionSchema = require('./backend/models/relacionSchema')


const app = express();
const dev = app.get("env") !== "production";

app.use(cors());

if (!dev) {
  app.disable("x-powered-by");
  app.use(compression());
  app.use(morgan("common"));

  app.use(express.static(path.resolve(__dirname, "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

if (dev) {
  app.use(morgan("dev"));
}

require("dotenv").config();


app.get('/doc/:id', async (req, res) =>{
  let testmongo = await relacionSchema.findById(req.params.id);
  createWord(testmongo);
  res.json(testmongo)
})


app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const port = process.env.PORT || 4000;
console.log(process.env.PORT);

const server = createServer(app);
server.listen(PORT, err => {
  if (err) throw err;

  console.log("Server started on: " + PORT);
});
