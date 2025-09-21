import ExpressThrower from './express-thrower.js';
export function expressRethrow(e) {
    if (e instanceof ExpressThrower)
        throw e;
}
//# sourceMappingURL=utils.js.map