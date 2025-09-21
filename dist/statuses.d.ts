import ExpressThrower from './express-thrower.js';
import type { ParamsCallback, ParamsOptions, ParamsOptionsCallback } from './types.js';
/**
 * HTTP 100 Continue status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/100).
 */
export declare class Continue extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 101 Switching Protocols status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/101).
 */
export declare class SwitchingProtocols extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 102 Processing status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/102).
 */
export declare class Processing extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 103 Early Hints status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/103).
 */
export declare class EarlyHints extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 200 OK status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).
 */
export declare class OK extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 201 Created status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201).
 */
export declare class Created extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 202 Accepted status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202).
 */
export declare class Accepted extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 203 Non-Authoritative Information status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/203).
 */
export declare class NonAuthoritativeInformation extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 204 No Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/204).
 */
export declare class NoContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 205 Reset Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/205).
 */
export declare class ResetContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 206 Partial Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/206).
 */
export declare class PartialContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 207 Multi-Status status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/207).
 */
export declare class MultiStatus extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 208 Already Reported status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/208).
 */
export declare class AlreadyReported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 226 IM Used status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/226).
 */
export declare class IMUsed extends ExpressThrower {
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
export declare class MultipleChoices extends ExpressThrower {
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
export declare class MovedPermanently extends ExpressThrower {
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
export declare class Found extends ExpressThrower {
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
export declare class SeeOther extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 304 Not Modified status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/304).
 */
export declare class NotModified extends ExpressThrower {
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
export declare class UseProxy extends ExpressThrower {
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
export declare class TemporaryRedirect extends ExpressThrower {
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
export declare class PermanentRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 400 Bad Request status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400).
 */
export declare class BadRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 401 Unauthorized status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401).
 */
export declare class Unauthorized extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 402 Payment Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402).
 */
export declare class PaymentRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 403 Forbidden status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403).
 */
export declare class Forbidden extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 404 Not Found status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404).
 */
export declare class NotFound extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 405 Method Not Allowed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405).
 */
export declare class MethodNotAllowed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 406 Not Acceptable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406).
 */
export declare class NotAcceptable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 407 Proxy Authentication Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407).
 */
export declare class ProxyAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 408 Request Timeout status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/408).
 */
export declare class RequestTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 409 Conflict status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/409).
 */
export declare class Conflict extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 410 Gone status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410).
 */
export declare class Gone extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 411 Length Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/411).
 */
export declare class LengthRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 412 Precondition Failed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/412).
 */
export declare class PreconditionFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 413 Payload Too Large status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413).
 */
export declare class PayloadTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 414 URI Too Long status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414).
 */
export declare class URITooLong extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 415 Unsupported Media Type status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/415).
 */
export declare class UnsupportedMediaType extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 416 Range Not Satisfiable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/416).
 */
export declare class RangeNotSatisfiable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 417 Expectation Failed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/417).
 */
export declare class ExpectationFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 418 I'm a Teapot status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418).
 */
export declare class ImaTeapot extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 421 Misdirected Request status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/421).
 */
export declare class MisdirectedRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 422 Unprocessable Entity status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422).
 */
export declare class UnprocessableEntity extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 423 Locked status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/423).
 */
export declare class Locked extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 424 Failed Dependency status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/424).
 */
export declare class FailedDependency extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 425 Too Early status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/425).
 */
export declare class TooEarly extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 426 Upgrade Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/426).
 */
export declare class UpgradeRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 428 Precondition Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/428).
 */
export declare class PreconditionRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 429 Too Many Requests status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429).
 */
export declare class TooManyRequests extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 431 Request Header Fields Too Large status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/431).
 */
export declare class RequestHeaderFieldsTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 451 Unavailable For Legal Reasons status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/451).
 */
export declare class UnavailableForLegalReasons extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 500 Internal Server Error status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500).
 */
export declare class InternalServerError extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 501 Not Implemented status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501).
 */
export declare class NotImplemented extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 502 Bad Gateway status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502).
 */
export declare class BadGateway extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 503 Service Unavailable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503).
 */
export declare class ServiceUnavailable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 504 Gateway Timeout status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504).
 */
export declare class GatewayTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 505 HTTP Version Not Supported status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/505).
 */
export declare class HTTPVersionNotSupported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 506 Variant Also Negotiates status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/506).
 */
export declare class VariantAlsoNegotiates extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 507 Insufficient Storage status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/507).
 */
export declare class InsufficientStorage extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 508 Loop Detected status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/508).
 */
export declare class LoopDetected extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 509 Bandwidth Limit Exceeded status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/509).
 */
export declare class BandwidthLimitExceeded extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 510 Not Extended status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/510).
 */
export declare class NotExtended extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
/**
 * HTTP 511 Network Authentication Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/511).
 */
export declare class NetworkAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
//# sourceMappingURL=statuses.d.ts.map