import { createDebug } from '@bicycle-codes/debug'
const debug = createDebug()

export class Example extends HTMLElement {
    constructor () {
        super()

        this.innerHTML = `<div>
            <p>example</p>
            <ul>
                ${Array.from(this.children).filter(Boolean).map(node => {
                    return `<li>${node.outerHTML}</li>`
                }).join('')}
            </ul>
        </div>`
    }

    connectedCallback () {
        debug('connected')
    }
}

customElements.define('example-component', Example)
