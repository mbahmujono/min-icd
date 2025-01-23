import { createTRPCNuxtClient, httpBatchLink } from 'trpc-nuxt/client'
import type { appRouter } from '~/server/trpc/routers'

export default defineNuxtPlugin(() => {
  /**
   * createTRPCNuxtClient adds a `useQuery` composable
   * built on top of `useAsyncData`.
   */
  const trpcClient = createTRPCNuxtClient<appRouter>({
    links: [
      httpBatchLink({
        url: '/api/trpc',
      }),
    ]
  })

  return {
    provide: {
      trpcClient,
    },
  }
})
