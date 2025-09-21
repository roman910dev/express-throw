import ExpressThrower from './express-thrower.js';
/**
 * HTTP 100 Continue status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/100).
 */
export class Continue extends ExpressThrower {
    constructor(...params) {
        super(100, ...params);
    }
}
/**
 * HTTP 101 Switching Protocols status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/101).
 */
export class SwitchingProtocols extends ExpressThrower {
    constructor(...params) {
        super(101, ...params);
    }
}
/**
 * HTTP 102 Processing status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/102).
 */
export class Processing extends ExpressThrower {
    constructor(...params) {
        super(102, ...params);
    }
}
/**
 * HTTP 103 Early Hints status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/103).
 */
export class EarlyHints extends ExpressThrower {
    constructor(...params) {
        super(103, ...params);
    }
}
/**
 * HTTP 200 OK status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/200).
 */
export class OK extends ExpressThrower {
    constructor(...params) {
        super(200, ...params);
    }
}
/**
 * HTTP 201 Created status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/201).
 */
export class Created extends ExpressThrower {
    constructor(...params) {
        super(201, ...params);
    }
}
/**
 * HTTP 202 Accepted status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/202).
 */
export class Accepted extends ExpressThrower {
    constructor(...params) {
        super(202, ...params);
    }
}
/**
 * HTTP 203 Non-Authoritative Information status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/203).
 */
export class NonAuthoritativeInformation extends ExpressThrower {
    constructor(...params) {
        super(203, ...params);
    }
}
/**
 * HTTP 204 No Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/204).
 */
export class NoContent extends ExpressThrower {
    constructor(...params) {
        super(204, ...params);
    }
}
/**
 * HTTP 205 Reset Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/205).
 */
export class ResetContent extends ExpressThrower {
    constructor(...params) {
        super(205, ...params);
    }
}
/**
 * HTTP 206 Partial Content status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/206).
 */
export class PartialContent extends ExpressThrower {
    constructor(...params) {
        super(206, ...params);
    }
}
/**
 * HTTP 207 Multi-Status status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/207).
 */
export class MultiStatus extends ExpressThrower {
    constructor(...params) {
        super(207, ...params);
    }
}
/**
 * HTTP 208 Already Reported status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/208).
 */
export class AlreadyReported extends ExpressThrower {
    constructor(...params) {
        super(208, ...params);
    }
}
/**
 * HTTP 226 IM Used status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/226).
 */
export class IMUsed extends ExpressThrower {
    constructor(...params) {
        super(226, ...params);
    }
}
/**
 * HTTP 300 Multiple Choices status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/300).
 */
export class MultipleChoices extends ExpressThrower {
    constructor(...params) {
        super(300, ...params);
    }
}
/**
 * HTTP 301 Moved Permanently status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/301).
 */
export class MovedPermanently extends ExpressThrower {
    constructor(...params) {
        super(301, ...params);
    }
}
/**
 * HTTP 302 Found status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/302).
 */
export class Found extends ExpressThrower {
    constructor(...params) {
        super(302, ...params);
    }
}
/**
 * HTTP 303 See Other status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/303).
 */
export class SeeOther extends ExpressThrower {
    constructor(...params) {
        super(303, ...params);
    }
}
/**
 * HTTP 304 Not Modified status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/304).
 */
export class NotModified extends ExpressThrower {
    constructor(...params) {
        super(304, ...params);
    }
}
/**
 * HTTP 305 Use Proxy status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/305).
 */
export class UseProxy extends ExpressThrower {
    constructor(...params) {
        super(305, ...params);
    }
}
/**
 * HTTP 307 Temporary Redirect status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/307).
 */
export class TemporaryRedirect extends ExpressThrower {
    constructor(...params) {
        super(307, ...params);
    }
}
/**
 * HTTP 308 Permanent Redirect status code.
 *
 * Redirects by default.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/308).
 */
export class PermanentRedirect extends ExpressThrower {
    constructor(...params) {
        super(308, ...params);
    }
}
/**
 * HTTP 400 Bad Request status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400).
 */
export class BadRequest extends ExpressThrower {
    constructor(...params) {
        super(400, ...params);
    }
}
/**
 * HTTP 401 Unauthorized status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401).
 */
export class Unauthorized extends ExpressThrower {
    constructor(...params) {
        super(401, ...params);
    }
}
/**
 * HTTP 402 Payment Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/402).
 */
export class PaymentRequired extends ExpressThrower {
    constructor(...params) {
        super(402, ...params);
    }
}
/**
 * HTTP 403 Forbidden status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403).
 */
export class Forbidden extends ExpressThrower {
    constructor(...params) {
        super(403, ...params);
    }
}
/**
 * HTTP 404 Not Found status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404).
 */
export class NotFound extends ExpressThrower {
    constructor(...params) {
        super(404, ...params);
    }
}
/**
 * HTTP 405 Method Not Allowed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405).
 */
export class MethodNotAllowed extends ExpressThrower {
    constructor(...params) {
        super(405, ...params);
    }
}
/**
 * HTTP 406 Not Acceptable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406).
 */
export class NotAcceptable extends ExpressThrower {
    constructor(...params) {
        super(406, ...params);
    }
}
/**
 * HTTP 407 Proxy Authentication Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407).
 */
export class ProxyAuthenticationRequired extends ExpressThrower {
    constructor(...params) {
        super(407, ...params);
    }
}
/**
 * HTTP 408 Request Timeout status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/408).
 */
export class RequestTimeout extends ExpressThrower {
    constructor(...params) {
        super(408, ...params);
    }
}
/**
 * HTTP 409 Conflict status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/409).
 */
export class Conflict extends ExpressThrower {
    constructor(...params) {
        super(409, ...params);
    }
}
/**
 * HTTP 410 Gone status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410).
 */
export class Gone extends ExpressThrower {
    constructor(...params) {
        super(410, ...params);
    }
}
/**
 * HTTP 411 Length Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/411).
 */
export class LengthRequired extends ExpressThrower {
    constructor(...params) {
        super(411, ...params);
    }
}
/**
 * HTTP 412 Precondition Failed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/412).
 */
export class PreconditionFailed extends ExpressThrower {
    constructor(...params) {
        super(412, ...params);
    }
}
/**
 * HTTP 413 Payload Too Large status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/413).
 */
export class PayloadTooLarge extends ExpressThrower {
    constructor(...params) {
        super(413, ...params);
    }
}
/**
 * HTTP 414 URI Too Long status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414).
 */
export class URITooLong extends ExpressThrower {
    constructor(...params) {
        super(414, ...params);
    }
}
/**
 * HTTP 415 Unsupported Media Type status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/415).
 */
export class UnsupportedMediaType extends ExpressThrower {
    constructor(...params) {
        super(415, ...params);
    }
}
/**
 * HTTP 416 Range Not Satisfiable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/416).
 */
export class RangeNotSatisfiable extends ExpressThrower {
    constructor(...params) {
        super(416, ...params);
    }
}
/**
 * HTTP 417 Expectation Failed status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/417).
 */
export class ExpectationFailed extends ExpressThrower {
    constructor(...params) {
        super(417, ...params);
    }
}
/**
 * HTTP 418 I'm a Teapot status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/418).
 */
export class ImaTeapot extends ExpressThrower {
    constructor(...params) {
        super(418, ...params);
    }
}
/**
 * HTTP 421 Misdirected Request status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/421).
 */
export class MisdirectedRequest extends ExpressThrower {
    constructor(...params) {
        super(421, ...params);
    }
}
/**
 * HTTP 422 Unprocessable Entity status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/422).
 */
export class UnprocessableEntity extends ExpressThrower {
    constructor(...params) {
        super(422, ...params);
    }
}
/**
 * HTTP 423 Locked status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/423).
 */
export class Locked extends ExpressThrower {
    constructor(...params) {
        super(423, ...params);
    }
}
/**
 * HTTP 424 Failed Dependency status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/424).
 */
export class FailedDependency extends ExpressThrower {
    constructor(...params) {
        super(424, ...params);
    }
}
/**
 * HTTP 425 Too Early status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/425).
 */
export class TooEarly extends ExpressThrower {
    constructor(...params) {
        super(425, ...params);
    }
}
/**
 * HTTP 426 Upgrade Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/426).
 */
export class UpgradeRequired extends ExpressThrower {
    constructor(...params) {
        super(426, ...params);
    }
}
/**
 * HTTP 428 Precondition Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/428).
 */
export class PreconditionRequired extends ExpressThrower {
    constructor(...params) {
        super(428, ...params);
    }
}
/**
 * HTTP 429 Too Many Requests status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429).
 */
export class TooManyRequests extends ExpressThrower {
    constructor(...params) {
        super(429, ...params);
    }
}
/**
 * HTTP 431 Request Header Fields Too Large status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/431).
 */
export class RequestHeaderFieldsTooLarge extends ExpressThrower {
    constructor(...params) {
        super(431, ...params);
    }
}
/**
 * HTTP 451 Unavailable For Legal Reasons status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/451).
 */
export class UnavailableForLegalReasons extends ExpressThrower {
    constructor(...params) {
        super(451, ...params);
    }
}
/**
 * HTTP 500 Internal Server Error status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500).
 */
export class InternalServerError extends ExpressThrower {
    constructor(...params) {
        super(500, ...params);
    }
}
/**
 * HTTP 501 Not Implemented status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/501).
 */
export class NotImplemented extends ExpressThrower {
    constructor(...params) {
        super(501, ...params);
    }
}
/**
 * HTTP 502 Bad Gateway status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502).
 */
export class BadGateway extends ExpressThrower {
    constructor(...params) {
        super(502, ...params);
    }
}
/**
 * HTTP 503 Service Unavailable status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503).
 */
export class ServiceUnavailable extends ExpressThrower {
    constructor(...params) {
        super(503, ...params);
    }
}
/**
 * HTTP 504 Gateway Timeout status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504).
 */
export class GatewayTimeout extends ExpressThrower {
    constructor(...params) {
        super(504, ...params);
    }
}
/**
 * HTTP 505 HTTP Version Not Supported status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/505).
 */
export class HTTPVersionNotSupported extends ExpressThrower {
    constructor(...params) {
        super(505, ...params);
    }
}
/**
 * HTTP 506 Variant Also Negotiates status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/506).
 */
export class VariantAlsoNegotiates extends ExpressThrower {
    constructor(...params) {
        super(506, ...params);
    }
}
/**
 * HTTP 507 Insufficient Storage status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/507).
 */
export class InsufficientStorage extends ExpressThrower {
    constructor(...params) {
        super(507, ...params);
    }
}
/**
 * HTTP 508 Loop Detected status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/508).
 */
export class LoopDetected extends ExpressThrower {
    constructor(...params) {
        super(508, ...params);
    }
}
/**
 * HTTP 509 Bandwidth Limit Exceeded status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/509).
 */
export class BandwidthLimitExceeded extends ExpressThrower {
    constructor(...params) {
        super(509, ...params);
    }
}
/**
 * HTTP 510 Not Extended status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/510).
 */
export class NotExtended extends ExpressThrower {
    constructor(...params) {
        super(510, ...params);
    }
}
/**
 * HTTP 511 Network Authentication Required status code.
 *
 * See details in [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/511).
 */
export class NetworkAuthenticationRequired extends ExpressThrower {
    constructor(...params) {
        super(511, ...params);
    }
}
//# sourceMappingURL=statuses.js.map