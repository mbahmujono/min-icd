import { z } from 'zod'
import { publicProcedure, router } from '../trpc'

export const appRouter = router({
    hello: publicProcedure
        .input(
            z.object({
                name: z.string().nullish()
            })
        )
        .query(({ input }) => {
            return {
                greeting: `hello ${input?.name ?? 'world'}`
            }
        })
});

// export type
export type appRouter = typeof appRouter;