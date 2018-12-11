const router = require("express").Router();
const UserRoutes = require("./user");

// Book routes
router.use("/user", UserRoutes);

module.exports = router;
