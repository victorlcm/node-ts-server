# Builder stage.
FROM node:fermium AS builder

WORKDIR /app

COPY package*.json ./

COPY tsconfig*.json ./

RUN npm ci

COPY ./src ./src

RUN npm run build

# Production stage.
FROM node:fermium-slim

WORKDIR /app
ENV NODE_ENV=production

COPY config ./config
COPY package*.json ./
RUN npm ci --quiet --only=production

## Copy just dist from builder
COPY --from=builder /app/dist ./dist

CMD ["node", "./dist/index.js"]
