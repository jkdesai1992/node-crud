const express = require('express');
const businessRoutes = require('./bussiness/business.route');
const userRoutes = require('./user/user.route');

// import {apiErrorHandler} from "./modules/errorHandler"

const restRouter = express.Router();

// The authorization routes go here Api Routs
restRouter.use("/business", businessRoutes)
restRouter.use("/user", userRoutes)

// restRouter.use(apiErrorHandler)

module.exports = restRouter;