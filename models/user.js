const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../dbConnect");

class User extends Model {}

User.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    gender: {
      type: DataTypes.CHAR(1),
      allowNull: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize,
    modelName: "users", // uselowercase plural format
    timestamps: true,
    freezeTableName: true,
  }
);

module.exports = User;
