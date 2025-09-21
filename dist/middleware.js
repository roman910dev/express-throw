import ExpressThrower from './express-thrower.js';
/**
 * Express error handling middleware for express-throw.
 * Catches `ExpressThrower` errors and sends the appropriate HTTP response.
 * Other errors are passed to the next error handler.
 */
export default function expressThrow(err, req, res, next) {
    if (err instanceof ExpressThrower)
        err.send(req, res);
    else
        next(err);
}
//# sourceMappingURL=middleware.js.map