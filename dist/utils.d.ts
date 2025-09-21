/**
 * Re-throws ExpressThrower errors while letting other errors pass through.
 * This is useful when you want to catch and handle other types of errors
 * but ensure ExpressThrower errors are properly propagated to the middleware.
 *
 * Shorthand for:
 * ```typescript
 * if (err instanceof ExpressThrower) throw err
 * else throw err
 * ```
 */
export declare function expressRethrow(err: unknown): void;
//# sourceMappingURL=utils.d.ts.map