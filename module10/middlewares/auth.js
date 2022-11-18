//check if user is a guest
exports.isGuest = (req, res, next) => {
    if (!req.session.user) {
        return next();
    } else {
        req.flash('error', 'you are logged in already');
        return res.redirect('/users/profile');
    }
}

