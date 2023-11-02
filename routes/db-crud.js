const router = require("express").Router();
const {postMethod, getMethod, deleteMethod} = require("../controllers/db-controller");

router.route('/').post(postMethod).get(getMethod);
router.route('/:id').delete(deleteMethod)

module.exports = router

//all routes are binded in router and then exported