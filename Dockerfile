FROM node:16-alpine as dependencies
WORKDIR /vape-moysklad
COPY package*.json ./
RUN npm ci

FROM node:16-alpine as builder
WORKDIR /vape-moysklad
COPY . .
COPY --from=dependencies /vape-moysklad/node_modules ./node_modules
RUN npm run build

FROM node:16-alpine as runner
WORKDIR /vape-moysklad
ENV NODE_ENV production

COPY --from=builder /vape-moysklad/public ./public
COPY --from=builder /vape-moysklad/package.json ./package.json
COPY --from=builder /vape-moysklad/.next ./.next
COPY --from=builder /vape-moysklad/node_modules ./node_modules

EXPOSE 3000
CMD ["npm", "run", "start"]