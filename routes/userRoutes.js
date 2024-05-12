const express = require("express");
const Router = express.Router();

// import controllers
const {getUsers, getOneUser, getWatchedShows, addShowToWatchedList} = require("../controllers/userController");

Router.get("/", getUsers);
Router.get("/:userId", getOneUser);
Router.get("/:userId/shows", getWatchedShows);
Router.put("/:userId/shows/:showId", addShowToWatchedList);

// export the router
module.exports = Router;