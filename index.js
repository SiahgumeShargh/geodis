/**
 * A simple function for calculating distance between
 * 2 geo positions based on Haversine formula
 * @author Siahgum
 * @copyright MIT © 2017 Siahgum Shargh
 */

// Math.PI / 180
var p = 0.017453292519943295,
 		cos = Math.cos,
		ceil = Math.ceil,
		sqrt = Math.sqrt,
		asin = Math.asin;

module.exports = function(lat1, lon1, lat2, lon2) {
	var a = 0.5 - cos( (lat2 - lat1) * p) / 2 + cos(lat1 * p) * cos(lat2 * p) * (1 - cos((lon2 - lon1) * p)) / 2;
	return ceil( 12742 * asin(sqrt(a)) );
};
