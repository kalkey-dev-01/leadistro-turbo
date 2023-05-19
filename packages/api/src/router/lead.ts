import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

export const LeadsRouter = createTRPCRouter({
  all: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.lead.findMany({ orderBy: { id: "desc" } });
  }),
  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.lead.findFirst({ where: { id: input.id } });
    }),
  createLead: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        firstName: z.string(),
        lastName: z.string(),
        phoneNumber: z.string(),
        email: z.string(),
        vip: z.boolean(),
        Campaign: z.any().optional(),
        campaignId: z.string().optional(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.lead.create({ data: input });
    }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.lead.delete({ where: { id: input } });
  }),
});
