import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var head = "Enter your name" ;

app.get("/", (req, res) => {
  res.render("index.ejs", {
    heading: head

  });
});

app.post("/submit", (req, res) => {
   var fullName = req.body.fName + req.body.lName;
   var nameLength = fullName.length;
   head = `There are ${nameLength} letter in your name.`; 
   res.render("index.ejs", {    heading: head });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
