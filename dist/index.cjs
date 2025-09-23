'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var statuses = require('statuses');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var statuses__default = /*#__PURE__*/_interopDefault(statuses);

var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
function sendOptions(res, options) {
  if (options.filename) {
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${options.filename}"`
    );
    res.setHeader("Content-Type", "application/octet-stream");
  }
  if (options.headers) res.set(options.headers);
}
__name(sendOptions, "sendOptions");
var ExpressThrower = class extends Error {
  static {
    __name(this, "ExpressThrower");
  }
  /** The HTTP status code for this error */
  status;
  /** The JSON object to send as response body (if message was an object) */
  json;
  /** Options for customizing the response */
  options;
  /** Callback function to execute before sending the response */
  callback;
  constructor(status, ...[message, optionsOrCallback, callback]) {
    if (message === void 0) {
      super(statuses__default.default(status));
    } else if (typeof message === "string") {
      super(message);
    } else {
      super(JSON.stringify(message));
      this.json = message;
    }
    this.callback = typeof optionsOrCallback === "function" ? optionsOrCallback : callback;
    const options = typeof optionsOrCallback === "object" ? optionsOrCallback : {};
    this.options = { redirect: statuses.redirect[status], ...options };
    this.status = status;
  }
  send(reqOrRes, response) {
    const req = response ? reqOrRes : void 0;
    const res = response ?? reqOrRes;
    this.callback?.(req, res);
    if (res.closed) return res;
    sendOptions(res, this.options);
    if (this.options.redirect) return res.redirect(this.status, this.message);
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
};
var express_thrower_default = ExpressThrower;

// src/middleware.ts
function expressThrow(err, req, res, next) {
  if (err instanceof express_thrower_default) err.send(req, res);
  else next(err);
}
__name(expressThrow, "expressThrow");

// src/statuses.ts
var Continue = class extends express_thrower_default {
  static {
    __name(this, "Continue");
  }
  constructor(...params) {
    super(100, ...params);
  }
};
var SwitchingProtocols = class extends express_thrower_default {
  static {
    __name(this, "SwitchingProtocols");
  }
  constructor(...params) {
    super(101, ...params);
  }
};
var Processing = class extends express_thrower_default {
  static {
    __name(this, "Processing");
  }
  constructor(...params) {
    super(102, ...params);
  }
};
var EarlyHints = class extends express_thrower_default {
  static {
    __name(this, "EarlyHints");
  }
  constructor(...params) {
    super(103, ...params);
  }
};
var OK = class extends express_thrower_default {
  static {
    __name(this, "OK");
  }
  constructor(...params) {
    super(200, ...params);
  }
};
var Created = class extends express_thrower_default {
  static {
    __name(this, "Created");
  }
  constructor(...params) {
    super(201, ...params);
  }
};
var Accepted = class extends express_thrower_default {
  static {
    __name(this, "Accepted");
  }
  constructor(...params) {
    super(202, ...params);
  }
};
var NonAuthoritativeInformation = class extends express_thrower_default {
  static {
    __name(this, "NonAuthoritativeInformation");
  }
  constructor(...params) {
    super(203, ...params);
  }
};
var NoContent = class extends express_thrower_default {
  static {
    __name(this, "NoContent");
  }
  constructor(...params) {
    super(204, ...params);
  }
};
var ResetContent = class extends express_thrower_default {
  static {
    __name(this, "ResetContent");
  }
  constructor(...params) {
    super(205, ...params);
  }
};
var PartialContent = class extends express_thrower_default {
  static {
    __name(this, "PartialContent");
  }
  constructor(...params) {
    super(206, ...params);
  }
};
var MultiStatus = class extends express_thrower_default {
  static {
    __name(this, "MultiStatus");
  }
  constructor(...params) {
    super(207, ...params);
  }
};
var AlreadyReported = class extends express_thrower_default {
  static {
    __name(this, "AlreadyReported");
  }
  constructor(...params) {
    super(208, ...params);
  }
};
var IMUsed = class extends express_thrower_default {
  static {
    __name(this, "IMUsed");
  }
  constructor(...params) {
    super(226, ...params);
  }
};
var MultipleChoices = class extends express_thrower_default {
  static {
    __name(this, "MultipleChoices");
  }
  constructor(...params) {
    super(300, ...params);
  }
};
var MovedPermanently = class extends express_thrower_default {
  static {
    __name(this, "MovedPermanently");
  }
  constructor(...params) {
    super(301, ...params);
  }
};
var Found = class extends express_thrower_default {
  static {
    __name(this, "Found");
  }
  constructor(...params) {
    super(302, ...params);
  }
};
var SeeOther = class extends express_thrower_default {
  static {
    __name(this, "SeeOther");
  }
  constructor(...params) {
    super(303, ...params);
  }
};
var NotModified = class extends express_thrower_default {
  static {
    __name(this, "NotModified");
  }
  constructor(...params) {
    super(304, ...params);
  }
};
var UseProxy = class extends express_thrower_default {
  static {
    __name(this, "UseProxy");
  }
  constructor(...params) {
    super(305, ...params);
  }
};
var TemporaryRedirect = class extends express_thrower_default {
  static {
    __name(this, "TemporaryRedirect");
  }
  constructor(...params) {
    super(307, ...params);
  }
};
var PermanentRedirect = class extends express_thrower_default {
  static {
    __name(this, "PermanentRedirect");
  }
  constructor(...params) {
    super(308, ...params);
  }
};
var BadRequest = class extends express_thrower_default {
  static {
    __name(this, "BadRequest");
  }
  constructor(...params) {
    super(400, ...params);
  }
};
var Unauthorized = class extends express_thrower_default {
  static {
    __name(this, "Unauthorized");
  }
  constructor(...params) {
    super(401, ...params);
  }
};
var PaymentRequired = class extends express_thrower_default {
  static {
    __name(this, "PaymentRequired");
  }
  constructor(...params) {
    super(402, ...params);
  }
};
var Forbidden = class extends express_thrower_default {
  static {
    __name(this, "Forbidden");
  }
  constructor(...params) {
    super(403, ...params);
  }
};
var NotFound = class extends express_thrower_default {
  static {
    __name(this, "NotFound");
  }
  constructor(...params) {
    super(404, ...params);
  }
};
var MethodNotAllowed = class extends express_thrower_default {
  static {
    __name(this, "MethodNotAllowed");
  }
  constructor(...params) {
    super(405, ...params);
  }
};
var NotAcceptable = class extends express_thrower_default {
  static {
    __name(this, "NotAcceptable");
  }
  constructor(...params) {
    super(406, ...params);
  }
};
var ProxyAuthenticationRequired = class extends express_thrower_default {
  static {
    __name(this, "ProxyAuthenticationRequired");
  }
  constructor(...params) {
    super(407, ...params);
  }
};
var RequestTimeout = class extends express_thrower_default {
  static {
    __name(this, "RequestTimeout");
  }
  constructor(...params) {
    super(408, ...params);
  }
};
var Conflict = class extends express_thrower_default {
  static {
    __name(this, "Conflict");
  }
  constructor(...params) {
    super(409, ...params);
  }
};
var Gone = class extends express_thrower_default {
  static {
    __name(this, "Gone");
  }
  constructor(...params) {
    super(410, ...params);
  }
};
var LengthRequired = class extends express_thrower_default {
  static {
    __name(this, "LengthRequired");
  }
  constructor(...params) {
    super(411, ...params);
  }
};
var PreconditionFailed = class extends express_thrower_default {
  static {
    __name(this, "PreconditionFailed");
  }
  constructor(...params) {
    super(412, ...params);
  }
};
var PayloadTooLarge = class extends express_thrower_default {
  static {
    __name(this, "PayloadTooLarge");
  }
  constructor(...params) {
    super(413, ...params);
  }
};
var URITooLong = class extends express_thrower_default {
  static {
    __name(this, "URITooLong");
  }
  constructor(...params) {
    super(414, ...params);
  }
};
var UnsupportedMediaType = class extends express_thrower_default {
  static {
    __name(this, "UnsupportedMediaType");
  }
  constructor(...params) {
    super(415, ...params);
  }
};
var RangeNotSatisfiable = class extends express_thrower_default {
  static {
    __name(this, "RangeNotSatisfiable");
  }
  constructor(...params) {
    super(416, ...params);
  }
};
var ExpectationFailed = class extends express_thrower_default {
  static {
    __name(this, "ExpectationFailed");
  }
  constructor(...params) {
    super(417, ...params);
  }
};
var ImaTeapot = class extends express_thrower_default {
  static {
    __name(this, "ImaTeapot");
  }
  constructor(...params) {
    super(418, ...params);
  }
};
var MisdirectedRequest = class extends express_thrower_default {
  static {
    __name(this, "MisdirectedRequest");
  }
  constructor(...params) {
    super(421, ...params);
  }
};
var UnprocessableEntity = class extends express_thrower_default {
  static {
    __name(this, "UnprocessableEntity");
  }
  constructor(...params) {
    super(422, ...params);
  }
};
var Locked = class extends express_thrower_default {
  static {
    __name(this, "Locked");
  }
  constructor(...params) {
    super(423, ...params);
  }
};
var FailedDependency = class extends express_thrower_default {
  static {
    __name(this, "FailedDependency");
  }
  constructor(...params) {
    super(424, ...params);
  }
};
var TooEarly = class extends express_thrower_default {
  static {
    __name(this, "TooEarly");
  }
  constructor(...params) {
    super(425, ...params);
  }
};
var UpgradeRequired = class extends express_thrower_default {
  static {
    __name(this, "UpgradeRequired");
  }
  constructor(...params) {
    super(426, ...params);
  }
};
var PreconditionRequired = class extends express_thrower_default {
  static {
    __name(this, "PreconditionRequired");
  }
  constructor(...params) {
    super(428, ...params);
  }
};
var TooManyRequests = class extends express_thrower_default {
  static {
    __name(this, "TooManyRequests");
  }
  constructor(...params) {
    super(429, ...params);
  }
};
var RequestHeaderFieldsTooLarge = class extends express_thrower_default {
  static {
    __name(this, "RequestHeaderFieldsTooLarge");
  }
  constructor(...params) {
    super(431, ...params);
  }
};
var UnavailableForLegalReasons = class extends express_thrower_default {
  static {
    __name(this, "UnavailableForLegalReasons");
  }
  constructor(...params) {
    super(451, ...params);
  }
};
var InternalServerError = class extends express_thrower_default {
  static {
    __name(this, "InternalServerError");
  }
  constructor(...params) {
    super(500, ...params);
  }
};
var NotImplemented = class extends express_thrower_default {
  static {
    __name(this, "NotImplemented");
  }
  constructor(...params) {
    super(501, ...params);
  }
};
var BadGateway = class extends express_thrower_default {
  static {
    __name(this, "BadGateway");
  }
  constructor(...params) {
    super(502, ...params);
  }
};
var ServiceUnavailable = class extends express_thrower_default {
  static {
    __name(this, "ServiceUnavailable");
  }
  constructor(...params) {
    super(503, ...params);
  }
};
var GatewayTimeout = class extends express_thrower_default {
  static {
    __name(this, "GatewayTimeout");
  }
  constructor(...params) {
    super(504, ...params);
  }
};
var HTTPVersionNotSupported = class extends express_thrower_default {
  static {
    __name(this, "HTTPVersionNotSupported");
  }
  constructor(...params) {
    super(505, ...params);
  }
};
var VariantAlsoNegotiates = class extends express_thrower_default {
  static {
    __name(this, "VariantAlsoNegotiates");
  }
  constructor(...params) {
    super(506, ...params);
  }
};
var InsufficientStorage = class extends express_thrower_default {
  static {
    __name(this, "InsufficientStorage");
  }
  constructor(...params) {
    super(507, ...params);
  }
};
var LoopDetected = class extends express_thrower_default {
  static {
    __name(this, "LoopDetected");
  }
  constructor(...params) {
    super(508, ...params);
  }
};
var BandwidthLimitExceeded = class extends express_thrower_default {
  static {
    __name(this, "BandwidthLimitExceeded");
  }
  constructor(...params) {
    super(509, ...params);
  }
};
var NotExtended = class extends express_thrower_default {
  static {
    __name(this, "NotExtended");
  }
  constructor(...params) {
    super(510, ...params);
  }
};
var NetworkAuthenticationRequired = class extends express_thrower_default {
  static {
    __name(this, "NetworkAuthenticationRequired");
  }
  constructor(...params) {
    super(511, ...params);
  }
};

// src/utils.ts
function expressRethrow(err) {
  if (err instanceof express_thrower_default) throw err;
}
__name(expressRethrow, "expressRethrow");

// src/index.ts
var index_default = expressThrow;

exports.Accepted = Accepted;
exports.AlreadyReported = AlreadyReported;
exports.BadGateway = BadGateway;
exports.BadRequest = BadRequest;
exports.BandwidthLimitExceeded = BandwidthLimitExceeded;
exports.Conflict = Conflict;
exports.Continue = Continue;
exports.Created = Created;
exports.EarlyHints = EarlyHints;
exports.ExpectationFailed = ExpectationFailed;
exports.ExpressThrower = ExpressThrower;
exports.FailedDependency = FailedDependency;
exports.Forbidden = Forbidden;
exports.Found = Found;
exports.GatewayTimeout = GatewayTimeout;
exports.Gone = Gone;
exports.HTTPVersionNotSupported = HTTPVersionNotSupported;
exports.IMUsed = IMUsed;
exports.ImaTeapot = ImaTeapot;
exports.InsufficientStorage = InsufficientStorage;
exports.InternalServerError = InternalServerError;
exports.LengthRequired = LengthRequired;
exports.Locked = Locked;
exports.LoopDetected = LoopDetected;
exports.MethodNotAllowed = MethodNotAllowed;
exports.MisdirectedRequest = MisdirectedRequest;
exports.MovedPermanently = MovedPermanently;
exports.MultiStatus = MultiStatus;
exports.MultipleChoices = MultipleChoices;
exports.NetworkAuthenticationRequired = NetworkAuthenticationRequired;
exports.NoContent = NoContent;
exports.NonAuthoritativeInformation = NonAuthoritativeInformation;
exports.NotAcceptable = NotAcceptable;
exports.NotExtended = NotExtended;
exports.NotFound = NotFound;
exports.NotImplemented = NotImplemented;
exports.NotModified = NotModified;
exports.OK = OK;
exports.PartialContent = PartialContent;
exports.PayloadTooLarge = PayloadTooLarge;
exports.PaymentRequired = PaymentRequired;
exports.PermanentRedirect = PermanentRedirect;
exports.PreconditionFailed = PreconditionFailed;
exports.PreconditionRequired = PreconditionRequired;
exports.Processing = Processing;
exports.ProxyAuthenticationRequired = ProxyAuthenticationRequired;
exports.RangeNotSatisfiable = RangeNotSatisfiable;
exports.RequestHeaderFieldsTooLarge = RequestHeaderFieldsTooLarge;
exports.RequestTimeout = RequestTimeout;
exports.ResetContent = ResetContent;
exports.SeeOther = SeeOther;
exports.ServiceUnavailable = ServiceUnavailable;
exports.SwitchingProtocols = SwitchingProtocols;
exports.TemporaryRedirect = TemporaryRedirect;
exports.TooEarly = TooEarly;
exports.TooManyRequests = TooManyRequests;
exports.URITooLong = URITooLong;
exports.Unauthorized = Unauthorized;
exports.UnavailableForLegalReasons = UnavailableForLegalReasons;
exports.UnprocessableEntity = UnprocessableEntity;
exports.UnsupportedMediaType = UnsupportedMediaType;
exports.UpgradeRequired = UpgradeRequired;
exports.UseProxy = UseProxy;
exports.VariantAlsoNegotiates = VariantAlsoNegotiates;
exports.default = index_default;
exports.expressRethrow = expressRethrow;
//# sourceMappingURL=index.cjs.map
//# sourceMappingURL=index.cjs.map