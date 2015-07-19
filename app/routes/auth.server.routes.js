var auth = require('../../app/controllers/auth.server.controller'),
	passport = require('passport');

module.exports = function(app) {
	app.route('/signup')
		.get(auth.renderSignup)
		.post(auth.signup);

	app.route('/signin')
		.get(auth.renderSignin)
		.post(passport.authenticate('local', {
			successRedirect: '/',
			failureRedirect: '/signin',
			failureFlash: true
		}));

	app.get('/signout', auth.signout);
};
