import { api } from './api'
import { z, ZodError } from 'zod'

const moviesSchema = z.object({
  id: z.number(),
  title: z.string(),
  price: z.number(),
  image: z.string(),
})

const getMoviesSchema = z.array(moviesSchema)

export type TProducts = z.infer<typeof getMoviesSchema>

export async function getMovies () {
  try {
    const response = await api.get('/productss')

    const data = await response.data

    return getMoviesSchema.parse(data)
  } catch (error: any) {
    if (error instanceof ZodError) {
      return console.error(error.issues[0].message)
    }
    throw Error(error)
  }
}
