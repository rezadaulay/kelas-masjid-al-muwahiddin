import * as z from 'zod'

const environmentSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'production', 'test'])
    .default('development'),
  SUPABASE_URL: z.string().min(1),
  SUPABASE_KEY: z.string().min(1),
  WA_ENDPOINT: z.string().min(1),
  REDIS_HOST: z.string().min(1),
  REDIS_PORT: z.string().min(1),
  REDIS_PASS: z.string().min(1),
  GA_ID: z.string().min(1),
})

const environment = () => environmentSchema.parse(process.env)

export { environment }
