const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/appointments", userController.addAppointment);
router.delete("/appointments", userController.deleteAppointment);
router.get("/appointments/:userId", userController.getAppointments);
router.get("/appointments", userController.getAllAppointments);

module.exports = router;
