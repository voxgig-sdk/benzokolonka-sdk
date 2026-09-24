
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BenzokolonkaSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BenzokolonkaSDK.test()
    equal(testsdk instanceof BenzokolonkaSDK, true,
      'BenzokolonkaSDK.test() must return a client synchronously')
  })

})
