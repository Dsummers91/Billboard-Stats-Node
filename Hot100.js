'use strict'

var request = require('request');
var cheerio = require('cheerio');
var Artist = require('./artist');

var $;
request('http://www.billboard.com/charts/hot-100', function(err, resp, body) {
	$ = cheerio.load(body);
	ParseData();
});

var Hot100 = Array();
var Artists = {};
function ParseData() {
	$('.chart-row__artist').each(function() {
		let self = $(this);
		let artist = self.html().trim();
		let song =  self.prev().html().trim();
		if(!Artists.hasOwnProperty(artist)) Artists[artist] = new Artist(artist);
		Artists[artist].songs.push(song);
		Hot100.push(artist+'-'+song);
	});

console.log(Artists['Rihanna']);
// Artist {
//   name: 'Rihanna',
//   genre: 'HipHop',
//   songs: [ 'Needed Me', 'Kiss It Better' ] }	

console.log(Artists['Drake'].songs);
// [ 'Controlla',
//   'Hype',
//   'Still Here',
//   'Childs Play',
//   '9',
//   'Feel No Ways',
//   'U With Me?',
//   'Fire &amp; Desire',
//   'Redemption',
//   'Weston Road Flows',
//   'Keep The Family Close' ]


console.log(Hot100[0]); // #1 Position
// Drake Featuring WizKid &amp; Kyla-One Dance
}
