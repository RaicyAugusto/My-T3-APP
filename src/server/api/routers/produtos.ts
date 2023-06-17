import {  z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";  

export const produtoRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ctx})=>{
    return ctx.db.produto.findMany();
}),
  create: publicProcedure.input(z.object({
    nome: z.string(),
    subtitulo: z.string().nonempty(),
    descricao: z.string().nonempty(),
    preco: z.number().positive()
  })).mutation(async ({ctx, input}) =>{
    return ctx.db.produto.create({
      data: {
        nome: input.nome,
        subtitulo: input.subtitulo,
        descricao: input.descricao,
        preco: input.preco
      }
    })
  }),
  update: publicProcedure
  .input(
    z.object({
      id: z.string().nonempty(),
      data: z.object({
        nome: z.string().optional(),
        subtitulo: z.string().optional(),
        descricao: z.string().optional(),
        preco: z.number().optional(),
      }),
    })
  )
  .mutation(async ({ ctx, input }) => {
    const { id, data } = input;

    return ctx.db.produto.update({
      where: { id },
      data,
    });
  })  
})