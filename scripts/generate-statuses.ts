import { writeFileSync } from 'fs'
import path from 'path'

import status from 'statuses'

const pascalCase = (msg: string) => msg.replaceAll(/\W/g, '')

function generateStatusesTS() {
	const code =
		`import type {
	ExpressThrowerParams,
	ParamsCallback,
	ParamsOptions,
	ParamsOptionsCallback,
} from './types.js'
import ExpressThrower from './express-thrower.js'
` +
		status.codes
			.map(
				(sc) => `
export class ${pascalCase(status(sc))} extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(${sc}, ...params)
	}
}`,
			)
			.join('\n')

	writeFileSync(path.join(import.meta.dirname, '../src/statuses.ts'), code)
}

function generateStatusTypeTS() {
	const code = [
		'export type StatusCode = ',
		...status.codes.map((sc) => `	| ${sc}`),
		'',
	].join('\n')
	writeFileSync(path.join(import.meta.dirname, '../src/status-type.ts'), code)
}

function main() {
	generateStatusesTS()
	generateStatusTypeTS()
}

main()
