import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "../trpc";

type Lead = {
  id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  vip: boolean;
  Campaign?: Campaign;
  campaignId?: string;
};
type Campaign = {
  id: string;
  title: string;
  leads: Lead[];
  completed: boolean;
  caughtError: boolean;
  createdAt: Date;
  completedAt?: Date;
  type: string;
};

export const CampaignRouter = createTRPCRouter({
  all: protectedProcedure.query(({ ctx }) => {
    return ctx.prisma.campaign.findMany({ orderBy: { id: "desc" } });
  }),
  byId: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.campaign.findFirst({ where: { id: input.id } });
    }),
  createCampaign: protectedProcedure
    .input(
      z.object({
        id: z.string().min(1),
        title: z.string().min(1),
        leads: z.any(),
        createdAt: z.date(),
        completedAt: z.date(),
        type: z.enum(["EMAIL", "POST", "WEB"]),
        caughtError: z.boolean(),
        completed: z.boolean(),
      }),
    )
    .mutation(({ ctx, input }) => {
      return ctx.prisma.campaign.create({ data: input });
    }),
  delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
    return ctx.prisma.campaign.delete({ where: { id: input } });
  }),
});
