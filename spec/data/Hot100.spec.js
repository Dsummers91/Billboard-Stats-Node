var list = require('../../data/Hot100');

describe('Hot 100', () => {
  
  it('Should have 100 songs', (done) => {
    return list().then(function(data) {
      expect(data.length).toBe(100);
      done();
    })
  });
    
});
  