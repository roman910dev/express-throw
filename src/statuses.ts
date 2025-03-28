import type {
	ExpressThrowerParams,
	ParamsCallback,
	ParamsOptions,
	ParamsOptionsCallback,
} from './types'
import ExpressThrower from './express-thrower'

export class Continue extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(100, ...params)
	}
}

export class SwitchingProtocols extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(101, ...params)
	}
}

export class Processing extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(102, ...params)
	}
}

export class EarlyHints extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(103, ...params)
	}
}

export class OK extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(200, ...params)
	}
}

export class Created extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(201, ...params)
	}
}

export class Accepted extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(202, ...params)
	}
}

export class NonAuthoritativeInformation extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(203, ...params)
	}
}

export class NoContent extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(204, ...params)
	}
}

export class ResetContent extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(205, ...params)
	}
}

export class PartialContent extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(206, ...params)
	}
}

export class MultiStatus extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(207, ...params)
	}
}

export class AlreadyReported extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(208, ...params)
	}
}

export class IMUsed extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(226, ...params)
	}
}

export class MultipleChoices extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(300, ...params)
	}
}

export class MovedPermanently extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(301, ...params)
	}
}

export class Found extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(302, ...params)
	}
}

export class SeeOther extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(303, ...params)
	}
}

export class NotModified extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(304, ...params)
	}
}

export class UseProxy extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(305, ...params)
	}
}

export class TemporaryRedirect extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(307, ...params)
	}
}

export class PermanentRedirect extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(308, ...params)
	}
}

export class BadRequest extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(400, ...params)
	}
}

export class Unauthorized extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(401, ...params)
	}
}

export class PaymentRequired extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(402, ...params)
	}
}

export class Forbidden extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(403, ...params)
	}
}

export class NotFound extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(404, ...params)
	}
}

export class MethodNotAllowed extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(405, ...params)
	}
}

export class NotAcceptable extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(406, ...params)
	}
}

export class ProxyAuthenticationRequired extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(407, ...params)
	}
}

export class RequestTimeout extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(408, ...params)
	}
}

export class Conflict extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(409, ...params)
	}
}

export class Gone extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(410, ...params)
	}
}

export class LengthRequired extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(411, ...params)
	}
}

export class PreconditionFailed extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(412, ...params)
	}
}

export class PayloadTooLarge extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(413, ...params)
	}
}

export class URITooLong extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(414, ...params)
	}
}

export class UnsupportedMediaType extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(415, ...params)
	}
}

export class RangeNotSatisfiable extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(416, ...params)
	}
}

export class ExpectationFailed extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(417, ...params)
	}
}

export class ImaTeapot extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(418, ...params)
	}
}

export class MisdirectedRequest extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(421, ...params)
	}
}

export class UnprocessableEntity extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(422, ...params)
	}
}

export class Locked extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(423, ...params)
	}
}

export class FailedDependency extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(424, ...params)
	}
}

export class TooEarly extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(425, ...params)
	}
}

export class UpgradeRequired extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(426, ...params)
	}
}

export class PreconditionRequired extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(428, ...params)
	}
}

export class TooManyRequests extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(429, ...params)
	}
}

export class RequestHeaderFieldsTooLarge extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(431, ...params)
	}
}

export class UnavailableForLegalReasons extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(451, ...params)
	}
}

export class InternalServerError extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(500, ...params)
	}
}

export class NotImplemented extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(501, ...params)
	}
}

export class BadGateway extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(502, ...params)
	}
}

export class ServiceUnavailable extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(503, ...params)
	}
}

export class GatewayTimeout extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(504, ...params)
	}
}

export class HTTPVersionNotSupported extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(505, ...params)
	}
}

export class VariantAlsoNegotiates extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(506, ...params)
	}
}

export class InsufficientStorage extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(507, ...params)
	}
}

export class LoopDetected extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(508, ...params)
	}
}

export class BandwidthLimitExceeded extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(509, ...params)
	}
}

export class NotExtended extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(510, ...params)
	}
}

export class NetworkAuthenticationRequired extends ExpressThrower {
	constructor(...params: ParamsOptions)
	constructor(...params: ParamsCallback)
	constructor(...params: ParamsOptionsCallback)
	constructor(...params: ExpressThrowerParams) {
		super(511, ...params)
	}
}
