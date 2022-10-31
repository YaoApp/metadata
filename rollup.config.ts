import { defineConfig } from 'rollup'
import ttypescript from 'ttypescript'

import * as typeCompiler from '@deepkit/type-compiler'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
	input: 'src/index.ts',
	output: {
		dir: 'dist',
		format: 'esm'
	},
	external: ['@deepkit/type'],
	plugins: [
		typescript({
			typescript: ttypescript,
			compilerOptions: {
				plugins: [
					{ transform: 'typescript-transform-paths' },
					{
						transform: 'typescript-transform-paths',
						afterDeclarations: true
					}
				]
			},
			transformers: {
				before: [typeCompiler.transformer],
				afterDeclarations: [typeCompiler.declarationTransformer]
			}
		})
	]
})
