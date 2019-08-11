const express = require('express');
const multer = require('multer');
const uploadMulterConfig = require('./config/upload');

const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');

const routes = express.Router();
const upload = multer(uploadMulterConfig);

routes.delete('/posts/:id', PostController.remove);

routes.get('/posts', upload.single('image'), PostController.index);
routes.post('/posts', upload.single('image'), PostController.store);
routes.post('/posts/:id/like', LikeController.store);


module.exports = routes;