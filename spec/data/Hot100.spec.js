var list = require('../../data/Hot100');
// Having problems with jasmine async tests. so will have to create my own.




/*
describe('Hot 100', () => {
  
  it('Should have 100 songs', (done) => {
    return list().then(function(data) {
      expect(data.list.length).toBe(100);
      done();
    })
  });  
  
  it('Should Get Historical Data', (done) => {
    return list('04/06/1991').then(function(data) {
      expect(data.list[0]).toBe(['Gloria Estafan', 'Coming Out Of The Dark']);
      done();
    })
  });
      
  it('Date should be the following Saturday', (done) => {
    return list('05/29/2016').then(function(data) {
      expect(data.date.toISOString()).toBe(new Date('06/04/2016').toISOString());
      done();
    })
  });
});
   */