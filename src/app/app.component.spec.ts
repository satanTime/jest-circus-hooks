import {addEventHandler} from "jest-circus/build/state";

// a global spy to listen to hooks
const spy = jest.fn();
spy.mockName('suite listener');

// an attempt to use hooks
addEventHandler(spy);

// it works with testRunner: 'jest-jasmine2',
declare const jasmine: any;
if (typeof jasmine !== 'undefined') {
  jasmine.getEnv().addReporter({
    jasmineDone:spy,
    jasmineStarted:spy,
    specDone:spy,
    specStarted:spy,
    suiteDone:spy,
    suiteStarted:spy,
  });
}

// simulating some hooks calls
describe('main block', () => {

  describe('sub block', () => {
    it('simulates positive', () => {
      expect(1).toEqual(1);
    });
  });

  // assertion that hooks are called on the spy too
  it('uses listener', () => {
    expect(spy).toHaveBeenCalled();
  })
});
