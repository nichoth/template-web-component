import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

export class Example extends HTMLElement {
    constructor () {
        super()

        this.innerHTML = `<div>
            example
        </div>`
    }

    connectedCallback () {
        debug('connected')
    }
}

customElements.define('example-component', Example)
