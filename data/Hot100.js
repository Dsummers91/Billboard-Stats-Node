'use strict'

var request = require('request');
var cheerio = require('cheerio');
var Artist = require('../models/artist');
var Promise = require('promise');

function list() {
	return new Promise(function(resolve, reject) {
		list = [];
		request('http://www.billboard.com/charts/hot-100', function(err, resp, body) {
			var $ = cheerio.load(body);
			$('.chart-row__artist').each(function() {
				let self = $(this);
				let artist = self.html().trim();
				let song =  self.prev().html().trim();
				list.push([artist, song]);
			});
			return resolve(list);
		});
});
}

module.exports = list
