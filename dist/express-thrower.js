import statuses from 'statuses';
function sendOptions(res, options) {
    if (options.filename) {
        res.setHeader('Content-Disposition', `attachment; filename="${options.filename}"`);
        res.setHeader('Content-Type', 'application/octet-stream');
    }
    if (options.headers)
        res.set(options.headers);
}
export class ExpressThrower extends Error {
    status;
    json;
    options;
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
        this.options =
            typeof optionsOrCallback === 'object' ? optionsOrCallback : {};
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
    sendStatus(res) {
        return res.sendStatus(this.status);
    }
}
export default ExpressThrower;
//# sourceMappingURL=express-thrower.js.map