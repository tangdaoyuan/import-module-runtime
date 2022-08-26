import { fileURLToPath } from 'node:url'
import { describe, expect, it } from 'vitest'
import { findNodeModule } from '@'

describe('findNodeModule', () => {
  it('basic works', () => {
    const mod = findNodeModule(fileURLToPath(new URL('./fixture/module.ts', import.meta.url)))
    expect(mod).not.toBeNull()
    expect(mod?.exports).toHaveProperty('default')
    expect(mod?.exports.default()).toBe(1)
  })
  it('import.meta.url works', () => {
    const mod = findNodeModule(fileURLToPath(new URL('./fixture/module.ts', import.meta.url)))
    expect(mod).not.toBeNull()
    expect(mod?.exports).toMatchInlineSnapshot(`
      {
        "child": [Function],
        "default": [Function],
      }
    `)
  })
})
