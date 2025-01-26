import { z } from 'zod'
import { publicProcedure, router } from '../trpc'
import { ICDService } from '~/lib/services/icd.service';

export const appRouter = router({
    hello: publicProcedure
        .input(
            z.object({
                prompt: z.string().nullish()
            })
        )
        .query(async ({ input }) => {
            try {
                const prompt = input?.prompt ?? ''; // Default to an empty string if `name` is not provided
                const resp = await ICDService.generateICDFromPrompt(prompt); // Await the response

                const text = resp.response?.candidates?.[0]?.content?.parts?.[0]?.text

                return {
                    text, // Return the result from the service
                };
            } catch (error) {
                console.error('Error generating ICD:', error);
                throw new Error('Failed to generate ICD from prompt'); // Customize the error message for clients
            }
        })
});

// export type
export type appRouter = typeof appRouter;