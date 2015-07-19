var oauth = require('./oauth');
module.exports = {
	db: 'mongodb://localhost/mean',
	sessionSecret: 'developmentSessionSecret',
	oauth: oauth
};