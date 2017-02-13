const assert = require('assert');
const geodis = require('..');

describe('geodis', function() {
  it('it should calculate the distance properly', function() {
    const tehran_geo = {
      latitude: 35.6891975,
      longitude: 51.388973599999986
    };
    const mashhad_geo = {
      latitude: 36.2604623,
      longitude: 59.61675489999993
    };
    var dis = geodis(mashhad_geo.latitude, mashhad_geo.longitude, tehran_geo.latitude, tehran_geo.longitude);
    assert.equal(dis, 743);
  });
});
