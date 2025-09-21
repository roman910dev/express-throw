import type { Request, Response } from 'express';
/**
 * Options for customizing ExpressThrower responses.
 */
export interface ExpressThrowerOptions {
    /** Set Content-Disposition header for file downloads */
    filename?: string;
    /** Use res.redirect() instead of res.send() */
    redirect?: boolean;
    /** Custom headers to set on the response */
    headers?: Record<string, string>;
}
/**
 * Callback function that executes before sending the response.
 */
export type Callback = (req: Request | undefined, res: Response) => any;
export type ParamsFull = [
    message?: string | object,
    optionsOrCallback?: ExpressThrowerOptions | Callback | undefined,
    callback?: Callback | undefined
];
export type ParamsOptions = [
    message?: string | object,
    options?: ExpressThrowerOptions | undefined
];
export type ParamsCallback = [
    message?: string | object,
    callback?: Callback | undefined
];
export type ParamsOptionsCallback = [
    message?: string | object,
    options?: ExpressThrowerOptions | undefined,
    callback?: Callback | undefined
];
export type ExpressThrowerParams = ParamsOptions | ParamsCallback | ParamsOptionsCallback;
//# sourceMappingURL=types.d.ts.map