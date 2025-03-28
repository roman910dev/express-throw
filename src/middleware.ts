import type { NextFunction, Request, Response } from 'express'

import ExpressThrower from './express-thrower.js'

export default function expressThrow(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (err instanceof ExpressThrower) return err.send(req, res)
	next(err)
}
