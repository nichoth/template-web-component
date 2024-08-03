import { test } from '@bicycle-codes/tapzero'
import { waitFor } from '@bicycle-codes/dom'
import '../src/index.js'

test('example test', async t => {
    document.body.innerHTML += `
        <{{component-name}} class="test">
        </{{component-name}}>
    `

    const el = await waitFor('{{component-name}}')

    t.ok(el, 'should find an element')
})
