// import the models 
const {User, Show} = require("../models/index");

const getUsers = async (req, res) => {
    try {
        // use sequelize method to find all users 
        const users = await User.findAll();
        if (users) {
            res.status(200).send(users);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOneUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const foundUser = await User.findByPk(userId);
        if (userId) {
            res.status(200).send(foundUser);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getWatchedShows = async (res, req) => {
    try {
        const userId = req.params.userId;
        const foundUser = await User.findByPk(userId);
        const watchedShows = await foundUser.getShows();
        if (watchedShows) {
            res.status(200).send(watchedShows);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const addShowToWatchedList = async (req, res) => {
    try {
        // get userId
        const userId = req.params.userId;
        // get showId
        const showId = req.parmas.showId;
        // find the user
        const foundUser = await User.findByPk(userId);
        // find the show
        const foundShow = await Show.findByPk(showId);
        // use magic method to add show to user
        const showAdded = await foundUser.addShow(foundShow);
        if (showAdded) {
            res.status(200).send(`${foundShow} has been added to ${foundUser}'s watched list`);
        }
    } catch(error) {
        res.status(500).send(error);
    }
}
module.exports = {
    getUsers,
    getOneUser,
    getWatchedShows,
    addShowToWatchedList
};