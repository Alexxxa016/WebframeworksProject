/* GET 'home' page */
const request = require('request');
const apiOptions = {
server : 'http://localhost:3000'
};
if (process.env.NODE_ENV === 'production') {
apiOptions.server = 'https://helloexpressalex.onrender.com';
}




const _renderHomepage = function(req, res, responseBody){
  res.render('f1-data', {
    title: 'Formula 1 Stats',
    pageHeader: {
      title: 'Formula1',
      strapline: 'Drivers of 2023!'
    },
    sidebar: "Check out the top drivers and their points on the leader board!!",
    drivers: responseBody.drivers  
  });
};



const f1data = function(req, res){
const path = '/api/locations';
const requestOptions = {
url : apiOptions.server + path,
method : 'GET',
json : {},
qs : {
lng : -0.9690884,
lat : 51.455041,
maxDistance : 20
}
};
request(requestOptions, (err, response, body) => {
_renderHomepage(req, res, body);
}
);
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
