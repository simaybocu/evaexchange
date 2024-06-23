# Build Arguments
FROM node:18 as build

WORKDIR /tmp/app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --silent

# Copy source
COPY . .

# Build
RUN npm run build

# -------------------
FROM node:18-alpine

WORKDIR /app

# Copy source
COPY . .

# Copy built files
COPY --from=build /tmp/app/dist .

# Generate database migrations
RUN npm install -g prisma
RUN npm run db:gen

# Build and cleanup
ENV NODE_ENV=production
RUN npm ci --omit=dev

# Start server
CMD ["node", "./dist/src/index.js"]