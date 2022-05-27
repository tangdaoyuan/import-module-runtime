import path from 'path'
import { buildSync } from 'esbuild'

export function transform(filePath: string) {
  if (!path.isAbsolute(filePath))
    filePath = path.resolve(filePath)
  const result = buildSync({
    entryPoints: [filePath],
    format: 'cjs',
    bundle: true,
    platform: 'node',
    write: false,
  })
  return result.outputFiles?.[0].text || ''
}
