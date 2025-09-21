import ExpressThrower from './express-thrower.js';
import type { ParamsCallback, ParamsOptions, ParamsOptionsCallback } from './types.js';
export declare class Continue extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class SwitchingProtocols extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Processing extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class EarlyHints extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class OK extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Created extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Accepted extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NonAuthoritativeInformation extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NoContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class ResetContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class PartialContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class MultiStatus extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class AlreadyReported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class IMUsed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class MultipleChoices extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class MovedPermanently extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Found extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class SeeOther extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NotModified extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class UseProxy extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class TemporaryRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class PermanentRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class BadRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Unauthorized extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class PaymentRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Forbidden extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NotFound extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class MethodNotAllowed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NotAcceptable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class ProxyAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class RequestTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Conflict extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Gone extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class LengthRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class PreconditionFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class PayloadTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class URITooLong extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class UnsupportedMediaType extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class RangeNotSatisfiable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class ExpectationFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class ImaTeapot extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class MisdirectedRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class UnprocessableEntity extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class Locked extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class FailedDependency extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class TooEarly extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class UpgradeRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class PreconditionRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class TooManyRequests extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class RequestHeaderFieldsTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class UnavailableForLegalReasons extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class InternalServerError extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NotImplemented extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class BadGateway extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class ServiceUnavailable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class GatewayTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class HTTPVersionNotSupported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class VariantAlsoNegotiates extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class InsufficientStorage extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class LoopDetected extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class BandwidthLimitExceeded extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NotExtended extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
export declare class NetworkAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
//# sourceMappingURL=statuses.d.ts.map