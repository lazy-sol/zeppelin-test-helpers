const { expect } = require('chai');

async function assertFailure (promise) {
  try {
    await promise;
  } catch (error) {
    return error;
  }
  expect.fail('Expected an exception but none was received');
}

module.exports = assertFailure;
