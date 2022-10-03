//require express module
const express = require('express');
const controller = require('../controllers/storyController');

//create router object
const router = express.Router();

//create routes 

//GET /stories: send all stories to the user
// if /stories here it will be /stories/stories which is an error so must be /
router.get('/', controller.index);

//GET /stories/new: send form for creating a new story
router.get('/new', controller.new);

//POST /stories: create a new story
router.post('/', controller.create);

//GET /stories/:id: send details of story identified by id
router.get('/:id', controller.show);

//GET /stories/:id/edit: send html form for editing an existing story
router.get('/:id/edit', controller.edit);

//PUT /stories/:id: update the story identified by id
router.put('/:id', controller.update);

//DELETE /stories/;id, delete the story identified by id
router.delete('/:id', controller.delete);

//export the router object
module.exports = router;