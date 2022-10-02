import { z } from 'zod'
import * as dotenv from 'dotenv'

export const environment = z
  .object({
    PORT: z.string().transform((port) => Number(port)),
    NODE_ENV: z.enum(['dev', 'prod']),
  })
  .parse(dotenv.config().parsed)
