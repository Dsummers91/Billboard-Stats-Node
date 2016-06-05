var Artist = require('../../models/artist');

var adele = new Artist('Adele');
var drake = new Artist('Drake');
var rihanna = new Artist('Rihanna');


describe('Artist', () => {
  
  it('Should have a name', () => {
    expect(artist.name).toBe('ArtistName');
  });
  
  it('Drake\'s genre should be hiphop', () => {
    expect(drake.genre).toBe('HipHop');
    expect(drake.name).toBe('Drake');
  });
  
  it('Rihanna\'s genre should be pop', () => {
    expect(rihanna.genre).toBe('pop');
  });
  
  it('Adele\'s genre should be pop', () => {
    expect(rihanna.genre).toBe('pop');
  });
});
  