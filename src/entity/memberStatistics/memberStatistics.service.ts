import { Service, Inject } from 'typedi';

import { PrismaService } from '@/service/prisma';

import {
  CreateManyMemberStatisticsInput,
  CreateMemberStatisticsInput,
  MemberStatisticsIDsInput,
  MemberStatisticsQueryArgs,
  StatisticIDInput,
} from './memberStatistics.type';
import { Prisma } from '@prisma/client';

@Service()
export class MemberStatisticsService {
  constructor(
    @Inject(() => PrismaService)
    private readonly prisma: PrismaService
  ) {}

  async getMemberStatistics(params: MemberStatisticsQueryArgs) {
    return this.prisma.memberStatistics.findMany({
      where: params.where,
      orderBy: params.orderBy,
      ...params.parsePage,
    });
  }

  async getMemberStatisticsCount(params: MemberStatisticsQueryArgs): Promise<number> {
    return this.prisma.memberStatistics.count({ where: params.where });
  }

  async getMemberStatisticsById(id: string) {
    return this.prisma.memberStatistics.findUnique({
      where: {
        id,
      },
    });
  }

  async createMemberStatistics(data: CreateMemberStatisticsInput) {
    return this.prisma.memberStatistics.create({
      data,
    });
  }

  async createManyMemberStatistics(data: CreateManyMemberStatisticsInput) {
    return this.prisma.memberStatistics.createMany({
      data: data.memberStatistics,
    });
  }

  async removeManyMemberStatistics(data: MemberStatisticsIDsInput) {
    return this.prisma.memberStatistics.deleteMany({
      where: {
        id: {
          in: data.ids,
        },
      },
    });
  }

  async removeMemberStatisticsByStatisticId(data: StatisticIDInput) {
    return this.prisma.memberStatistics.deleteMany({
      where: {
        statisticsId: data.id,
      },
    });
  }

  async getTotalTXCShared(memberId: string) {
    const { _sum: data } = await this.prisma.memberStatistics.aggregate({
      _sum: {
        txcShared: true,
      },
      where: {
        memberId,
      },
    });

    return data;
  }

  async getMemberStatistic(query: Prisma.MemberStatisticsFindFirstArgs) {
    return this.prisma.memberStatistics.findFirst(query);
  }
}
