import { Package } from '@prisma/client';

export enum UserRole {
  Admin = 'Admin',
}

enum UserGroupRole {
  None = 'None',
  Viewer = 'Viewer',
  Editor = 'Editor',
  Owner = 'Owner',
}

export interface SaleReport {
  hashPower: number;
  members: object;
}

export interface SaleReportInput {
  invoiceNo: number;
  memberId: string;
  userId: string;
  packageName: string;
  orderedAt: Date;
  paymentMethod: string;
}

export interface GroupedByCreatedAt {
  issuedAt: Date;
  _count: {
    _all: number;
  };
}

export interface MineStatInput {
  issuedAt: Date;
  totalBlocks?: number;
  totalHashPower?: number;
  newBlocks: number;
  difficulty?: number;
}

export interface UserGroupPermission {
  Report: UserGroupRole;
  Vendor: UserGroupRole;
  Account: UserGroupRole;
  Customer: UserGroupRole;
  CreditCard: UserGroupRole;
  BankAccount: UserGroupRole;
  BatchUpload: UserGroupRole;
  ApprovalAmount: number;
}

export interface RPCCOMMAND {
  method: string;
  params?: any[];
}

declare global {
  namespace PrismaJson {
    // you can use classes, interfaces, types, etc.
    type UserGroupPermissionJSON = UserGroupPermission;
  }
}

export interface SaleSearchResult {
  memberId: string;
  package: Package;
}
