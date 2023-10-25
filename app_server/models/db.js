const mongoose = require('mongoose');
require('./locations');
const dbURI = "mongodb+srv://alexabuchholz:Byniu1819@cluster0.amtgr4r.mongodb.net/?retryWrites=true&w=majority";

try {

mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}//require('./locations');
