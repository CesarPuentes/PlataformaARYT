"use strict";
var express = require("express");
var graphqlHTTP = require("express-graphql");
var schema = require("./schema/schema");
var mongoose = require("mongoose");
var cors = require("cors");
var app = express();
app.use(cors());
mongoose.connect("mongodb+srv://ARYTSAS:QzexhdlTdLo2sXy0@cluster0-ze9rt.azure.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(function () { return console.log("Mongodb connected"); })
    .catch(function (err) { return console.log(err); });
mongoose.connection.once("open", function () {
    console.log("Connected to mongo");
});
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true
}));
app.listen(4000, function () {
    console.log("Servidor se encuentra en: ", 4000);
});
