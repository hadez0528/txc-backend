import type { Prisma } from '@prisma/client';
import { ObjectType, InputType, Field, ArgsType, ID } from 'type-graphql';

import { PaginatedResponse } from '@/graphql/paginatedResponse';
import { QueryArgsBase } from '@/graphql/queryArgs';

import { Statistics } from '@/entity/statistics/statistics.entity';

// Statistics Query Args
@ArgsType()
export class StatisticsQueryArgs extends QueryArgsBase<Prisma.StatisticsWhereInput> {}

// Statistics list response with pagination ( total )
@ObjectType()
export class StatisticsResponse extends PaginatedResponse {
  @Field(() => [Statistics], { nullable: 'itemsAndList' })
  statistics?: Statistics[];
}

// Create Statistics Input and Response
@InputType()
export class CreateStatisticsInput {
  @Field(() => ID, { nullable: true })
  id?: string;

  @Field()
  totalHashPower: number;

  @Field()
  totalMembers: number;
}

@InputType()
export class ConfirmStatistics {
  @Field()
  id: string;
}

@ObjectType()
export class PendingStatistics {
  @Field()
  wallet: string;
  @Field()
  txcShared: number;
}

@ObjectType()
export class PendingStatisticsResponse {
  @Field(() => [PendingStatistics])
  results: PendingStatistics[];
}

@InputType()
export class UpdateStatisticsInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  txcShared?: number;

  @Field({ nullable: true })
  status?: boolean;
}
