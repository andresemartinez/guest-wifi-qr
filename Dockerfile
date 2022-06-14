FROM node:16.13.1-alpine AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

FROM nginx:latest-alpine

COPY --from=builder /app/dist /usr/share/nginx/html
