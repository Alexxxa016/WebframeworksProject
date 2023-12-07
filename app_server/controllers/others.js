/* GET home page */
const mongoose = require('mongoose');
const userRegistration = require('../../app_api/models/login');

const login = function(req, res){
  res.render('login', {

  });
};


const logInData = function(req, res){
  userRegistration.findOne({$and :[{UserName:req.body.username} ,
    {Password:req.body.password}  ]
    }).then((user)=>{
      if(user){
        res.redirect('/f1Data');
      }
      else{
        res.redirect('/login');
      }
    })
};



const userRegistrationInfo = function(req, res){
  const registration = new userRegistration({
    UserName: req.body.username,
    Password: req.body.password,
    Email:req.body.email
  });
  registration.save()
    .then(registerdUser => {
         res.redirect('/login');
    })
    .catch(error => {
      console.error('Error saving login:', error);
    });
};


module.exports = {
  login,
  logInData,
  userRegistrationInfo
};
