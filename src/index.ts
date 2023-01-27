import { NodePlopAPI } from 'plop'

import route, { GeneratorParams } from './route'

const generator = async (
  plop: NodePlopAPI,
  params: GeneratorParams
): Promise<void> => {
  plop.setHelper('includes', (array, string, options) => {
    if (array.includes(string)) {
      return options.fn(this)
    } else {
      return options.inverse(this)
    }
  })

  plop.setDefaultInclude({ generators: true })
  plop.setGenerator('route', route(params))
}

export = generator
