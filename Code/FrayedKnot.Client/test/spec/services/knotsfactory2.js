'use strict';

describe('Service: knotsFactory2', function () {

  // load the service's module
  beforeEach(module('frayedKnotApp'));

  // instantiate service
  var knotsFactory2;
  beforeEach(inject(function (_knotsFactory2_) {
    knotsFactory2 = _knotsFactory2_;
  }));

  it('should do something', function () {
    expect(!!knotsFactory2).toBe(true);
  });

});
