const express = require("express");
const Router = express.Router();

// import the controllers 
const {getShows, getOneShow, getUsersOfShow, updateShowAvailability, deleteShow, getShowsByGenre} = require("../controllers/showController");

Router.get("/", getShows);
Router.get("/:showId", getOneShow);
Router.get("/:showId", getUsersOfShow);
Router.put("/:showId", updateShowAvailability);
Router.delete("/:showId", deleteShow);
Router.get("/", getShowsByGenre);

// export the Router
module.exports = Router;