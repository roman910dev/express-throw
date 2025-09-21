import type { Request, Response } from 'express'

export interface ExpressThrowerOptions {
	filename?: string
	redirect?: boolean
	headers?: Record<string, string>
}

export type Callback = (
	req: Request | undefined,
	res: Response,
	// biome-ignore lint/suspicious/noExplicitAny: give more flexibility
) => any

export type ParamsFull = [
	message?: string | object,
	optionsOrCallback?: ExpressThrowerOptions | Callback | undefined,
	callback?: Callback | undefined,
]
export type ParamsOptions = [
	message?: string | object,
	options?: ExpressThrowerOptions | undefined,
]
export type ParamsCallback = [
	message?: string | object,
	callback?: Callback | undefined,
]
export type ParamsOptionsCallback = [
	message?: string | object,
	options?: ExpressThrowerOptions | undefined,
	callback?: Callback | undefined,
]
export type ExpressThrowerParams =
	| ParamsOptions
	| ParamsCallback
	| ParamsOptionsCallback
