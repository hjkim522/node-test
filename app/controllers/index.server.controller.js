exports.render = function(req, res) {
	//res.send('Hello World');
	res.render('index', {
		title: 'Hello World'
	})
};
