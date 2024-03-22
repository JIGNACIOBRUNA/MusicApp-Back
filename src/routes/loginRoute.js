const router = require("express").Router();
const { login, logout } = require("../controllers/loginController");

router.get("/", login)
router.get("/logout", logout);

module.exports = router;