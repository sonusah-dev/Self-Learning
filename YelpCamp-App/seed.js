// DEPENDENCIES FOR OUR APP
const mongoose = require("mongoose"),
  Campground = require("./models/Campground"),
  Comment = require("./models/Comment");

const data = [
  {
    name: "Himalaya",
    image: "https://www.mensjournal.com/wp-content/uploads/2015/02/shutterstock_242371765.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Glaciers",
    image:
      "https://res.cloudinary.com/simpleview/image/upload/v1584361003/clients/poconos/Campgrounds_Exterior_Keen_Lake_1_PoconoMtns_d606c492-eb33-450d-a725-e173b70c6cb8.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Ladakh",
    image: "https://www.deadwood.com/wp/wp-content/uploads/2017/08/1.3_Campgrounds.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Hilly Hilly",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2016/01/Julie-Rivenbark-on-Trolltunga-1163x775.jpg.optimal.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Glaciers",
    image:
      "https://www.dukenepal.com/wp-content/uploads/2019/11/nature-landscape-mountain-mountains.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Ladakh",
    image:
      "https://wallup.net/wp-content/uploads/2016/01/36052-nature-sunset-landscape-camping.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Himalaya",
    image: "https://assets.bedful.com/images/a50dcfca2c58acf727ed04edded9033e03acfbba/large.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Hilly Hilly",
    image:
      "https://www.yellowstonepark.com/.image/t_share/MTcwMDQ4NjM4Njk1Nzc3ODY1/thermopolis-hotspringsstatepark_courtesy_940.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Ladakh",
    image: "https://www.deadwood.com/wp/wp-content/uploads/2017/08/1.3_Campgrounds.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Hilly Hilly",
    image:
      "https://s27363.pcdn.co/wp-content/uploads/2016/01/Julie-Rivenbark-on-Trolltunga-1163x775.jpg.optimal.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Glaciers",
    image:
      "https://www.dukenepal.com/wp-content/uploads/2019/11/nature-landscape-mountain-mountains.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
  {
    name: "Ladakh",
    image:
      "https://wallup.net/wp-content/uploads/2016/01/36052-nature-sunset-landscape-camping.jpg",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.",
  },
];

function seedDb() {
  Campground.deleteMany({}, (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Removed Campgrounds");
    // ADD SOME NEW CAMPGROUNDS
    data.forEach((seed) => {
      Campground.create(seed, (error, foundCampground) => {
        if (error) {
          console.log(error);
        } else {
          console.log("Added Campground");
          Comment.create(
            {
              text: "Today is bla bla bla bla",
              author: "SONU"
            },
            (error, newComment) => {
              if (error) {
                console.log(error);
              } else {
                foundCampground.comments.push(newComment);
                foundCampground.save();
                console.log("Created new comment");
              }
            }
          );
        }
      });
    });
  });
}

module.exports = seedDb;
