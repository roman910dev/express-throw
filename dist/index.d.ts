import { Request, Response, NextFunction } from 'express';

/**
 * Express error handling middleware for express-throw.
 * Catches `ExpressThrower` errors and sends the appropriate HTTP response.
 * Other errors are passed to the next error handler.
 */
declare function expressThrow(err: Error, req: Request, res: Response, next: NextFunction): void;

type StatusCode = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511;

/**
 * Options for customizing ExpressThrower responses.
 */
interface ExpressThrowerOptions {
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
type Callback = (req: Request | undefined, res: Response) => any;
type ParamsOptions = [
    message?: string | object,
    options?: ExpressThrowerOptions | undefined
];
type ParamsCallback = [
    message?: string | object,
    callback?: Callback | undefined
];
type ParamsOptionsCallback = [
    message?: string | object,
    options?: ExpressThrowerOptions | undefined,
    callback?: Callback | undefined
];

/**
 * A custom Error class that represents HTTP responses that can be thrown.
 * When thrown and caught by the `expressThrow` middleware, it will send the appropriate HTTP response.
 */
declare class ExpressThrower extends Error {
    /** The HTTP status code for this error */
    readonly status: StatusCode;
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
    constructor(status: StatusCode, ...params: ParamsOptions);
    constructor(status: StatusCode, ...params: ParamsCallback);
    constructor(status: StatusCode, ...params: ParamsOptionsCallback);
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

/**
 * HTTP 100 Continue status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/100).
 */
declare class Continue extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 101 Switching Protocols status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/101).
 */
declare class SwitchingProtocols extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 102 Processing status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/102).
 */
declare class Processing extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 103 Early Hints status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/103).
 */
declare class EarlyHints extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 200 OK status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).
 */
declare class OK extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 201 Created status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201).
 */
declare class Created extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 202 Accepted status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202).
 */
declare class Accepted extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 203 Non-Authoritative Information status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/203).
 */
declare class NonAuthoritativeInformation extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 204 No Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/204).
 */
declare class NoContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 205 Reset Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/205).
 */
declare class ResetContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 206 Partial Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/206).
 */
declare class PartialContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 207 Multi-Status status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/207).
 */
declare class MultiStatus extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 208 Already Reported status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/208).
 */
declare class AlreadyReported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 226 IM Used status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/226).
 */
declare class IMUsed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 300 Multiple Choices status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/300).
 */
declare class MultipleChoices extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 301 Moved Permanently status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301).
 */
declare class MovedPermanently extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 302 Found status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302).
 */
declare class Found extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 303 See Other status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303).
 */
declare class SeeOther extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 304 Not Modified status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/304).
 */
declare class NotModified extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 305 Use Proxy status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/305).
 */
declare class UseProxy extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 307 Temporary Redirect status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/307).
 */
declare class TemporaryRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 308 Permanent Redirect status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308).
 */
declare class PermanentRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 400 Bad Request status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400).
 */
declare class BadRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 401 Unauthorized status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401).
 */
declare class Unauthorized extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 402 Payment Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402).
 */
declare class PaymentRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 403 Forbidden status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403).
 */
declare class Forbidden extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 404 Not Found status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404).
 */
declare class NotFound extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 405 Method Not Allowed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405).
 */
declare class MethodNotAllowed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 406 Not Acceptable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406).
 */
declare class NotAcceptable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 407 Proxy Authentication Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407).
 */
declare class ProxyAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 408 Request Timeout status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/408).
 */
declare class RequestTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 409 Conflict status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/409).
 */
declare class Conflict extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 410 Gone status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410).
 */
declare class Gone extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 411 Length Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/411).
 */
declare class LengthRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 412 Precondition Failed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/412).
 */
declare class PreconditionFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 413 Payload Too Large status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413).
 */
declare class PayloadTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 414 URI Too Long status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414).
 */
declare class URITooLong extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 415 Unsupported Media Type status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/415).
 */
declare class UnsupportedMediaType extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 416 Range Not Satisfiable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/416).
 */
declare class RangeNotSatisfiable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 417 Expectation Failed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/417).
 */
declare class ExpectationFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 418 I'm a Teapot status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418).
 */
declare class ImaTeapot extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 421 Misdirected Request status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/421).
 */
declare class MisdirectedRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 422 Unprocessable Entity status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422).
 */
declare class UnprocessableEntity extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 423 Locked status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/423).
 */
declare class Locked extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 424 Failed Dependency status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/424).
 */
declare class FailedDependency extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 425 Too Early status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/425).
 */
declare class TooEarly extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 426 Upgrade Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/426).
 */
declare class UpgradeRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 428 Precondition Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/428).
 */
declare class PreconditionRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 429 Too Many Requests status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429).
 */
declare class TooManyRequests extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 431 Request Header Fields Too Large status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/431).
 */
declare class RequestHeaderFieldsTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 451 Unavailable For Legal Reasons status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/451).
 */
declare class UnavailableForLegalReasons extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 500 Internal Server Error status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500).
 */
declare class InternalServerError extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 501 Not Implemented status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501).
 */
declare class NotImplemented extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 502 Bad Gateway status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502).
 */
declare class BadGateway extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 503 Service Unavailable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503).
 */
declare class ServiceUnavailable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 504 Gateway Timeout status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504).
 */
declare class GatewayTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 505 HTTP Version Not Supported status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/505).
 */
declare class HTTPVersionNotSupported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 506 Variant Also Negotiates status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/506).
 */
declare class VariantAlsoNegotiates extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 507 Insufficient Storage status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/507).
 */
declare class InsufficientStorage extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 508 Loop Detected status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/508).
 */
declare class LoopDetected extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 509 Bandwidth Limit Exceeded status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/509).
 */
declare class BandwidthLimitExceeded extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 510 Not Extended status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/510).
 */
declare class NotExtended extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 511 Network Authentication Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/511).
 */
declare class NetworkAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}

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
declare function expressRethrow(err: unknown): void;

export { Accepted, AlreadyReported, BadGateway, BadRequest, BandwidthLimitExceeded, Conflict, Continue, Created, EarlyHints, ExpectationFailed, ExpressThrower, type ExpressThrowerOptions, FailedDependency, Forbidden, Found, GatewayTimeout, Gone, HTTPVersionNotSupported, IMUsed, ImaTeapot, InsufficientStorage, InternalServerError, LengthRequired, Locked, LoopDetected, MethodNotAllowed, MisdirectedRequest, MovedPermanently, MultiStatus, MultipleChoices, NetworkAuthenticationRequired, NoContent, NonAuthoritativeInformation, NotAcceptable, NotExtended, NotFound, NotImplemented, NotModified, OK, PartialContent, PayloadTooLarge, PaymentRequired, PermanentRedirect, PreconditionFailed, PreconditionRequired, Processing, ProxyAuthenticationRequired, RangeNotSatisfiable, RequestHeaderFieldsTooLarge, RequestTimeout, ResetContent, SeeOther, ServiceUnavailable, type StatusCode, SwitchingProtocols, TemporaryRedirect, TooEarly, TooManyRequests, URITooLong, Unauthorized, UnavailableForLegalReasons, UnprocessableEntity, UnsupportedMediaType, UpgradeRequired, UseProxy, VariantAlsoNegotiates, expressThrow as default, expressRethrow };
