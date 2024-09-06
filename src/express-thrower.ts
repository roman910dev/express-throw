import type { Request, Response } from 'express'
import statuses from 'statuses'

import type { StatusCode as SC } from './status-type'
import type {
	Callback,
	Options,
	ParamsCallback,
	ParamsFull,
	ParamsOptions,
	ParamsOptionsCallback,
} from './types'

function sendOptions(res: Response, options: Options) {
	if (options.filename) {
		res.setHeader(
			'Content-Disposition',
			`attachment; filename="${options.filename}"`,
		)
		res.setHeader('Content-Type', 'application/octet-stream')
	}
	if (options.headers) res.set(options.headers)
}

export class ExpressThrower extends Error {
	status: SC
	json: object | undefined
	options: Options
	callback: Callback | undefined

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
			typeof optionsOrCallback === 'function'
				? optionsOrCallback
				: callback
		this.options =
			typeof optionsOrCallback === 'object' ? optionsOrCallback : {}
		this.status = status
	}

	send(req: Request): never
	send(res: Response): Response
	send(req: Request, res: Response): Response
	send(reqOrRes: Request | Response, response?: Response) {
		const req = response ? (reqOrRes as Request) : undefined
		const res = response ?? (reqOrRes as Response)
		this.callback?.(req, res)
		if (res.closed) return res
		sendOptions(res, this.options)
		if (this.options.redirect)
			return res.redirect(this.status, this.message)
		return res.status(this.status).send(this.json ?? this.message)
	}

	sendStatus(res: Response) {
		return res.sendStatus(this.status)
	}
}

export default ExpressThrower
