import { PACKAGES } from '../../src/consts';
import { Prisma } from '@prisma/client';

export const packageData: Prisma.PackageCreateManyInput[] = [
  {
    id: PACKAGES[0],
    productName: '100mh/s Dedicated',
    amount: 995,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 100,
  },
  {
    id: PACKAGES[1],
    productName: '300mh/s Dedicated',
    amount: 2985,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 300,
  },
  {
    id: PACKAGES[2],
    productName: '900mh/s Dedicated',
    amount: 8955,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 900,
  },
  {
    id: PACKAGES[3],
    productName: '500mh/s Dedicated',
    amount: 995,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 500,
  },
  {
    id: PACKAGES[4],
    productName: '3500mh/s Dedicated',
    amount: 6965,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 3500,
  },
  {
    id: PACKAGES[5],
    productName: '2500mh/s Dedicated',
    amount: 4975,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 2500,
  },
  {
    id: PACKAGES[6],
    productName: '1500mh/s Dedicated',
    amount: 2985,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 1500,
  },
  {
    id: PACKAGES[7],
    productName: '1000mh/s Dedicated',
    amount: 1990,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 1000,
  },
  {
    id: PACKAGES[8],
    productName: '(1) Share - 500mh/s Power',
    amount: 995,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 500,
  },
  {
    id: PACKAGES[9],
    productName: '(2) Shares - 1000mh/s Power',
    amount: 1990,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 1000,
  },
  {
    id: PACKAGES[10],
    productName: '(3) Shares - 1500mh/s Power',
    amount: 2985,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 1500,
  },
  {
    id: PACKAGES[11],
    productName: '(5) Shares - 2500mh/s Power',
    amount: 4975,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 2500,
  },
  {
    id: PACKAGES[12],
    productName: '(7) Shares - 3500mh/s Power',
    amount: 6965,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 3500,
  },
  {
    id: PACKAGES[13],
    productName: 'Free Share - 500mh/s Power',
    amount: 0,
    status: false,
    date: '2024-06-25T12:18:46.365Z',
    token: 500,
  },
  {
    id: PACKAGES[14],
    productName: 'Free Share - 100mh/s Power',
    amount: 0,
    status: true,
    date: '2024-06-25T12:18:46.365Z',
    token: 100,
  },
  {
    id: PACKAGES[15],
    productName: '(1) Share - 100mh/s Power',
    amount: 995,
    status: true,
    date: '2024-06-25T12:18:46.365Z',
    token: 100,
  },
  {
    id: PACKAGES[16],
    productName: '(3) Shares - 300mh/s Power',
    amount: 2985,
    status: true,
    date: '2024-06-25T12:18:46.365Z',
    token: 300,
  },
  {
    id: PACKAGES[17],
    productName: '(9) Shares - 900mh/s Power',
    amount: 8955,
    status: true,
    date: '2024-06-25T12:18:46.365Z',
    token: 900,
  },
  {
    id: PACKAGES[18],
    productName: '(2) Shares - 200mh/s Power',
    amount: 1990,
    status: true,
    date: '2024-06-22T17:08:24.023Z',
    token: 200,
  },
];