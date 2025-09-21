import ExpressThrower from './express-thrower.js'

export function expressRethrow(e: unknown): void {
	if (e instanceof ExpressThrower) throw e
}
