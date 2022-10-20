const { register } = require("../controllers/usersController");

const router = require("express").Router();

router.post("/register",register);

module.exports = router;