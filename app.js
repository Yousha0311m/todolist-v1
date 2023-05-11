const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js")


const app = express();


const items = [];
const workItems = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("index",{listTitle: day })
});
app.post("/", function(req, res){
    
    const name = req.body.lits;

   if(name === "work" || name === "Work"){
    res.redirect("/work")
   }
   else if(name === "home" || name === "Home"){
    res.redirect("/home")
   }
});

const day = date.getDate(); 
app.get("/home", function(req, res){


    res.render("list", {listTitle: day, newListItems: items});

});

app.post("/home", function(req, res){

    const item =  req.body.NewItem;

    items.push(item); 
   res.redirect("/home");

   
});

app.get("/work", function(req, res){
  res.render("list",{listTitle: "Work List", newListItems: workItems})
});
app.post("/work", function(req, res){
    const item = req.body.NewItem;
    workItems.push(item);
    res.redirect("/work");
});
app.get("/about", function(req, res){
    res.render("about")
})
app.listen(3000, function(){
    console.log("Server is up on port 3000");
})