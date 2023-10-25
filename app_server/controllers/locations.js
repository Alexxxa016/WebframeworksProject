/* GET 'home' page */
const f1data = function(req, res){
  res.render('f1-data', {
    title: 'Formula 1 Stats',
    pageHeader: {
      title: 'Formula1',
      strapline: 'Drivers of 2023!'
    },
    sidebar: "Check out the top drivers and their points on the leader board!!",
    drivers: [{
        Driver: 'Lewis Hamiltion',
        Number: 44,
        Points: 201,
        Country: 'England',
        Team: 'Mercedes'
    }, {
        Driver: 'Max Verstappen',
        Number: 1,
        Points: 466,
        Country: 'Netherland',
        Team: 'Redbull'
    }, {
        Driver: 'Charles Leclerc',
        Number: 16,
        Points: 151,
        Country: 'Monaco',
        Team: 'Ferrari'
    }]
  });
};

/* GET 'Register' page */
const registerPage = function(req, res){
  res.render('register', {
    title: 'Register',
    pageHeader: {
      title: 'Register'
    }
  });
};


module.exports = {
  f1data,
  registerPage,
};
