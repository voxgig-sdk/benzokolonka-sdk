
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BenzokolonkaSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BenzokolonkaSDK.test()
    equal(null !== testsdk, true)
  })

})
