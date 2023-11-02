const router = require('express').Router();

const {homePage} = require('../controllers/pages-controllers');

router.route('/').get(homePage);

module.exports = router