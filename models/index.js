"use strict";
const Album = require("./album"); //require the model
const Artist = require("./artist"); //require the model
const Review = require("./review"); //require the model
const User = require("./user"); //require the model

Album.belongsTo(Artist, { foreignKey: "artistId" }); //an album belongs to an artist
Artist.hasMany(Album, { foreignKey: "artistId" }); //an artist can have many albums

Review.belongsTo(Album, { foreignKey: "albumId" }); //a review belongs to an album
Album.hasMany(Review, { foreignKey: "albumId" }); //an album can have many reviews

Review.belongsTo(User, { foreignKey: "userId" }); //a review belongs to a user
User.hasMany(Review, { foreignKey: "userId" }); //a user can leave many reviews

async function init() {
  await Album.sync();
  await Artist.sync();
  await Review.sync();
  await User.sync();
}

init();

module.exports = {
  Album,
  Artist,
  Review,
  User,
};
