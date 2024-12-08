const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

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
      validDate: {
        inInt: true,
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
    sequelize: sequelizeInstance,
    modelName: "albums", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Album;
