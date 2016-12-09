require('babel-polyfill')
import test from 'ava'
import getExportsFromFile from './index'
// import glob from 'glob'

test('basic', async t => {
  const exp = await getExportsFromFile('fixtures/basic.js')
  t.deepEqual(exp, [
    {name: 'statelessComponent', exported: true},
    {name: 'ShoppingList', exported: 'default'}
    // {name: 'statelessComponentNotExported', exported: false},
  ])
})

test('export as', async t => {
  const exp = await getExportsFromFile('fixtures/export-as.js')
  t.deepEqual(exp, [
    { name: 'b', exported: true },
    { name: 'exportAs', exported: 'default' }
    // {name: 'statelessComponentNotExported', exported: false},
  ])
})

test('classname', async t => {
  const exp = await getExportsFromFile('fixtures/classname.js')
  t.deepEqual(exp, [
    { name: 'ShoppingList', exported: 'default' }
    // {name: 'statelessComponentNotExported', exported: false},
  ])
})

// test()

// test.only('files', () => {
//   const files = glob.sync('../be/frontend-be.com/src/**/*.jsx')
//   // console.log(files)
//   files.forEach((file) => {
//     console.log(getExportsFromFile(file))
//   })
// })

