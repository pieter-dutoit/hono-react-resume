import app from './app'

Bun.serve({
	port: process.env.PORT || 3000,
	fetch: app.fetch,
	error(error) {
		return new Response(`<pre>${error}\n${error.stack}</pre>`, {
			headers: {
				'Content-Type': 'text/html',
			},
		})
	},
})
