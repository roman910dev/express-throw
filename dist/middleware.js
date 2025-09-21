import ExpressThrower from './express-thrower.js';
export default function expressThrow(err, req, res, next) {
    if (err instanceof ExpressThrower)
        err.send(req, res);
    else
        next(err);
}
//# sourceMappingURL=middleware.js.map