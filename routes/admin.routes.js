const { Router } = require("express");
const {
    createRegularUser,
    createGuard,
    viewAllVisitors,
    checkVisitLogs,
    getAllUsers
} = require("../controllers/admin.controllers.js");

const router = Router();

// In a real app, these routes would be protected and only accessible by admins
router.route("/create-user").post(createRegularUser);
router.route("/create-guard").post(createGuard);
router.route("/visitors").get(viewAllVisitors);
router.route("/logs").get(checkVisitLogs);
router.route("/getusers").get(getAllUsers)
module.exports = router;
