;(function (window) {
	'use strict';

	var passgen = function(pass, site, size) {
		var bases = window.Bases;
		var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~\"";
		var pass = bases.toAlphabet( bases.fromBase16((md5(md5(pass) + md5(site)))) , alphabet );
		return pass.slice(0, size);
	}

	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = passgen;
	} else {
		window.passgen = passgen;
	}

})(this);
