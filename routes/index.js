const router = require("express").Router();

router.use(require("./workoutRoutes.js"));
router.use(require("./pagesRoutes.js"));

module.exports = router;