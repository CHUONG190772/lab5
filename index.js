// khai bao module  express framework
const express = require("express");
const app = express();
// khai bao module path => de set duong dan thu muc chua view
const path = require("path");

//khai bao port
const port = process.env.PORT || 5000;
app.set("views", path.join(__dirname, "views") );
//set view engine ( template engine)
// => giup go code cua back-end ngay trong front-end
// hbs : handle bar=> neu thay doi view engine khac thi thay doi gia tri nay 
app.set("view engine", "hbs");

app.get("/", (req,res)=>{
    var name = "Cloud computing";
    var code = 1644;
    var semester = "Fall 2022";
    // pass tu back-end sang front-end
    //cu phap : name (data): value(date)
    // gui value va nhan voi ten la name
    res.render("index", {name: name, code: code, semester: semester});
    //  res.render("index", {name:"Cloud computing", code: 1644 , semester: "Fall 2022"}
});

app.get("/mobile", (req,res)=>{
    var list = ["iPhone", "Samsung", "Oppo", "LG"];
    res.render("mobile", {mobiles: list});
});
app.get("/laptop", (req,res)=>{
    var list = ["Dell", "HP", "Sonny", "Accer"];
    res.render("laptop", {laptops: list });
});

//listen port de chay server
app.listen(port);


