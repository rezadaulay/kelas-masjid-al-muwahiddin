import * as z from 'zod'

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  SUPABASE_URL: z.string().min(1),
  SUPABASE_KEY: z.string().min(1),
})

const environment = () => environmentSchema.parse(process.env)

export { environment }
