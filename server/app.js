let express = require('express');
let app = express();
const sequelize = require("./db");

let journal = require("./controllers/journalcontroller")
let user = require('./controllers/usercontroller');

sequelize.sync();
//sequilize.sync({force: true});

// *****ADD LINE BELOW
app.use(express.json());

app.use('/journal', journal);
app.use('/user', user);

app.listen(3000, function(){
  console.log('App is listening on port 3000');
})

//app.use("/test", function (req, res) {
 // res.send("This is a message from the test endpoint on the serever!");
//});

//app.use("/telma", function(req, res){
  //res.send("My name is Telma and I'm 48 years old.");
//});

// Have endpoint of journal/ practice
// send a response from that endpoint (This is a practice route)
//app.use('/journal', require('./controlers/journalcontroller') ) Long way example. Instead, for cleaner code:

