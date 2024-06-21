const { PrismaClient } = require('@prisma/client');
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
                  symbol: 'AAPL',
                  price: 150.0,
                  quantity: Math.floor(Math.random() * 100) + 1,
                },
                {
                  symbol: 'GOOGL',
                  price: 2800.0,
                  quantity: Math.floor(Math.random() * 100) + 1,
                },
                {
                  symbol: 'AMZN',
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
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
});
