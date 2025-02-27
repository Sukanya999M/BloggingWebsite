import { Hono } from 'hono'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import {sign, verify} from "hono/jwt"
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import {cors} from 'hono/cors'


const app = new Hono<{
	Bindings: {
		DATABASE_URL: string,
    JWT_SECRET: string
	}
}>();
app.use('*', cors())
app.route("/api/v1/user",userRouter)
app.route("/api/v1/blog",blogRouter)

// create a feature to get the top 5 blogs currently based on the viewcount


// postgresql://KiratCohort_owner:IhYWBX5C9dlM@ep-purple-star-a5rh5fdr.us-east-2.aws.neon.tech/KiratCohort?sslmode=require

//DATABASE_URL="prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiMDg4YTQxMDgtYTg0Yy00OWU0LTk2MGItZjdkODdkNWJjMmY5IiwidGVuYW50X2lkIjoiMDllOGQyNzM0OGEzNTIwNjkyODQyODUyZTc4YTZjMDc5NWJiYzU4ZTg0YWVkYjZhOTkwNWMwYjFlYzZlYTY4OSIsImludGVybmFsX3NlY3JldCI6IjNmMTRhYjFkLTJmM2UtNGU4Yy05NzQ3LTc3ZDczMmJhMDdlYiJ9.Z3I8w2XPu8Zid8Z-YBROrNiC70vIVOof9R7s0OaND8s"



export default app
