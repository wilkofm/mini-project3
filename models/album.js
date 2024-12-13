const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../dbConnect");

class Album extends Model {}

Album.init(
  {
    albumId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    albumTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: true,
        min: 1900,
        max: new Date().getFullYear(),
      },
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "albums", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Album;
