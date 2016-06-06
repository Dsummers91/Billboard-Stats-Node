'use strict'

var request = require('request');
var cheerio = require('cheerio');
var Artist = require('../models/artist');
var Promise = require('promise');

function list(date) {
	return new Promise(function(resolve, reject) {
		var lists = [];
		date = date ? new Date(date) : new Date();
		var y = date.getFullYear();
		var m = date.getUTCMonth()+1;
		var d = date.getBillboardUpdateDay();
		if(m < 10) {m = '0'+m};
		if(d < 10) {d = '0'+d};
		request('http://www.billboard.com/charts/hot-100/'+y+'-'+m+'-'+d, function(err, resp, body) {
			var $ = cheerio.load(body);
			$('.chart-row__artist').each(function() {
				let self = $(this);
				let artist = self.html().trim();
				let song =  self.prev().html().trim();
				lists.push([artist, song]);
			});
			return resolve({lists: lists, date: new Date(y+'/'+m+'/'+d)});
		});
});
}

Date.prototype.getBillboardUpdateDay = function() {
	while(this.getUTCDay()!==6) {
		this.setUTCDate(this.getUTCDate() + 1);
	}
	return this.getUTCDate();
}

module.exports = list
