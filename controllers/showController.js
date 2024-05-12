// import the models 
const {Show, User} = require("../models/index");

const getShows = async (req, res) => {
    try {
        // use sequelize method to find all shows 
        const shows = await Show.findAll();
        if (shows) {
            res.status(200).send(shows);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getOneShow = async (req, res) => {
    try {
        // get show id 
        const showId = req.params.showId;
        // find show by id 
        const foundShow = await Show.findByPk(showId);
        if (foundShow) {
            res.status(200).send(foundShow);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getUsersOfShow = async (req, res) => {
    try {
        // get show id 
        const showId = req.params.showId;
        // find show by id 
        const foundShow = await Show.findByPk(showId);
        // get all the users who watched the show using seq mag method 
        const allUsers = await foundShow.getUsers();
        if (allUsers) {
            res.status(200).send(allUsers);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const updateShowAvailability = async (req, res) => {
    try {
        // get showId
        const showId = req.params.showId;
        // get the updated avilability of show 
        const updatedAvaliability = req.body.available;
        // update the show avilability
        let showAvailability = Show.findByPk(showId).available;
        showAvailability = updatedAvaliability;

        if (showAvailability) {
            res.status(200).send("Show availability has been updatedd");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const deleteShow = async (req, res) => {
    try {
        // get Show id 
        const showId = req.params.showId;
        // find show by id
        const foundShow = Show.findByPk(showId);
        // magic method delete show 
        const deletedShow = foundShow.destroy();
        if (deletedShow) {
            res.status(200).send("Show has been deleted from list");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

const getShowsByGenre = async (req, res) => {
    try {
        // get genre from req.query
        const genre = req.query.genre;
        // find all the shows with that genre 
        const showsByGenre = Show.findAll({where: {genre: genre}});
        if (showsByGenre) {
            res.status(200).send(showsByGenre);
        }
    } catch (error) {
        res.status(500).send(error);
    }
}


// export the functions 
module.exports = {
    getShows,
    getOneShow,
    getUsersOfShow,
    updateShowAvailability,
    deleteShow,
    getShowsByGenre
}