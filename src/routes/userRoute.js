const { Router } = require("express");
const { createUser, updateUser, deleteUser } = require("../controllers/userController");
const router = Router();

router.post("/create", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;