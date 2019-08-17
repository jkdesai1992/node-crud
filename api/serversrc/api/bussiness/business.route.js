const express = require('express');
const router = express.Router();

// Require controller modules.
const businessController = require('./business.controller');

router.get('/', businessController.getBusinessList);
router.post('/add', businessController.postBusiness);
router.put('/update/:businessId', businessController.editBusiness);
router.delete('/delete/:businessId', businessController.deleteBusiness);

module.exports = router;