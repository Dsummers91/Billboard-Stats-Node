'use strict'
var request = require('request');
var cheerio = require('cheerio');
var $;

request('http://www.billboard.com/charts/hot-100', function(err, resp, body) {
	$ = cheerio.load(body);
	ParseData();
})


var Artists = {};
var Hot100 = [];
function ParseData() {
	$('.chart-row__artist').each(function() {
		let that = $(this);
		let artist = that.html().trim();
		let song =  that.prev().html().trim();
		Hot100.push(artist+' - '+song);
		Artists[artist] = Artists.hasOwnProperty(artist) ? Artists[artist]+1 : 1;
	});
	console.log('Top Song is:'+Hot100[0]);
	// Return Top Song is:Drake Featuring WizKid &amp; Kyla - One Dan
	console.log('Rihanna has '+Artists['Rihanna']+' songs on the Hot 100');
	// Return Rihanna has 2 songs on the Hot 10
}