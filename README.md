# Eva Exchange

The purpose of the application is to educate users on the terminology used in trading of shares.

## Start for Docker

The following 3 commands are enough to run Docker:

1. `npm run dc:dev:up`
2. `docker exec -it evaexchange npm run db:mig:deploy`
3. `docker exec -it evaexchange npm run db:seed`

## Installation for Development

Duplicate .env.example and edit it to .env

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


## Available Scripts

For development purposes, you can use the following npm scripts:
** The `npm run` command must be in front before running the commands. Ex: `npm run dev`
** For local use, change .env.example to .env and define the values correctly.

### `build`

Builds the project for production. It first cleans the `dist/` folder, then compiles TypeScript code to JavaScript using `tsc`.

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