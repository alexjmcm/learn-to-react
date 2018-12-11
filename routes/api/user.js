const router = require("express").Router();
const UserController = require("../../controllers/User");
const AuthController = require("../../controllers/auth/AuthController")
// Matches with "/api/books"
router.route("/")
  .get(UserController.findAll)
  .post(UserController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(UserController.findById)
  .put(UserController.update)
  .delete(UserController.remove);

  router
  .route("/Register")
  .post(AuthController.Register);

  router.route("/Me").get(AuthController.Me);
  router.route("/Login").post(AuthController.Login);
router.route("/Logout").get(AuthController.Logout)

module.exports = router;
