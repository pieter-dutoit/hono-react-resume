import { Hono } from 'hono'
const app = new Hono()

import { serveStatic } from 'hono/bun'

import { csrf } from 'hono/csrf'
import { logger } from 'hono/logger'
import { skillsRoute } from './routes/skills'

app.use(logger())
// app.use(csrf())

app.route('api/skills', skillsRoute)
app.get('*', serveStatic({ path: './frontend/dist' }))
app.get('*', serveStatic({ path: './frontend/dist/index.html' }))

export default app
