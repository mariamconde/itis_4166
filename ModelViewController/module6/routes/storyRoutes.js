//require express module
const express = require('express');

//create router object
const router = express.Router();

//create routes 

//GET /stories: send all stories to the user
// if /stories here it will be /stories/stories which is an error so must be /
router.get('/', (req, res) => {
    res.send('send all stories');
});

//GET /stories/new: send form for creating a new story
router.get('/new', (req, res) => {
    res.send('send the new form');
});

//POST /stories: create a new story
router.post('/', (req, res) => {
    res.send('Created a new story');
});

//GET /stories/:id: send details of story identified by id
router.get('/:id', (req, res) => {
    res.send('send story with id ' + req.params.id);
});

//GET /stories/:id/edit: send html form for editing an existing story
router.get('/:id/edit', (req, res) => {
    res.send('send the edit form');
});

//PUT /stories/:id: update the story identified by id
router.put('/:id', (req, res) => {
    res.send('update story with id' + req.params.id);
});

//DELETE /stories/;id, delete the story identified by id
router.delete('/:id', (req, res) => {
    res.send('delete story with id' + req.params.id);
});

//export the router object
module.exports = router;