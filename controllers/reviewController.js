"use strict";
const Models = require("../models");

// finds reviews
const getReviews = (res) => {
  Models.Review.findAll({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// creates review
const createReview = (data, res) => {
  Models.Review.create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// updates review
const updateReview = (req, res) => {
  Models.Review.update(req.body, {
    where: { ReviewId: req.params.id },
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

// deletes review
const deleteReview = (req, res) => {
  Models.Review.destroy({ where: { ReviewId: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//joins Reviews
const getReviewsWithDetails = (req, res) => {
  Models.Review.findAll({
    include: [
      {
        model: Models.Album, //joins with album
        attributes: ["albumTitle", "year", "genre"],
      },
      {
        model: Models.User,
        attributes: ["userName", "emailId"],
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
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  getReviewsWithDetails,
};
