const express = require("express");
const artistRouter = express.Router();
const Controllers = require("../controllers");
// matches GET requests sent to /api/users

// (the prefix from server.js)
artistRouter.get("/", (req, res) => {
  Controllers.artistController.getArtists(res);
});

// matches POST requests sent to /api/users/create
artistRouter.post("/create", (req, res) => {
  Controllers.artistController.createArtist(req.body, res);
});

// matches PUT requests to /api/users/123 (stores 123 in id param)
artistRouter.put("/:id", (req, res) => {
  Controllers.artistController.updateArtist(req, res);
});

// matches DELETE requests to /api/users/123 (123 in id param)
artistRouter.delete("/:id", (req, res) => {
  Controllers.artistController.deleteArtist(req, res);
});

module.exports = artistRouter;
