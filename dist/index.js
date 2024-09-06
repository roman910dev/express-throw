"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Accepted: () => Accepted,
  AlreadyReported: () => AlreadyReported,
  BadGateway: () => BadGateway,
  BadRequest: () => BadRequest,
  BandwidthLimitExceeded: () => BandwidthLimitExceeded,
  Conflict: () => Conflict,
  Continue: () => Continue,
  Created: () => Created,
  EarlyHints: () => EarlyHints,
  ExpectationFailed: () => ExpectationFailed,
  ExpressThrower: () => ExpressThrower,
  FailedDependency: () => FailedDependency,
  Forbidden: () => Forbidden,
  Found: () => Found,
  GatewayTimeout: () => GatewayTimeout,
  Gone: () => Gone,
  HTTPVersionNotSupported: () => HTTPVersionNotSupported,
  IMUsed: () => IMUsed,
  ImaTeapot: () => ImaTeapot,
  InsufficientStorage: () => InsufficientStorage,
  InternalServerError: () => InternalServerError,
  LengthRequired: () => LengthRequired,
  Locked: () => Locked,
  LoopDetected: () => LoopDetected,
  MethodNotAllowed: () => MethodNotAllowed,
  MisdirectedRequest: () => MisdirectedRequest,
  MovedPermanently: () => MovedPermanently,
  MultiStatus: () => MultiStatus,
  MultipleChoices: () => MultipleChoices,
  NetworkAuthenticationRequired: () => NetworkAuthenticationRequired,
  NoContent: () => NoContent,
  NonAuthoritativeInformation: () => NonAuthoritativeInformation,
  NotAcceptable: () => NotAcceptable,
  NotExtended: () => NotExtended,
  NotFound: () => NotFound,
  NotImplemented: () => NotImplemented,
  NotModified: () => NotModified,
  OK: () => OK,
  PartialContent: () => PartialContent,
  PayloadTooLarge: () => PayloadTooLarge,
  PaymentRequired: () => PaymentRequired,
  PermanentRedirect: () => PermanentRedirect,
  PreconditionFailed: () => PreconditionFailed,
  PreconditionRequired: () => PreconditionRequired,
  Processing: () => Processing,
  ProxyAuthenticationRequired: () => ProxyAuthenticationRequired,
  RangeNotSatisfiable: () => RangeNotSatisfiable,
  RequestHeaderFieldsTooLarge: () => RequestHeaderFieldsTooLarge,
  RequestTimeout: () => RequestTimeout,
  ResetContent: () => ResetContent,
  SeeOther: () => SeeOther,
  ServiceUnavailable: () => ServiceUnavailable,
  SwitchingProtocols: () => SwitchingProtocols,
  TemporaryRedirect: () => TemporaryRedirect,
  TooEarly: () => TooEarly,
  TooManyRequests: () => TooManyRequests,
  URITooLong: () => URITooLong,
  Unauthorized: () => Unauthorized,
  UnavailableForLegalReasons: () => UnavailableForLegalReasons,
  UnprocessableEntity: () => UnprocessableEntity,
  UnsupportedMediaType: () => UnsupportedMediaType,
  UpgradeRequired: () => UpgradeRequired,
  UseProxy: () => UseProxy,
  VariantAlsoNegotiates: () => VariantAlsoNegotiates,
  default: () => src_default,
  expressRethrow: () => expressRethrow
});
module.exports = __toCommonJS(src_exports);

// src/express-thrower.ts
var import_statuses = __toESM(require("statuses"));
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
var ExpressThrower = class extends Error {
  status;
  json;
  options;
  callback;
  constructor(status, ...[message, optionsOrCallback, callback]) {
    if (message === void 0) {
      super((0, import_statuses.default)(status));
    } else if (typeof message === "string") {
      super(message);
    } else {
      super(JSON.stringify(message));
      this.json = message;
    }
    this.callback = typeof optionsOrCallback === "function" ? optionsOrCallback : callback;
    this.options = typeof optionsOrCallback === "object" ? optionsOrCallback : {};
    this.status = status;
  }
  send(reqOrRes, response) {
    const req = response ? reqOrRes : void 0;
    const res = response ?? reqOrRes;
    this.callback?.(req, res);
    if (res.closed) return res;
    sendOptions(res, this.options);
    if (this.options.redirect)
      return res.redirect(this.status, this.message);
    return res.status(this.status).send(this.json ?? this.message);
  }
  sendStatus(res) {
    return res.sendStatus(this.status);
  }
};
var express_thrower_default = ExpressThrower;

// src/middleware.ts
function expressThrow(err, req, res, next) {
  if (err instanceof express_thrower_default) return err.send(res);
  next(err);
}

// src/statuses.ts
var Continue = class extends express_thrower_default {
  constructor(...params) {
    super(100, ...params);
  }
};
var SwitchingProtocols = class extends express_thrower_default {
  constructor(...params) {
    super(101, ...params);
  }
};
var Processing = class extends express_thrower_default {
  constructor(...params) {
    super(102, ...params);
  }
};
var EarlyHints = class extends express_thrower_default {
  constructor(...params) {
    super(103, ...params);
  }
};
var OK = class extends express_thrower_default {
  constructor(...params) {
    super(200, ...params);
  }
};
var Created = class extends express_thrower_default {
  constructor(...params) {
    super(201, ...params);
  }
};
var Accepted = class extends express_thrower_default {
  constructor(...params) {
    super(202, ...params);
  }
};
var NonAuthoritativeInformation = class extends express_thrower_default {
  constructor(...params) {
    super(203, ...params);
  }
};
var NoContent = class extends express_thrower_default {
  constructor(...params) {
    super(204, ...params);
  }
};
var ResetContent = class extends express_thrower_default {
  constructor(...params) {
    super(205, ...params);
  }
};
var PartialContent = class extends express_thrower_default {
  constructor(...params) {
    super(206, ...params);
  }
};
var MultiStatus = class extends express_thrower_default {
  constructor(...params) {
    super(207, ...params);
  }
};
var AlreadyReported = class extends express_thrower_default {
  constructor(...params) {
    super(208, ...params);
  }
};
var IMUsed = class extends express_thrower_default {
  constructor(...params) {
    super(226, ...params);
  }
};
var MultipleChoices = class extends express_thrower_default {
  constructor(...params) {
    super(300, ...params);
  }
};
var MovedPermanently = class extends express_thrower_default {
  constructor(...params) {
    super(301, ...params);
  }
};
var Found = class extends express_thrower_default {
  constructor(...params) {
    super(302, ...params);
  }
};
var SeeOther = class extends express_thrower_default {
  constructor(...params) {
    super(303, ...params);
  }
};
var NotModified = class extends express_thrower_default {
  constructor(...params) {
    super(304, ...params);
  }
};
var UseProxy = class extends express_thrower_default {
  constructor(...params) {
    super(305, ...params);
  }
};
var TemporaryRedirect = class extends express_thrower_default {
  constructor(...params) {
    super(307, ...params);
  }
};
var PermanentRedirect = class extends express_thrower_default {
  constructor(...params) {
    super(308, ...params);
  }
};
var BadRequest = class extends express_thrower_default {
  constructor(...params) {
    super(400, ...params);
  }
};
var Unauthorized = class extends express_thrower_default {
  constructor(...params) {
    super(401, ...params);
  }
};
var PaymentRequired = class extends express_thrower_default {
  constructor(...params) {
    super(402, ...params);
  }
};
var Forbidden = class extends express_thrower_default {
  constructor(...params) {
    super(403, ...params);
  }
};
var NotFound = class extends express_thrower_default {
  constructor(...params) {
    super(404, ...params);
  }
};
var MethodNotAllowed = class extends express_thrower_default {
  constructor(...params) {
    super(405, ...params);
  }
};
var NotAcceptable = class extends express_thrower_default {
  constructor(...params) {
    super(406, ...params);
  }
};
var ProxyAuthenticationRequired = class extends express_thrower_default {
  constructor(...params) {
    super(407, ...params);
  }
};
var RequestTimeout = class extends express_thrower_default {
  constructor(...params) {
    super(408, ...params);
  }
};
var Conflict = class extends express_thrower_default {
  constructor(...params) {
    super(409, ...params);
  }
};
var Gone = class extends express_thrower_default {
  constructor(...params) {
    super(410, ...params);
  }
};
var LengthRequired = class extends express_thrower_default {
  constructor(...params) {
    super(411, ...params);
  }
};
var PreconditionFailed = class extends express_thrower_default {
  constructor(...params) {
    super(412, ...params);
  }
};
var PayloadTooLarge = class extends express_thrower_default {
  constructor(...params) {
    super(413, ...params);
  }
};
var URITooLong = class extends express_thrower_default {
  constructor(...params) {
    super(414, ...params);
  }
};
var UnsupportedMediaType = class extends express_thrower_default {
  constructor(...params) {
    super(415, ...params);
  }
};
var RangeNotSatisfiable = class extends express_thrower_default {
  constructor(...params) {
    super(416, ...params);
  }
};
var ExpectationFailed = class extends express_thrower_default {
  constructor(...params) {
    super(417, ...params);
  }
};
var ImaTeapot = class extends express_thrower_default {
  constructor(...params) {
    super(418, ...params);
  }
};
var MisdirectedRequest = class extends express_thrower_default {
  constructor(...params) {
    super(421, ...params);
  }
};
var UnprocessableEntity = class extends express_thrower_default {
  constructor(...params) {
    super(422, ...params);
  }
};
var Locked = class extends express_thrower_default {
  constructor(...params) {
    super(423, ...params);
  }
};
var FailedDependency = class extends express_thrower_default {
  constructor(...params) {
    super(424, ...params);
  }
};
var TooEarly = class extends express_thrower_default {
  constructor(...params) {
    super(425, ...params);
  }
};
var UpgradeRequired = class extends express_thrower_default {
  constructor(...params) {
    super(426, ...params);
  }
};
var PreconditionRequired = class extends express_thrower_default {
  constructor(...params) {
    super(428, ...params);
  }
};
var TooManyRequests = class extends express_thrower_default {
  constructor(...params) {
    super(429, ...params);
  }
};
var RequestHeaderFieldsTooLarge = class extends express_thrower_default {
  constructor(...params) {
    super(431, ...params);
  }
};
var UnavailableForLegalReasons = class extends express_thrower_default {
  constructor(...params) {
    super(451, ...params);
  }
};
var InternalServerError = class extends express_thrower_default {
  constructor(...params) {
    super(500, ...params);
  }
};
var NotImplemented = class extends express_thrower_default {
  constructor(...params) {
    super(501, ...params);
  }
};
var BadGateway = class extends express_thrower_default {
  constructor(...params) {
    super(502, ...params);
  }
};
var ServiceUnavailable = class extends express_thrower_default {
  constructor(...params) {
    super(503, ...params);
  }
};
var GatewayTimeout = class extends express_thrower_default {
  constructor(...params) {
    super(504, ...params);
  }
};
var HTTPVersionNotSupported = class extends express_thrower_default {
  constructor(...params) {
    super(505, ...params);
  }
};
var VariantAlsoNegotiates = class extends express_thrower_default {
  constructor(...params) {
    super(506, ...params);
  }
};
var InsufficientStorage = class extends express_thrower_default {
  constructor(...params) {
    super(507, ...params);
  }
};
var LoopDetected = class extends express_thrower_default {
  constructor(...params) {
    super(508, ...params);
  }
};
var BandwidthLimitExceeded = class extends express_thrower_default {
  constructor(...params) {
    super(509, ...params);
  }
};
var NotExtended = class extends express_thrower_default {
  constructor(...params) {
    super(510, ...params);
  }
};
var NetworkAuthenticationRequired = class extends express_thrower_default {
  constructor(...params) {
    super(511, ...params);
  }
};

// src/utils.ts
function expressRethrow(e) {
  if (e instanceof express_thrower_default) throw e;
}

// src/index.ts
var src_default = expressThrow;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Accepted,
  AlreadyReported,
  BadGateway,
  BadRequest,
  BandwidthLimitExceeded,
  Conflict,
  Continue,
  Created,
  EarlyHints,
  ExpectationFailed,
  ExpressThrower,
  FailedDependency,
  Forbidden,
  Found,
  GatewayTimeout,
  Gone,
  HTTPVersionNotSupported,
  IMUsed,
  ImaTeapot,
  InsufficientStorage,
  InternalServerError,
  LengthRequired,
  Locked,
  LoopDetected,
  MethodNotAllowed,
  MisdirectedRequest,
  MovedPermanently,
  MultiStatus,
  MultipleChoices,
  NetworkAuthenticationRequired,
  NoContent,
  NonAuthoritativeInformation,
  NotAcceptable,
  NotExtended,
  NotFound,
  NotImplemented,
  NotModified,
  OK,
  PartialContent,
  PayloadTooLarge,
  PaymentRequired,
  PermanentRedirect,
  PreconditionFailed,
  PreconditionRequired,
  Processing,
  ProxyAuthenticationRequired,
  RangeNotSatisfiable,
  RequestHeaderFieldsTooLarge,
  RequestTimeout,
  ResetContent,
  SeeOther,
  ServiceUnavailable,
  SwitchingProtocols,
  TemporaryRedirect,
  TooEarly,
  TooManyRequests,
  URITooLong,
  Unauthorized,
  UnavailableForLegalReasons,
  UnprocessableEntity,
  UnsupportedMediaType,
  UpgradeRequired,
  UseProxy,
  VariantAlsoNegotiates,
  expressRethrow
});
//# sourceMappingURL=index.js.map