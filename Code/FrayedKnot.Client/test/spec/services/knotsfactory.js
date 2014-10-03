'use strict';

describe('Service: Knotsfactory', function () {

  // load the service's module
  beforeEach(module('frayedKnotApp'));

  // instantiate service
  var Knotsfactory;
  beforeEach(inject(function (_Knotsfactory_) {
    Knotsfactory = _Knotsfactory_;
  }));

  it('should do something', function () {
    expect(!!Knotsfactory).toBe(true);
  });

});
