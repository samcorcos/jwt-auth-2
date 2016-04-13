const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');
const cors = require('cors');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	});
	app.get('/', requireAuth, function(req, res) {
		res.send({ hi: 'there'});
	});
	app.post('/signin', requireSignin, Authentication.signin);
	app.post('/signup', Authentication.signup);
	
};










