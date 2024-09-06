import { Request, Response, NextFunction } from 'express';

declare function expressThrow(err: Error, req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;

type StatusCode = 100 | 101 | 102 | 103 | 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207 | 208 | 226 | 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308 | 400 | 401 | 402 | 403 | 404 | 405 | 406 | 407 | 408 | 409 | 410 | 411 | 412 | 413 | 414 | 415 | 416 | 417 | 418 | 421 | 422 | 423 | 424 | 425 | 426 | 428 | 429 | 431 | 451 | 500 | 501 | 502 | 503 | 504 | 505 | 506 | 507 | 508 | 509 | 510 | 511;

interface Options {
    filename?: string;
    redirect?: boolean;
    headers?: Record<string, string>;
}
type Callback = (req: Request | undefined, res: Response) => any;
type ParamsOptions = [
    message?: string | object,
    options?: Options | undefined
];
type ParamsCallback = [
    message?: string | object,
    callback?: Callback | undefined
];
type ParamsOptionsCallback = [
    message?: string | object,
    options?: Options | undefined,
    callback?: Callback | undefined
];

declare class ExpressThrower extends Error {
    status: StatusCode;
    json: object | undefined;
    options: Options;
    callback: Callback | undefined;
    constructor(status: StatusCode, ...params: ParamsOptions);
    constructor(status: StatusCode, ...params: ParamsCallback);
    constructor(status: StatusCode, ...params: ParamsOptionsCallback);
    send(req: Request): never;
    send(res: Response): Response;
    send(req: Request, res: Response): Response;
    sendStatus(res: Response): Response<any, Record<string, any>>;
}

declare class Continue extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class SwitchingProtocols extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Processing extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class EarlyHints extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class OK extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Created extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Accepted extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NonAuthoritativeInformation extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NoContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class ResetContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class PartialContent extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class MultiStatus extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class AlreadyReported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class IMUsed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class MultipleChoices extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class MovedPermanently extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Found extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class SeeOther extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NotModified extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class UseProxy extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class TemporaryRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class PermanentRedirect extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class BadRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Unauthorized extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class PaymentRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Forbidden extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NotFound extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class MethodNotAllowed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NotAcceptable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class ProxyAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class RequestTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Conflict extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Gone extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class LengthRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class PreconditionFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class PayloadTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class URITooLong extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class UnsupportedMediaType extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class RangeNotSatisfiable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class ExpectationFailed extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class ImaTeapot extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class MisdirectedRequest extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class UnprocessableEntity extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class Locked extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class FailedDependency extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class TooEarly extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class UpgradeRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class PreconditionRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class TooManyRequests extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class RequestHeaderFieldsTooLarge extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class UnavailableForLegalReasons extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class InternalServerError extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NotImplemented extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class BadGateway extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class ServiceUnavailable extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class GatewayTimeout extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class HTTPVersionNotSupported extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class VariantAlsoNegotiates extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class InsufficientStorage extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class LoopDetected extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class BandwidthLimitExceeded extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NotExtended extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}
declare class NetworkAuthenticationRequired extends ExpressThrower {
    constructor(...params: ParamsOptions);
    constructor(...params: ParamsCallback);
    constructor(...params: ParamsOptionsCallback);
}

declare function expressRethrow(e: unknown): void;

export { Accepted, AlreadyReported, BadGateway, BadRequest, BandwidthLimitExceeded, Conflict, Continue, Created, EarlyHints, ExpectationFailed, ExpressThrower, type Options as ExpressThrowerOptions, FailedDependency, Forbidden, Found, GatewayTimeout, Gone, HTTPVersionNotSupported, IMUsed, ImaTeapot, InsufficientStorage, InternalServerError, LengthRequired, Locked, LoopDetected, MethodNotAllowed, MisdirectedRequest, MovedPermanently, MultiStatus, MultipleChoices, NetworkAuthenticationRequired, NoContent, NonAuthoritativeInformation, NotAcceptable, NotExtended, NotFound, NotImplemented, NotModified, OK, PartialContent, PayloadTooLarge, PaymentRequired, PermanentRedirect, PreconditionFailed, PreconditionRequired, Processing, ProxyAuthenticationRequired, RangeNotSatisfiable, RequestHeaderFieldsTooLarge, RequestTimeout, ResetContent, SeeOther, ServiceUnavailable, type StatusCode, SwitchingProtocols, TemporaryRedirect, TooEarly, TooManyRequests, URITooLong, Unauthorized, UnavailableForLegalReasons, UnprocessableEntity, UnsupportedMediaType, UpgradeRequired, UseProxy, VariantAlsoNegotiates, expressThrow as default, expressRethrow };
