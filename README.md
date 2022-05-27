# import-module-runtime
> Load typescript and ESM module in Node Runtime

## Usage

```ts
// ./module.ts

export default 'Hello, world!'
```

```ts
// ./transform.ts
import { fileURLToPath } from 'import-module-runtime'

const mod = fileURLToPath(new URL('./module.ts'))

console.log(mod.exports.default)
// Hello, world!
```

