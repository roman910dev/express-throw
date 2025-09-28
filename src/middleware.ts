import type { NextFunction, Request, Response } from 'express'

import ExpressThrower from './express-thrower.js'

/**
 * Express error handling middleware for express-throw.
 * Catches `ExpressThrower` errors and sends the appropriate HTTP response.
 * Other errors are passed to the next error handler.
 */
export default function expressThrow(
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	if (err instanceof ExpressThrower) err.send(req, res)
	else next(err)
}
