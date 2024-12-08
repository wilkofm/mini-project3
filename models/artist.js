const { DataTypes, Model } = require("sequelize");
let dbConnect = require("../dbConnect");
const sequelizeInstance = dbConnect.Sequelize;

class Artist extends Model {}

Artist.init(
  {
    artistId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    artistImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
    artistBio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeInstance,
    modelName: "artists", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = Artist;
