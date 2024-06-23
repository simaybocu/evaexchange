import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create 5 users
  for (let i = 1; i <= 5; i++) {
    const user = await prisma.user.create({
      data: {
        name: `User${i}`,
        portfolio: {
          create: {
            shares: {
              create: [
                {
                  symbol: 'APL',
                  price: 150.0,
                  quantity: Math.floor(Math.random() * 100) + 1,
                },
                {
                  symbol: 'GGL',
                  price: 2800.0,
                  quantity: Math.floor(Math.random() * 100) + 1,
                },
                {
                  symbol: 'AMZ',
                  price: 3400.0,
                  quantity: Math.floor(Math.random() * 100) + 1,
                },
              ],
            },
          },
        },
      },
    });

    console.log(`Created user with id: ${user.id}`);
  }
}

main()
  .catch((e: Error) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
