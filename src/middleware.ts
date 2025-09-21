import type { NextFunction, Request, Response } from 'express'

import ExpressThrower from './express-thrower.js'

export default function expressThrow(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
): void {
	if (err instanceof ExpressThrower) err.send(req, res)
	else next(err)
}
