# Eva Exchange

The purpose of the application is to educate users on the terminology used in trading of shares.

## Available Scripts

For development purposes, you can use the following npm scripts:
** The `npm run` command must be in front before running the commands. Ex: `npm run dev`
** For local use, change .env.example to .env and define the values correctly.

### `build`

Builds the project for production. It first cleans the `dist/` folder, then compiles TypeScript code to JavaScript using `tsc`. It also runs the `copyAssets` script using `ts-node` and `tsconfig-paths`.

### `start`

Runs the compiled production code.

### `db:mig:init`

Initializes database migration and saves it with a name `init`.


### `db:mig:deploy`

Deploys database migration.

### `db:mig:reset`

Resets the database and rolls back all database migrations.

### `db:gen`

Regenerates Prisma models and CRUD operations.

### `db:push`

Pushes the database schema and migrations to the database.

### `db:seed`

Runs a script to seed the database with sample data.

### `lint`

Lints all TypeScript files using `eslint`.

### `lint:fix`

Automatically fixes `eslint` errors in all TypeScript files.

## Installation and Setup

### `npm i`

Installs project dependencies.

### `npm run db:gen`

Generates Prisma models and CRUD operations.

### `npm run db:mig:deploy`

Deploys database migration.

### `npm run db:seed`

Runs database seeding.

### `npm run dev`

Starts the server in development mode with hot reloading.


## Start for Docker

docker-compose -f docker-compose.dev.yml up --build -d