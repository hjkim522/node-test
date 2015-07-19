var passport = require('passport'),
	url = require('url'),
	FacebookStrategy = require('passport-facebook').Strategy,
	config = require('../config'),
	auth = require('../../app/controllers/auth.server.controller');

module.exports = function() {
	passport.use(new FacebookStrategy({
		clientID: config.oauth.facebook.clientID,
		clientSecret: config.oauth.facebook.clientSecret,
		callbackURL: config.oauth.facebook.callbackURL,
		passReqToCallback: true
	},
	function(req, accessToken, refreshToken, profile, done) {
		var providerData = profile._json;
		providerData.accessToken = accessToken;
		providerData.refreshToken = refreshToken;

		console.log(profile);

		var providerUserProfile = {
			firstName: profile.name.givenName,
			lastName: profile.name.familyName,
			fullName: profile.displayName,
			email: profile.emails[0].value,
			username: profile.username,
			provider: 'facebook',
			providerId: profile.id,
			providerData: providerData
		};

		auth.saveOAuthUserProfile(req, providerUserProfile, done);
	}));
};