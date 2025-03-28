const sampleListings = [
  {
    title: "Cozy Cabin in the Woods",
    description: "A peaceful getaway in the heart of nature.",
    image: {
      url: "https://example.com/image1.jpg",
      filename: "image1",
    },
    price: 120,
    location: "Aspen, Colorado",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a678",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.191],
    },
    category: "Mountains",
  },
  {
    title: "Luxury Beachfront Villa",
    description: "Wake up to the sound of waves in this beachfront paradise.",
    image: {
      url: "https://example.com/image2.jpg",
      filename: "image2",
    },
    price: 350,
    location: "Maui, Hawaii",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a679",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984],
    },
    category: "Trending",
  },
  {
    title: "Historic Castle Stay",
    description: "Experience royalty in this 18th-century castle.",
    image: {
      url: "https://example.com/image3.jpg",
      filename: "image3",
    },
    price: 500,
    location: "Edinburgh, Scotland",
    country: "UK",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a680",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: "Castles",
  },
  {
    title: "Glass Dome in the Arctic",
    description: "Sleep under the northern lights in a heated glass dome.",
    image: {
      url: "https://example.com/image4.jpg",
      filename: "image4",
    },
    price: 450,
    location: "Tromsø, Norway",
    country: "Norway",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a681",
    geometry: {
      type: "Point",
      coordinates: [18.9553, 69.6496],
    },
    category: "Arctic",
  },
  {
    title: "Treehouse with Amazing Views",
    description: "Stay high above the ground in a unique treehouse experience.",
    image: {
      url: "https://example.com/image5.jpg",
      filename: "image5",
    },
    price: 200,
    location: "Vancouver, Canada",
    country: "Canada",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a682",
    geometry: {
      type: "Point",
      coordinates: [-123.1216, 49.2827],
    },
    category: "Rooms",
  },
  {
    title: "Luxury Houseboat on Lake",
    description: "Enjoy a floating stay with all modern comforts.",
    image: {
      url: "https://example.com/image6.jpg",
      filename: "image6",
    },
    price: 300,
    location: "Srinagar, India",
    country: "India",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a683",
    geometry: {
      type: "Point",
      coordinates: [74.8384, 34.0837],
    },
    category: "Boats",
  },
  {
    title: "Secluded Mountain Retreat",
    description: "Perfect for adventurers and nature lovers.",
    image: {
      url: "https://example.com/image7.jpg",
      filename: "image7",
    },
    price: 180,
    location: "Banff, Canada",
    country: "Canada",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a684",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
    category: "Mountains",
  },
  {
    title: "Farm Stay with Organic Meals",
    description: "Experience farm life with fresh organic meals daily.",
    image: {
      url: "https://example.com/image8.jpg",
      filename: "image8",
    },
    price: 150,
    location: "Tuscany, Italy",
    country: "Italy",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a685",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    category: "Farms",
  },
  {
    title: "Modern Apartment in New York",
    description: "Stay in the heart of NYC with stunning skyline views.",
    image: {
      url: "https://example.com/image9.jpg",
      filename: "image9",
    },
    price: 400,
    location: "New York, USA",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a686",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    category: "Iconic Cities",
  },
  {
    title: "Desert Camping Experience",
    description: "Camp under the stars in the beautiful desert landscape.",
    image: {
      url: "https://example.com/image10.jpg",
      filename: "image10",
    },
    price: 100,
    location: "Dubai, UAE",
    country: "UAE",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a687",
    geometry: {
      type: "Point",
      coordinates: [55.2962, 25.2769],
    },
    category: "Camping",
  },
  {
    title: "Cozy Cabin in the Woods",
    description: "A peaceful getaway in the heart of nature.",
    image: {
      url: "https://example.com/image1.jpg",
      filename: "image1",
    },
    price: 120,
    location: "Aspen, Colorado",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a678",
    geometry: {
      type: "Point",
      coordinates: [-106.837, 39.191],
    },
    category: "Mountains",
  },
  {
    title: "Luxury Beachfront Villa",
    description: "Wake up to the sound of waves in this beachfront paradise.",
    image: {
      url: "https://example.com/image2.jpg",
      filename: "image2",
    },
    price: 350,
    location: "Maui, Hawaii",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a679",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984],
    },
    category: "Trending",
  },
  {
    title: "Historic Castle Stay",
    description: "Experience royalty in this 18th-century castle.",
    image: {
      url: "https://example.com/image3.jpg",
      filename: "image3",
    },
    price: 500,
    location: "Edinburgh, Scotland",
    country: "UK",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a680",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: "Castles",
  },
  {
    title: "Glass Dome in the Arctic",
    description: "Sleep under the northern lights in a heated glass dome.",
    image: {
      url: "https://example.com/image4.jpg",
      filename: "image4",
    },
    price: 450,
    location: "Tromsø, Norway",
    country: "Norway",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a681",
    geometry: {
      type: "Point",
      coordinates: [18.9553, 69.6496],
    },
    category: "Arctic",
  },
  {
    title: "Treehouse with Amazing Views",
    description: "Stay high above the ground in a unique treehouse experience.",
    image: {
      url: "https://example.com/image5.jpg",
      filename: "image5",
    },
    price: 200,
    location: "Vancouver, Canada",
    country: "Canada",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a682",
    geometry: {
      type: "Point",
      coordinates: [-123.1216, 49.2827],
    },
    category: "Rooms",
  },
  {
    title: "Luxury Houseboat on Lake",
    description: "Enjoy a floating stay with all modern comforts.",
    image: {
      url: "https://example.com/image6.jpg",
      filename: "image6",
    },
    price: 300,
    location: "Srinagar, India",
    country: "India",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a683",
    geometry: {
      type: "Point",
      coordinates: [74.8384, 34.0837],
    },
    category: "Boats",
  },
  {
    title: "Secluded Mountain Retreat",
    description: "Perfect for adventurers and nature lovers.",
    image: {
      url: "https://example.com/image7.jpg",
      filename: "image7",
    },
    price: 180,
    location: "Banff, Canada",
    country: "Canada",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a684",
    geometry: {
      type: "Point",
      coordinates: [-115.5708, 51.1784],
    },
    category: "Mountains",
  },
  {
    title: "Farm Stay with Organic Meals",
    description: "Experience farm life with fresh organic meals daily.",
    image: {
      url: "https://example.com/image8.jpg",
      filename: "image8",
    },
    price: 150,
    location: "Tuscany, Italy",
    country: "Italy",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a685",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    category: "Farms",
  },
  {
    title: "Modern Apartment in New York",
    description: "Stay in the heart of NYC with stunning skyline views.",
    image: {
      url: "https://example.com/image9.jpg",
      filename: "image9",
    },
    price: 400,
    location: "New York, USA",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a686",
    geometry: {
      type: "Point",
      coordinates: [-74.006, 40.7128],
    },
    category: "Iconic Cities",
  },
  {
    title: "Desert Camping Experience",
    description: "Camp under the stars in the beautiful desert landscape.",
    image: {
      url: "https://example.com/image10.jpg",
      filename: "image10",
    },
    price: 100,
    location: "Dubai, UAE",
    country: "UAE",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a687",
    geometry: {
      type: "Point",
      coordinates: [55.2962, 25.2769],
    },
    category: "Camping",
  },
  {
    title: "Skyline Penthouse with Rooftop Pool",
    description:
      "Luxury penthouse with a private rooftop pool and city skyline views.",
    image: {
      url: "https://example.com/image51.jpg",
      filename: "image51",
    },
    price: 750,
    location: "Dubai, UAE",
    country: "UAE",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a651",
    geometry: {
      type: "Point",
      coordinates: [55.2708, 25.2048],
    },
    category: "Amazing Pools",
  },
  {
    title: "Floating Water Villa",
    description:
      "Stay in a luxurious overwater bungalow with crystal-clear lagoon views.",
    image: {
      url: "https://example.com/image52.jpg",
      filename: "image52",
    },
    price: 950,
    location: "Maldives",
    country: "Maldives",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a652",
    geometry: {
      type: "Point",
      coordinates: [73.2207, 3.2028],
    },
    category: "Boats",
  },
  {
    title: "Secluded Forest Cabin",
    description:
      "Enjoy the peaceful surroundings in this cozy wooden cabin deep in the forest.",
    image: {
      url: "https://example.com/image53.jpg",
      filename: "image53",
    },
    price: 140,
    location: "Black Forest, Germany",
    country: "Germany",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a653",
    geometry: {
      type: "Point",
      coordinates: [8.2297, 48.2076],
    },
    category: "Mountains",
  },
  {
    title: "Underground Cave House",
    description:
      "A unique cave house with a modern interior and natural rock walls.",
    image: {
      url: "https://example.com/image54.jpg",
      filename: "image54",
    },
    price: 180,
    location: "Cappadocia, Turkey",
    country: "Turkey",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a654",
    geometry: {
      type: "Point",
      coordinates: [34.8493, 38.64],
    },
    category: "Trending",
  },
  {
    title: "Ski Chalet with Hot Tub",
    description:
      "A luxurious ski-in/ski-out chalet with a private hot tub and fireplace.",
    image: {
      url: "https://example.com/image55.jpg",
      filename: "image55",
    },
    price: 500,
    location: "Zermatt, Switzerland",
    country: "Switzerland",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a655",
    geometry: {
      type: "Point",
      coordinates: [7.7491, 46.0207],
    },
    category: "Mountains",
  },
  {
    title: "Glass Dome with 360° Views",
    description:
      "A futuristic glass dome offering breathtaking 360-degree views of nature.",
    image: {
      url: "https://example.com/image56.jpg",
      filename: "image56",
    },
    price: 380,
    location: "Iceland",
    country: "Iceland",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a656",
    geometry: {
      type: "Point",
      coordinates: [-19.0208, 64.1353],
    },
    category: "Domes",
  },
  {
    title: "Lakeside Wooden Cabin",
    description:
      "A rustic wooden cabin located by a peaceful lake, perfect for fishing and relaxation.",
    image: {
      url: "https://example.com/image57.jpg",
      filename: "image57",
    },
    price: 170,
    location: "Lake District, UK",
    country: "UK",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a657",
    geometry: {
      type: "Point",
      coordinates: [-3.0886, 54.4609],
    },
    category: "Rooms",
  },
  {
    title: "Private Island Retreat",
    description:
      "Experience complete privacy and luxury on a remote island paradise.",
    image: {
      url: "https://example.com/image58.jpg",
      filename: "image58",
    },
    price: 1500,
    location: "Bahamas",
    country: "Bahamas",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a658",
    geometry: {
      type: "Point",
      coordinates: [-77.3554, 25.0343],
    },
    category: "Trending",
  },
  {
    title: "Tropical Jungle Treehouse",
    description:
      "A treehouse hidden in the rainforest, surrounded by wildlife and waterfalls.",
    image: {
      url: "https://example.com/image59.jpg",
      filename: "image59",
    },
    price: 210,
    location: "Bali, Indonesia",
    country: "Indonesia",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a659",
    geometry: {
      type: "Point",
      coordinates: [115.1889, -8.4095],
    },
    category: "Rooms",
  },
  {
    title: "Historic Windmill Stay",
    description:
      "Stay in a beautifully restored windmill with modern comforts.",
    image: {
      url: "https://example.com/image60.jpg",
      filename: "image60",
    },
    price: 250,
    location: "Amsterdam, Netherlands",
    country: "Netherlands",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a660",
    geometry: {
      type: "Point",
      coordinates: [4.8952, 52.3702],
    },
    category: "Iconic Cities",
  },
  {
    title: "Luxury Beachfront Villa",
    description:
      "A stunning beachfront villa with direct access to white sandy beaches.",
    image: {
      url: "https://example.com/image61.jpg",
      filename: "image61",
    },
    price: 1200,
    location: "Maui, Hawaii",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a661",
    geometry: {
      type: "Point",
      coordinates: [-156.3319, 20.7984],
    },
    category: "Trending",
  },
  {
    title: "Cozy Mountain Cabin",
    description:
      "A warm and inviting cabin nestled in the heart of the Rocky Mountains.",
    image: {
      url: "https://example.com/image62.jpg",
      filename: "image62",
    },
    price: 180,
    location: "Aspen, Colorado",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a662",
    geometry: {
      type: "Point",
      coordinates: [-106.821, 39.1911],
    },
    category: "Mountains",
  },
  {
    title: "Charming English Cottage",
    description:
      "A picturesque cottage with a beautiful garden and countryside views.",
    image: {
      url: "https://example.com/image63.jpg",
      filename: "image63",
    },
    price: 220,
    location: "Cotswolds, UK",
    country: "UK",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a663",
    geometry: {
      type: "Point",
      coordinates: [-1.7803, 51.8229],
    },
    category: "Rooms",
  },
  {
    title: "Historic Castle Stay",
    description:
      "Live like royalty in this beautifully restored medieval castle.",
    image: {
      url: "https://example.com/image64.jpg",
      filename: "image64",
    },
    price: 450,
    location: "Edinburgh, Scotland",
    country: "Scotland",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a664",
    geometry: {
      type: "Point",
      coordinates: [-3.1883, 55.9533],
    },
    category: "Castles",
  },
  {
    title: "Glass Igloo with Northern Lights View",
    description:
      "Experience the Aurora Borealis from your cozy heated glass igloo.",
    image: {
      url: "https://example.com/image65.jpg",
      filename: "image65",
    },
    price: 380,
    location: "Lapland, Finland",
    country: "Finland",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a665",
    geometry: {
      type: "Point",
      coordinates: [25.7482, 67.8557],
    },
    category: "Arctic",
  },
  {
    title: "Safari Lodge in the Wild",
    description:
      "A luxurious safari lodge with close encounters with wildlife.",
    image: {
      url: "https://example.com/image66.jpg",
      filename: "image66",
    },
    price: 700,
    location: "Serengeti, Tanzania",
    country: "Tanzania",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a666",
    geometry: {
      type: "Point",
      coordinates: [34.8321, -2.154],
    },
    category: "Trending",
  },
  {
    title: "Treehouse Retreat in the Jungle",
    description: "Stay among the treetops in a handcrafted treehouse retreat.",
    image: {
      url: "https://example.com/image67.jpg",
      filename: "image67",
    },
    price: 210,
    location: "Amazon Rainforest, Brazil",
    country: "Brazil",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a667",
    geometry: {
      type: "Point",
      coordinates: [-60.0217, -3.4653],
    },
    category: "Rooms",
  },
  {
    title: "Boathouse on the Grand Canal",
    description: "A romantic stay in a floating boathouse in Venice.",
    image: {
      url: "https://example.com/image68.jpg",
      filename: "image68",
    },
    price: 320,
    location: "Venice, Italy",
    country: "Italy",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a668",
    geometry: {
      type: "Point",
      coordinates: [12.3155, 45.4408],
    },
    category: "Boats",
  },
  {
    title: "Alaskan Glacier Lodge",
    description:
      "A remote lodge with breathtaking views of glaciers and wildlife.",
    image: {
      url: "https://example.com/image69.jpg",
      filename: "image69",
    },
    price: 500,
    location: "Juneau, Alaska",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a669",
    geometry: {
      type: "Point",
      coordinates: [-134.4197, 58.3019],
    },
    category: "Arctic",
  },
  {
    title: "Dome Stay in the Desert",
    description:
      "A modern dome structure providing a unique desert experience.",
    image: {
      url: "https://example.com/image70.jpg",
      filename: "image70",
    },
    price: 275,
    location: "Wadi Rum, Jordan",
    country: "Jordan",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a670",
    geometry: {
      type: "Point",
      coordinates: [35.4211, 29.5764],
    },
    category: "Domes",
  },
  {
    title: "Private Vineyard Estate",
    description:
      "Stay in a luxurious villa on a private vineyard with wine tasting included.",
    image: {
      url: "https://example.com/image71.jpg",
      filename: "image71",
    },
    price: 600,
    location: "Tuscany, Italy",
    country: "Italy",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a671",
    geometry: {
      type: "Point",
      coordinates: [11.2558, 43.7696],
    },
    category: "Trending",
  },
  {
    title: "Historic Lighthouse Stay",
    description:
      "A beautifully restored lighthouse with panoramic ocean views.",
    image: {
      url: "https://example.com/image72.jpg",
      filename: "image72",
    },
    price: 350,
    location: "Cape Cod, USA",
    country: "USA",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a672",
    geometry: {
      type: "Point",
      coordinates: [-70.2023, 41.6688],
    },
    category: "Iconic Cities",
  },
  {
    title: "Hidden Jungle Bungalow",
    description:
      "A peaceful retreat deep in the lush jungles of Bali, perfect for relaxation.",
    image: {
      url: "https://example.com/image73.jpg",
      filename: "image73",
    },
    price: 190,
    location: "Ubud, Bali",
    country: "Indonesia",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a673",
    geometry: {
      type: "Point",
      coordinates: [115.2625, -8.5091],
    },
    category: "Trending",
  },
  {
    title: "Ice Hotel Suite",
    description:
      "A once-in-a-lifetime stay inside a beautifully crafted ice hotel.",
    image: {
      url: "https://example.com/image74.jpg",
      filename: "image74",
    },
    price: 450,
    location: "Jukkasjärvi, Sweden",
    country: "Sweden",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a674",
    geometry: {
      type: "Point",
      coordinates: [20.5933, 67.8506],
    },
    category: "Arctic",
  },
  {
    title: "Desert Oasis Camp",
    description:
      "A luxurious glamping experience under the stars in the Sahara Desert.",
    image: {
      url: "https://example.com/image75.jpg",
      filename: "image75",
    },
    price: 320,
    location: "Merzouga, Morocco",
    country: "Morocco",
    reviews: [],
    owner: "660d2b3e9d12f4a1b8e4a675",
    geometry: {
      type: "Point",
      coordinates: [-4.0121, 31.0802],
    },
    category: "Camping",
  },
];

console.log(sampleListings.length);
module.exports = { data: sampleListings };
