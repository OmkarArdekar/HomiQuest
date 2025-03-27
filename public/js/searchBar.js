//Search placeholder animation
const placeholders = [
  "Search Destinations",
  "Search by Country",
  "Try 'India' or 'France'",
  "Find beautiful places worldwide",
  "Explore top-rated stays",
  "Discover new adventures",
  "Plan your next vacation",
  "Book your dream trip today",
  "Escape to nature",
];

let idx = 0;
const searchInput = document.getElementById("searchInput");

function changePlaceholder() {
  searchInput.setAttribute("placeholder", placeholders[idx]);
  idx = (idx + 1) % placeholders.length;
}

setInterval(changePlaceholder, 2500);
