import type { Request, Response } from 'express'
import statuses, { redirect } from 'statuses'

import type { StatusCode as SC } from './status-type.js'
import type {
	Callback,
	ExpressThrowerOptions,
	ParamsCallback,
	ParamsFull,
	ParamsOptions,
	ParamsOptionsCallback,
} from './types.js'

/**
 * Applies options to the response object.
 * @param res - The Express response object
 * @param options - Options to apply to the response
 */
function sendOptions(res: Response, options: ExpressThrowerOptions) {
	if (options.filename) {
		res.setHeader(
			'Content-Disposition',
			`attachment; filename="${options.filename}"`,
		)
		res.setHeader('Content-Type', 'application/octet-stream')
	}
	if (options.headers) res.set(options.headers)
}

/**
 * A custom Error class that represents HTTP responses that can be thrown.
 * When thrown and caught by the `expressThrow` middleware, it will send the appropriate HTTP response.
 */
export class ExpressThrower extends Error {
	/** The HTTP status code for this error */
	readonly status: SC
	/** The JSON object to send as response body (if message was an object) */
	readonly json: object | undefined
	/** Options for customizing the response */
	readonly options: ExpressThrowerOptions
	/** Callback function to execute before sending the response */
	readonly callback: Callback | undefined

	/**
	 * Creates a new ExpressThrower instance.
	 * @param status - The HTTP status code
	 * @param message - Optional message (string or object) or undefined to use default status message
	 * @param optionsOrCallback - Optional options object or callback function
	 * @param callback - Optional callback function (when optionsOrCallback is an object)
	 */
	constructor(status: SC, ...params: ParamsOptions)
	constructor(status: SC, ...params: ParamsCallback)
	constructor(status: SC, ...params: ParamsOptionsCallback)
	constructor(
		status: SC,
		...[message, optionsOrCallback, callback]: ParamsFull
	) {
		if (message === undefined) {
			super(statuses(status))
		} else if (typeof message === 'string') {
			super(message)
		} else {
			super(JSON.stringify(message))
			this.json = message
		}
		this.callback =
			typeof optionsOrCallback === 'function' ? optionsOrCallback : callback
		const options =
			typeof optionsOrCallback === 'object' ? optionsOrCallback : {}
		this.options = { redirect: redirect[status], ...options }
		this.status = status
	}

	/**
	 * Sends the HTTP response. This method is called by the express-throw middleware.
	 * @returns The response object
	 */
	send(req: Request): never
	send(res: Response): Response
	send(req: Request, res: Response): Response
	send(reqOrRes: Request | Response, response?: Response) {
		const req = response ? (reqOrRes as Request) : undefined
		const res = response ?? (reqOrRes as Response)
		this.callback?.(req, res)
		if (res.closed) return res
		sendOptions(res, this.options)
		if (this.options.redirect) return res.redirect(this.status, this.message)
		return res.status(this.status).send(this.json ?? this.message)
	}

	/**
	 * Sends only the status code without a body.
	 * @param res - The Express response object
	 * @returns The response object
	 */
	sendStatus(res: Response): Response {
		return res.sendStatus(this.status)
	}
}

export default ExpressThrower
