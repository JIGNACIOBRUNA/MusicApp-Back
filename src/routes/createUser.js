const { Router } = require("express");
const { createUser } = require("../controllers/createUserController");
const router = Router();

router.post("/create", createUser);

module.exports = router;