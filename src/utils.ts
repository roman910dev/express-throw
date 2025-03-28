import ExpressThrower from './express-thrower.js'

export function expressRethrow(e: unknown) {
	if (e instanceof ExpressThrower) throw e
}
