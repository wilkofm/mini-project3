const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../dbConnect");

class Review extends Model {}

Review.init(
  {
    reviewId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5,
      },
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "reviews", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Review;
