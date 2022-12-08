/* eslint-disable no-underscore-dangle */

import { flattenObjectToDotted, getId } from './utils'

it('transforms an object into an array of dotted paths', async () => {
  const paths: string[] = []
  const obj = {
    test: {
      testDeep: {
        testDeeper: ''
      }
    },
    test2: {
      test2deep: {
        test2deeper: ''
      }
    }
  }
  flattenObjectToDotted(paths, obj, '')

  expect(paths.length).toEqual(2)
  expect(paths[0]).toEqual('test.testDeep.testDeeper')
  expect(paths[1]).toEqual('test2.test2deep.test2deeper')
})

it('gets the id out of a linkId', async () => {
  expect(getId({ linkId: 'step1' })).toEqual('step1')
  expect(getId({ linkId: 'step1.page1' })).toEqual('step1_page1')
  expect(getId({ linkId: 'step1.page1.input1' })).toEqual('step1_page1_input1')
  expect(getId({ linkId: 'step1', indexRepeat: 0 })).toEqual('step1')
  expect(getId({ linkId: 'step1', indexRepeat: 1 })).toEqual('step1')
})
