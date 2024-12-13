const express = require("express");
const albumRouter = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users

// (the prefix from server.js)
albumRouter.get("/", (req, res) => {
  Controllers.albumController.getAlbums(res);
});

// matches POST requests sent to /api/users/create
albumRouter.post("/create", (req, res) => {
  Controllers.albumController.createAlbum(req.body, res);
});

// matches PUT requests to /api/users/123
albumRouter.put("/:id", (req, res) => {
  Controllers.albumController.updateAlbum(req, res);
});

// matches DELETE requests to /api/users/123
albumRouter.delete("/:id", (req, res) => {
  Controllers.albumController.deleteAlbum(req, res);
});

//Join requests
albumRouter.get("/details", (req, res) => {
  Controllers.albumController.getAlbumWithDetails(req, res);
});

//Transacation requests
albumRouter.post("/createWithReviews", (req, res) => {
  Controllers.albumController.createAlbumWithReviews(req, res);
});

module.exports = albumRouter;
