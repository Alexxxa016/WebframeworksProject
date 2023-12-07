const mongoose = require('mongoose');
const Driver = mongoose.model('Driver');

locationsCreate = function (req, res) {
  Driver.create({
    Driver: req.body.Driver,
    Number: req.body.Number,
    Points: req.body.Points,
    Country: req.body.Country,
    Team: req.body.Team,
  })
    .then((location) => {
      res.status(201).json(location);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
const locationsListByDistance = function (req, res) {

  Driver.find().then((allDrivers)=>{
if(allDrivers){
  const drivers={
    drivers:allDrivers
  }
  res.status(200).json(drivers);

}
else{
  res.status(400).json([]);
}
  })

 };

 const locationsReadOne = function (req, res) {
   if (req.params && req.params.f1id) {
     Drivers
       .findById(req.params.f1id)
       .then((location) => {
         if (!location) {
           res
             .status(404)
             .json({
               "message": "DriverID not found"
             });
           return;
         }
         res
           .status(200)
           .json(location);
       })
       .catch((err) => {
         res
           .status(500)
           .json(err);
       });
   } else {

     res
       .status(400)
       .json({
         "message": "No DriverID in request"
       });
   }
 };



const locationsUpdateOne = function (req, res) {

  res
.status(200)
.json({"status" : "success"});
};

const locationsDeleteOne = function (req, res) {

  res
.status(200)
.json({"status" : "success"});
};

module.exports = {
  locationsListByDistance,
  locationsCreate,
  locationsReadOne,
  locationsUpdateOne,
  locationsDeleteOne
};
