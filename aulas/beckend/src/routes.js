const express = require('express');
const SessionController = require('./controllers/SessionController');
const SpotController = require('./controllers/SpotController');
const multter = require('multer');
const DashboardController = require('./controllers/DashboardController');
const uploadConfig = require('./config/upload');
const BookingController = require('./controllers/BookingController');

const upload = multter(uploadConfig);
const routes = express.Router();

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'), SpotController.store);
routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings', BookingController.store);

module.exports = routes;