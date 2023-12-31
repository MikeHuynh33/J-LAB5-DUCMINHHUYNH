// Import essential libraries
const express = require("express");
const app = express();
const path = require("path");
// Enject pug
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");
// set Directory in public Folder
app.use(express.static(path.join(__dirname, "public")));
// Add Json convert or sanitize
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// set up .env

require("dotenv").config();
const {GetDocuments , GetPlaceMark} = require("./modules/libraryXML_handler");
app.get("/", async (req, res) => {
  let data = await GetPlaceMark();
  res.render("index", { title: "Home", data: data });
});
app.listen(process.env.port || 8080);
console.log("Running at Port 3000");
