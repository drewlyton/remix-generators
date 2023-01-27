import { NodePlopAPI } from 'plop'

import route from './route'

const generator = async (plop: NodePlopAPI): Promise<void> => {
  plop.setHelper('includes', (array, string, options) => {
    if (array.includes(string)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  })

  plop.setDefaultInclude({ generators: true })
  plop.setGenerator('route', route)
}

export = generator
