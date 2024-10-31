import { Hono } from 'hono'
import { z } from 'zod'
import { zValidator } from '@hono/zod-validator'

const skillSchema = z.object({
	id: z.number(),
	name: z.string(),
})

type Skill = z.infer<typeof skillSchema>

const createSkillSchema = skillSchema.omit({ id: true })

export const skillsRoute = new Hono()
	.get('/', async (c) => {
		return c.json({ skills: [] })
	})
	.post('/', zValidator('json', createSkillSchema), async (c) => {
		try {
			const data = await c.req.valid('json')
			console.log(data)
			return c.json({}, 201)
		} catch (error) {
			console.error(error)
			return c.text('Server error', 500)
		}
	})
	.delete('/:id{[0-9]+}', (c) => {
		return c.json({})
	})
