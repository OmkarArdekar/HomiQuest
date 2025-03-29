//Index Page - Filter Options Logic
let taxSwitch = document.getElementById("flexSwitchCheckDefault");
taxSwitch.addEventListener("click", () => {
  let taxInfo = document.getElementsByClassName("tax-info");
  for (info of taxInfo) {
    if (info.style.display != "inline") {
      info.style.display = "inline";
    } else {
      info.style.display = "none";
    }
  }
});

document.querySelectorAll(".filter").forEach((filter) => {
  filter.addEventListener("click", () => {
    const filterName = filter.getAttribute("data-category");
    // console.log(filterName);
    const toggleBtn = document.querySelector("#flexSwitchCheckDefault");
    let value;
    if (toggleBtn.checked) {
      value = "inline";
    } else {
      value = "none";
    }
    // console.log(value);

    fetch(`/listings/search/category/${filterName}`)
      .then((response) => response.json())
      .then((data) => {
        const listingsContainer = document.getElementById("listings-container");
        listingsContainer.innerHTML = ""; // Clear old listings

        if (data.length === 0) {
          listingsContainer.innerHTML =
            "<h5>No listings found for this category.</h5>";
          return;
        }

        data.forEach((listing) => {
          listingsContainer.innerHTML += `
              <a href="/listings/${listing._id}" class="listing-link">
                <div class="card col listing-card">
                  <img src="${
                    listing.image.url
                  }" class="card-img-top" alt="listing_image" style="height: 20rem" />
                  <div class="card-img-overlay"></div>
                  <div class="card-body">
                    <p class="card-text">
                      <b>${listing.title}</b> <br />
                      &#8377; ${listing.price.toLocaleString("en-IN")} / night
                      <i class="tax-info" style="display: ${value};"> &nbsp; +18% GST &nbsp; = &nbsp; &#8377; ${(
            listing.price +
            listing.price * 0.18
          ).toLocaleString("en-IN")} / night</i>
                    </p>
                  </div>
                </div>
              </a>
            `;
        });

        document.querySelector(".filter-btn").click();
      })
      .catch((error) => console.error("Error fetching data:", error));
  });
});
