import type { NextFunction, Request, Response } from 'express'

import ExpressThrower from './express-thrower'

export default function expressThrow(
	err: Error,
	req: Request,
	res: Response,
	next: NextFunction,
) {
	if (err instanceof ExpressThrower) return err.send(res)
	next(err)
}
