import type { Request, Response } from 'express';
import type { StatusCode as SC } from './status-type.js';
import type { Callback, ExpressThrowerOptions, ParamsCallback, ParamsOptions, ParamsOptionsCallback } from './types.js';
/**
 * A custom Error class that represents HTTP responses that can be thrown.
 * When thrown and caught by the `expressThrow` middleware, it will send the appropriate HTTP response.
 */
export declare class ExpressThrower extends Error {
    /** The HTTP status code for this error */
    readonly status: SC;
    /** The JSON object to send as response body (if message was an object) */
    readonly json: object | undefined;
    /** Options for customizing the response */
    readonly options: ExpressThrowerOptions;
    /** Callback function to execute before sending the response */
    readonly callback: Callback | undefined;
    /**
     * Creates a new ExpressThrower instance.
     * @param status - The HTTP status code
     * @param message - Optional message (string or object) or undefined to use default status message
     * @param optionsOrCallback - Optional options object or callback function
     * @param callback - Optional callback function (when optionsOrCallback is an object)
     */
    constructor(status: SC, ...params: ParamsOptions);
    constructor(status: SC, ...params: ParamsCallback);
    constructor(status: SC, ...params: ParamsOptionsCallback);
    /**
     * Sends the HTTP response. This method is called by the express-throw middleware.
     * @returns The response object
     */
    send(req: Request): never;
    send(res: Response): Response;
    send(req: Request, res: Response): Response;
    /**
     * Sends only the status code without a body.
     * @param res - The Express response object
     * @returns The response object
     */
    sendStatus(res: Response): Response;
}
export default ExpressThrower;
//# sourceMappingURL=express-thrower.d.ts.map