import type { NextFunction, Request, Response } from 'express';
/**
 * Express error handling middleware for express-throw.
 * Catches `ExpressThrower` errors and sends the appropriate HTTP response.
 * Other errors are passed to the next error handler.
 */
export default function expressThrow(err: Error, req: Request, res: Response, next: NextFunction): void;
//# sourceMappingURL=middleware.d.ts.map