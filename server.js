const express = require("express");
const app = express();
const PORT = 3000;

// import the routes
const userRoutes = require("./routes/userRoutes");
//-------------MIDDLEWARE----------------------//
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//---------------ROUTES-----------------------//
// use the routes
app.use("api/users", userRoutes);
// Start the server 
app.listen(PORT, () => {
    console.log(`Our server is listening on port ${PORT}`);
}); 