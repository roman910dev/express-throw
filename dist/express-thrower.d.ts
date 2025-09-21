import type { Request, Response } from 'express';
import type { StatusCode as SC } from './status-type.js';
import type { Callback, Options, ParamsCallback, ParamsOptions, ParamsOptionsCallback } from './types.js';
export declare class ExpressThrower extends Error {
    status: SC;
    json: object | undefined;
    options: Options;
    callback: Callback | undefined;
    constructor(status: SC, ...params: ParamsOptions);
    constructor(status: SC, ...params: ParamsCallback);
    constructor(status: SC, ...params: ParamsOptionsCallback);
    send(req: Request): never;
    send(res: Response): Response;
    send(req: Request, res: Response): Response;
    sendStatus(res: Response): Response;
}
export default ExpressThrower;
//# sourceMappingURL=express-thrower.d.ts.map