import path from 'path'
import { pathToFileURL } from 'url'
import { buildSync } from 'esbuild'

export function transform(filePath: string) {
  if (!path.isAbsolute(filePath))
    filePath = path.resolve(filePath)

  const _importMetaUrl = pathToFileURL(path.dirname(filePath)).href
  const result = buildSync({
    entryPoints: [filePath],
    format: 'cjs',
    bundle: true,
    platform: 'node',
    write: false,
    minify: true,
    define: {
      'import\.meta\.url': `"${_importMetaUrl}"`,
    },
  })
  return result.outputFiles?.[0].text || ''
}
