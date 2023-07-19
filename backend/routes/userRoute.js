const express = require("express");
const router = express.Router();
const {getAllUsrs} = require("../controllers/userController");;

//Get all Users
router.get("/:id", getAllUsers)

//Get Single User
router.get("/users", singleUsers);

//Update a User
router.put("/:id", updateUsers)

//User status User
router.get("/users", userStatus);

//Delete a User
router.delete("/:id", deleteUsers)


module.exports = router;