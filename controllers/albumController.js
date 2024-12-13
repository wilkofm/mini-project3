"use strict";
const Models = require("../models");

// finds all albums
const getAlbums = (res) => {
  Models.Album.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// create new album
const createAlbum = (data, res) => {
  Models.Album.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// update album
const updateAlbum = (req, res) => {
  Models.Album.update(req.body, {
    where: { AlbumId: req.params.id },
    returning: true,
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes album
const deleteAlbum = (req, res) => {
  Models.Album.destroy({ where: { AlbumId: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//joins album
const getAlbumWithDetails = (req, res) => {
  Models.Album.findAll({
    include: [
      {
        model: Models.Artist, //joins with Review
        attributes: ["artistName", "artistImage", "artistBio"],
      },
      {
        model: Models.Review,
        attributes: ["rating", "review"],
      },
    ],
  })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//transaction management

const { sequelizeInstance } = require("../dbConnect");

const createAlbumWithReviews = async (req, res) => {
  const transaction = await sequelizeInstance.transaction();
  try {
    const { albumData, reviewsData } = req.body;

    const newAlbum = await Models.Album.create(albumData, { transaction });

    for (const review of reviewsData) {
      await Models.Review.create(
        { ...review, albumId: newAlbum.albumId },
        { transaction }
      );
    }

    await transaction.commit();
    res
      .status(201)
      .json({ message: "Album and review created", album: newAlbum });
  } catch (err) {
    await transaction.rollback();
    console.error("Transaction failed", err);
    res.status(500).json({ message: "Transaction failed", error: err.message });
  }
};

module.exports = {
  getAlbums,
  createAlbum,
  updateAlbum,
  deleteAlbum,
  getAlbumWithDetails,
  createAlbumWithReviews,
};
