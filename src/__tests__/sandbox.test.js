const support = require('./sandboxSupport');
const Flat = require('./flatDbProvider');

describe('index', () => {
  it('sandboxSupport', () => {

    const flat = new Flat();
    //console.log(flat);
    const v = flat.collection('questions').findOne({id: 'e53d42ad-8eaa-4950-aafe-776a029c23df'});

    expect(v.id).toEqual('e53d42ad-8eaa-4950-aafe-776a029c23df');
  });
});
