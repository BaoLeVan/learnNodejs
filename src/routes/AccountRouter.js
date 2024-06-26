const accountController = require("../controller/AccountControler");
const  router = require("express").Router();


router.post("/register",accountController.registerAccount);
router.post("/login",accountController.loginAccount);

module.exports = router;
