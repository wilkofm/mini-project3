"use strict";
const Models = require("../models");

// finds all artists
const getArtists = (res) => {
  Models.Artist.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// creates artist
const createArtist = (data, res) => {
  Models.Artist.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// updates artist
const updateArtist = (req, res) => {
  Models.Artist.update(req.body, {
    where: { ArtistId: req.params.id },
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

// deletes artist
const deleteArtist = (req, res) => {
  Models.Artist.destroy({ where: { ArtistId: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//joins artist
const getArtistWithDetails = (req, res) => {
  Models.Artist.findAll({
    include: [
      {
        model: Models.Album, //joins with Review
        attributes: ["albumTitle", "year", "genre"],
        include: [
          {
            model: Models.Review,
            attributes: ["rating", "review"],
          },
        ],
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

module.exports = {
  getArtists,
  createArtist,
  updateArtist,
  deleteArtist,
  getArtistWithDetails,
};
