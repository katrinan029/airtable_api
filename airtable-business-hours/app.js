const base = require("airtable").base("appVwoybPzKlAVvbN");
const express = require("express");
const path = require("path");

const app = express();
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "."));

app.get("/", (req, res) => {
  (async () => {
    const records = await base("Business Hours")
      .select({
        view: "Grid view",
      })
      .firstPage()
    
    res.render("page", {
      records,
    })
  })();

});

app.listen(3000, () => console.log("Server ready"))

