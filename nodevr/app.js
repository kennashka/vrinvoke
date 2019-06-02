var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fs = require('fs')
var cookieParser = require('cookie-parser');
//const exphbs = require('express-handlebars');

// set the view engine to hbs
//app.engine('handlebars', exphbs());
app.set('view engine', 'ejs');


// use res.render to load up an ejs view file
app.use( express.static( "public" ) );



// index page
app.get('/', function(req, res) {
    res.render('page/index');
});

app.get('/formData', function(req, res){
  res.render('page/formData');
});

app.get('/libraries', function(req, res){
  res.render('page/libraries');
});



// set up BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());



/* This works

 app.post('/formData', function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    console.log("POST FORM BODY", req.body.username);
      res.send('<textarea>Hello </textarea> ' +username);

 
});
*/



app.post('/formData', function(req, res){
 var myTxtArea = req.body.myTxtArea;

// var password = req.body.password;

 res.render('page/formData', {
    myTxtArea: req.body.myTxtArea,
  //  password:  req.body.password
 });
 // res.send(from+ "," + to); //This works fine ! but without rendering 
});


/*

app.post('/formData', (req, res) => {
  const output = `

      <textarea>Name: ${req.body.username}</textarea>

  `;
  
res.render('page/formData', {msg:'Email has been sent'});
});
router.post('/register',function(req,resp){

    var name= req.body.name;
    var username= req.body.username;
    var email= req.body.email;
    var password= req.body.password;
    var password2= req.body.password2;
    resp.render('register');

    }); */



app.listen(3000, function () {
  console.log('App listening on port 3000!');
});

