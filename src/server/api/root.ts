import { exampleRouter } from "~/server/api/routers/example";
import { createTRPCRouter } from "~/server/api/trpc";
import { produtoRouter } from "./routers/produtos";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  // example: exampleRouter,
  produto: produtoRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
