const Listing = require("../models/listing");

module.exports.search = async (req, res) => {
  const { country } = req.query;

  let searchResults = [];
  if (country) {
    searchResults = await Listing.find({
      country: { $regex: new RegExp(country, "i") },
    });
  }

  if (searchResults.length == 0) {
    req.flash("error", "No result found!");
    return res.redirect("/listings");
  }

  return res.render("listings/index.ejs", { allListings: searchResults });
};

module.exports.searchByFilterOptions = async (req, res) => {
  const filterName = req.params.filterName;
  const filteredListings = await Listing.find({ category: filterName });
  // console.log(filteredListings);
  return res.json(filteredListings);
};
