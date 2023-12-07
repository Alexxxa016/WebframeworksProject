const express = require('express');
const router = express.Router();
const ctrlLocations = require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

// locations
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);

  router
    .route('/locations/:f1id')
    .get(ctrlLocations.locationsReadOne)
    .put(ctrlLocations.locationsUpdateOne)
    .delete(ctrlLocations.locationsDeleteOne);

  // login
  router
    .route('/locations/:f1id/others')
    .post(ctrlOthers.reviewsCreate);

  router
    .route('/locations/:f1id/others/:loginid')
    .get(ctrlOthers.reviewsReadOne)
    .put(ctrlOthers.reviewsUpdateOne)
    .delete(ctrlOthers.reviewsDeleteOne);

  module.exports = router;
