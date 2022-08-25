import assert from 'assert'
import addFunc from "../src"

describe('validate:', () => {
  /**
   * myFirstFunc
   */
  describe('myFirstFunc', () => {
    test(' return hello rollup ', () => {
      assert.strictEqual(addFunc('rollup'), 'hello rollup')
    })
  })
})
