const model = require('../models/story');

exports.index = (req, res) => {
    //res.send('send all stories');
    //res.send(model.find());
    let stories = model.find();
    res.render('./story/index', { stories });
};


exports.new = (req, res) => {
    //res.send('send the new form');
    res.render('./story/new');
};


exports.create = (req, res) => {
    //res.send('Created a new story');
    let story = req.body;
    model.save(story);
    res.redirect('/stories');
};


exports.show = (req, res) => {
    let id = req.params.id;
    let story = model.findById(id);
    if (story) {
        res.render('./story/show', { story });
    } else {
        res.status(404).send('Cannot find story with id ' + id);
    }
};


exports.edit = (req, res) => {
    let id = req.params.id;
    let story = model.findById(id);
    if (story) {
        res.render('./story/edit', { story });
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
};

exports.update = (req, res) => {
    //res.send('update story with id' + req.params.id);
    let story = req.body;
    let id = req.params.id;

    if (model.updateById(id, story)) {
        res.redirect('/stories/' + id);

    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
};


exports.delete = (req, res) => {
    let id = req.params.id;
    if (model.deleteById(id)) {
        res.redirect('/stories');
    } else {
        let err = new Error('Cannot find a story with id ' + id);
        err.status = 404;
        next(err);
    }
};
