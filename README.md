# express-throw

A library for throwing HTTP responses as errors in Express.js applications.

## Benefits

-   Its syntax makes code extremely readable.
-   It makes it very easy to early return.
-   It really shines in deeply nested function calls. It can be very useful to prevent having to pass `Response` objects to deeply nested functions.
-   It can handle arbitrarily complex cases thanks to the callback function. It can even be used to access the `Request` and `Response` objects in deeply nested function calls right before the response is sent.

## Setup

Import the middleware and add it to your Express app.

**Important:** It is very important to add the middleware in the correct order. It must come

-   after your routes
-   before your error handler.

```typescript
import express from 'express'
import expressThrow from 'express-throw'

import apiRouter from './apiRouter'
import errorHandler from './errorHandler'

const app = express()

// Define your routes
app.use('/api', apiRouter)

// Add the error handling middleware
app.use(expressThrow)

// It must come before your error handler, if any
app.use(errorHandler)
```

## Usage

### Throw responses

It will send the response with the appropriate status code and body. You can also provide a custom string message or a JSON object.

```typescript
import { Router } from 'express'
import { NotFound, BadRequest, Unauthorized } from 'express-throw'

const api = Router()

api.get('/users/:id', async (req, res) => {
	const auth = await getAuth(req)
	if (!auth) throw new Unauthorized() // Response body will be `"Unauthorized"` by default

	const userId = req.params.id
	if (!userId) throw new BadRequest('User ID is required')

	// ... rest of your logic
})

api.get('/api/data', (req, res) => {
	// Throw with custom JSON response
	throw new NotFound({
		error: 'Data not found',
		code: 'DATA_NOT_FOUND',
	})
})
```

### Custom behaviors

The second argument of the constructor accepts a callback function that is called right before the response is sent.

It can be very useful to perform custom actions and to access the request and response objects in deep function calls.

```typescript
import { ExpressThrower } from 'express-throw'

async function findImage(id: string) {
	// ...
	if (!image)
		throw new NotFound('Image not found', (req, res) => {
			res.set('X-Image-Id', id)
			res.set('X-Trace-Id', req.headers['x-trace-id'])
		})
}
```

### Utilities

The second argument can also be an `ExpressThrowerOptions` object with some shortcuts. It can be combined with a callback function too (third argument).

```typescript
interface ExpressThrowerOptions {
	filename?: string // Set Content-Disposition header for file downloads
	redirect?: boolean // Use res.redirect() instead of res.send()
	headers?: Record<string, string> // Custom headers
}
```

### Intercepting errors

You can intercept any `ExpressThrower` error by catching it.

```typescript
try {
	functionThatThrows()
} catch (err) {
	if (err instanceof ExpressThrower && err.status === 404)
		console.log('Intercepted 404 error')
	throw err
}
```

**Important:** Be aware that if you catch an `ExpressThrower` error, the response will not be sent. Therefore, if you have a function that may throw an `ExpressThrower` error, you should rethrow it. The `expressRethrow` is a shorthand for this.

```typescript
try {
	functionThatThrowsDifferentErrors()
} catch (err) {
	expressRethrow(err) // ensure that `ExpressThrower` errors are rethrown

	// handle other errors
	console.log(err)
}
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
