import type { Request, Response } from 'express'

export interface Options {
	filename?: string
	redirect?: boolean
	headers?: Record<string, string>
}

export type Callback = (
	req: Request | undefined,
	res: Response,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
) => any

export type ParamsFull = [
	message?: string | object,
	optionsOrCallback?: Options | Callback | undefined,
	callback?: Callback | undefined,
]
export type ParamsOptions = [
	message?: string | object,
	options?: Options | undefined,
]
export type ParamsCallback = [
	message?: string | object,
	callback?: Callback | undefined,
]
export type ParamsOptionsCallback = [
	message?: string | object,
	options?: Options | undefined,
	callback?: Callback | undefined,
]
export type ExpressThrowerParams =
	| ParamsOptions
	| ParamsCallback
	| ParamsOptionsCallback
