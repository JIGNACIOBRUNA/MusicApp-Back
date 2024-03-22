const { Router } = require("express");

const loginRoute = require("./loginRoute");
const userRoute = require("./userRoute");

const router = Router();

router.use("/users", userRoute);
router.use("/login", loginRoute);


module.exports = router;  