;(function () {

function callback(call, cb) {
	call.success(function (json) { cb(0, json); }).error(function (err) { cb(err, null); });
}

// API object

var Api = window.Api = {};

Api.getUser = function (username, cb) {
	callback($.get('/api/users/' + username), cb)
};

Api.getBind = function (id, cb) {
	callback($.get('/api/binds/' + id), cb)
};

Api.getPlace = function (id, cb) {
	callback($.get('/api/places/' + id), cb)
};

Api.getPositions = function (cb) {
	callback($.get('/api/positions/'), cb)
};

Api.getPlaces = function (cb) {
	callback($.get('/api/places/'), cb)
};

/* posting */

Api.putUser = function (name, alias, cb) {
	var args = {name: name, alias: alias || ''};
	callback($.put('/api/users/' + name, args), cb);
};

Api.postPlace = function (floor, name, alias, cb) {
	var args = {floor: floor, name: name, alias: alias || ''};
	callback($.post('/api/places/', args), cb);
};

Api.postBind = function (username, place_id, x, y, signals, cb) {
	var args = {username: username, place: place_id, x: x, y: y};
	for (var k in signals)
		args['signals[' + k + ']'] = signals[k];
	callback($.post('/api/binds/', args), cb);
};

Api.postPosition = function (username, bind_id) {
	var args = {username: username, bind: bind_id};
	callback($.post('/api/positions/', args), cb);
};

})();

