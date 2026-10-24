# SuperMarket

SuperMarket is a full-stack project with a Nuxt/Vue frontend and a NestJS API. The frontend and API are maintained as separate applications in this repository.

> **Project status:** Both applications are currently at an early scaffold stage. The frontend still renders Nuxt's welcome screen, and the API's domain modules are placeholders without implemented CRUD endpoints. The API is configured to connect to PostgreSQL using Prisma.

## Project structure

```text
.
├── frontend/        # Nuxt 4 and Vue 3 application
└── supermarket-api/ # NestJS 12 API
```

The API is organized into modules for products, categories, suppliers, purchases, supplier payments, stock, sales, expenses, cash accounts, dashboard data, and reports. These modules establish the intended organization; their business logic and routes still need to be implemented.

## Requirements

- Node.js and npm
- pnpm for the frontend
- PostgreSQL for the API

Use a Node.js version supported by the installed Nuxt and NestJS dependencies.

## Install dependencies

Install dependencies separately for each application:

```bash
cd frontend
pnpm install
```

```bash
cd supermarket-api
npm install
```

## Run locally

Start the frontend in one terminal:

```bash
cd frontend
pnpm dev
```

The Nuxt development server is available at `http://localhost:3000`.

Start the API in another terminal:

```bash
cd supermarket-api
npm run start:dev
```

Before starting the API, configure its PostgreSQL connection and initialize the database as described in [Configuration and data storage](#configuration-and-data-storage). The API listens on port `8080` by default. Set the `PORT` environment variable to use another port. Its root route (`GET /`) currently returns a basic running-status response.

The frontend does not currently have API integration configured.

## Tests and builds

Run frontend unit tests:

```bash
cd frontend
pnpm test:unit
```

Run frontend end-to-end tests:

```bash
cd frontend
pnpm test:e2e
```

Build the frontend:

```bash
cd frontend
pnpm build
```

Run API tests:

```bash
cd supermarket-api
npm test
```

Run API end-to-end tests:

```bash
cd supermarket-api
npm run test:e2e
```

Build the API:

```bash
cd supermarket-api
npm run build
```

## Configuration and data storage

The API uses Prisma with PostgreSQL. Its Prisma schema is in `supermarket-api/prisma/schema.prisma`; the API connects through Prisma's PostgreSQL adapter using `DATABASE_URL`. A PostgreSQL server and database must be available before starting the API.

Create `supermarket-api/.env` with your connection string (replace the example credentials and database name as needed):

```dotenv
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/supermarket?schema=public"
```

The `.env` file is ignored by Git; do not commit database credentials. From the `supermarket-api` directory, apply the Prisma schema to a new or empty database and generate the Prisma client:

```bash
npx prisma migrate dev --name init
npx prisma generate
```

The API requires a valid `DATABASE_URL` at startup. The `PORT` environment variable configures its listening port.
