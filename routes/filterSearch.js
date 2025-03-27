const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const searchController = require("../controllers/search.js");

router.get("/category", wrapAsync(searchController.search));

router.get(
  "/category/:filterName",
  wrapAsync(searchController.searchByFilterOptions)
);

module.exports = router;
