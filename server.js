const express = require("express");
const routes = require("./controllers/index")


appendFile.use(express.static("public"));
appendFile.use(routes);