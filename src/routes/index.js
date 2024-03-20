// const express = require('express');
// const router = express.Router();
const { Router } = require("express");

const loginRoute = require("./login");
const createUser = require("./createUser");

const router = Router();

router.use("/users", createUser);
router.use("/login", loginRoute);


module.exports = router;  