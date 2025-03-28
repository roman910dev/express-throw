import ExpressThrower from './express-thrower'

export function expressRethrow(e: unknown) {
	if (e instanceof ExpressThrower) throw e
}
