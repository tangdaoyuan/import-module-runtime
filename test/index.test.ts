import { fileURLToPath } from 'node:url'
import { expect, it } from 'vitest'
import { findNodeModule } from '@'

it('runs', () => {
  const mod = findNodeModule(fileURLToPath(new URL('./fixture/module.ts', import.meta.url)))
  expect(mod).not.toBeNull()
  expect(mod?.exports).toHaveProperty('default')
  expect(mod?.exports.default()).toBe(1)
})
