import statuses, { redirect } from 'statuses';
/**
 * Applies options to the response object.
 * @param res - The Express response object
 * @param options - Options to apply to the response
 */
function sendOptions(res, options) {
    if (options.filename) {
        res.setHeader('Content-Disposition', `attachment; filename="${options.filename}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
    }
    if (options.headers)
        res.set(options.headers);
}
/**
 * A custom Error class that represents HTTP responses that can be thrown.
 * When thrown and caught by the `expressThrow` middleware, it will send the appropriate HTTP response.
 */
export class ExpressThrower extends Error {
    /** The HTTP status code for this error */
    status;
    /** The JSON object to send as response body (if message was an object) */
    json;
    /** Options for customizing the response */
    options;
    /** Callback function to execute before sending the response */
    callback;
    constructor(status, ...[message, optionsOrCallback, callback]) {
        if (message === undefined) {
            super(statuses(status));
        }
        else if (typeof message === 'string') {
            super(message);
        }
        else {
            super(JSON.stringify(message));
            this.json = message;
        }
        this.callback =
            typeof optionsOrCallback === 'function' ? optionsOrCallback : callback;
        const options = typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
        this.options = { redirect: redirect[status], ...options };
        this.status = status;
    }
    send(reqOrRes, response) {
        const req = response ? reqOrRes : undefined;
        const res = response ?? reqOrRes;
        this.callback?.(req, res);
        if (res.closed)
            return res;
        sendOptions(res, this.options);
        if (this.options.redirect)
            return res.redirect(this.status, this.message);
        return res.status(this.status).send(this.json ?? this.message);
    }
    /**
     * Sends only the status code without a body.
     * @param res - The Express response object
     * @returns The response object
     */
    sendStatus(res) {
        return res.sendStatus(this.status);
    }
}
export default ExpressThrower;
//# sourceMappingURL=express-thrower.js.map