var express = require("express");
const app = express();
const bodyparser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

const labRegister = [];
 
// ************** All Calling Htmls forms *******************
const idnum = Math.floor(Math.random()*100000)+1;
const AppointIdNum = Math.floor(Math.random()*100000000)+1;
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
app.get("/register", function (req, res) {
    res.sendFile(__dirname + "/register.html");
});
app.get("/About.html", function (req, res) {
    res.sendFile(__dirname + "/About.html");
});
app.get("/appoint.html", function (req, res) {
    res.sendFile(__dirname + "/appoint.html");
});
app.get("/login.html", function (req, res) {
    res.sendFile(__dirname + "/login.html");
});
app.get("/Payment.html", function (req, res) {
    res.sendFile(__dirname + "/Payment.html");
});
app.get("/Payment2.html", function (req, res) {
    res.sendFile(__dirname + "/Payment2.html");
});
app.get("/Doctors.html", function (req, res) {
    res.sendFile(__dirname + "/Doctors.html");
});
app.get("/registersucceful",function (req, res) {
    res.render("registersucceful", {
        lRegister : labRegister
    });
});

// ************************************************************

app.post("/register", function (req, res) {
    const object1 = {
        pname : req.body.pName,
        page : req.body.pAge,
        pcontact : req.body.pContact,
        pdate : req.body.Date,
        ptest : req.body.TestName,
        opy : req.body.Optional
    };
    res.render("registersucceful", {
        PNAME : object1.pname,
        PAGE  : object1.page,
        PCON : object1.pcontact,
        PDATE : object1.pdate,
        PTEST : object1.ptest,
        POPT : object1.opy,
        PID : idnum
    });
});

// ****************************************************************
app.post("/appoint", function (req, res) {
    const Appoint1 = {
        aCMed : req.body.ACmed,
        aName : req.body.Aname,
        aEmail : req.body.Aemail,
        aPhone : req.body.Aphone,
        aDate : req.body.Adate,
        aDoct : req.body.Adoct,
        aOpt : req.body.Aopt
    };
    res.render("appointsuccessful", {
        ACM : Appoint1.aCMed,
        AN  : Appoint1.aName,
        AEM : Appoint1.aEmail,
        APh : Appoint1.aPhone,
        AD : Appoint1.aDate,
        ADct : Appoint1.aDoct,
        AOpt : Appoint1.aOpt,
        AID : AppointIdNum
    });
});
// ****************************************************************
app.listen(3000, function () {
    console.log("Server strated at server 3000.");
});


// res.redirect("/registersucceful");
// lRegister : labRegister
// labRegister.push(objects);
    
