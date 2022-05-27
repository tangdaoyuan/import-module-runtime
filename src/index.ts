import path from 'path'
import _module from 'node:module'

import type { ExposeNodeModule, Options } from './types'
import { transform } from './transform'

export function findNodeModule(modulePath: string, _options?: Options): NodeModule | null {
  const mockFilePath = path.resolve(modulePath)
  const fileName = path.basename(mockFilePath)

  try {
    const rawCjsCode = transform(mockFilePath)
    const mod = new _module(mockFilePath) as ExposeNodeModule
    mod.filename = fileName
    mod._compile(rawCjsCode, fileName)
    return mod
  }
  catch (error) {
    console.error(error)
  }
  return null
}
