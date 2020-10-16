# Builder stage.
FROM node:12 AS builder

WORKDIR /app

COPY package*.json ./

COPY tsconfig*.json ./

COPY ./src ./src

RUN npm ci && npm run build

# Production stage.
FROM node:12-slim

WORKDIR /app
ENV NODE_ENV=production

COPY package*.json ./
RUN npm ci --quiet --only=production

## Copy just dist from builder
COPY --from=builder /app/dist ./dist

CMD ["node", "./dist/index.js"]