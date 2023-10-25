const express = require('express');
const router = express.Router();
const ctrlPages = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* Locations pages */
router.get('/f1Data', ctrlPages.f1data);
router.get('/register', ctrlPages.registerPage);

/* Other pages */
router.get('/login', ctrlOthers.login);

module.exports = router;
