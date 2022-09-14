FROM node:16-alpine3.16 as dependencies
WORKDIR /happy_puppy_front
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:16-alpine3.16 as builder
WORKDIR /happy_puppy_front
COPY . .
COPY --from=dependencies /happy_puppy_front/node_modules ./node_modules
RUN yarn build

FROM node:16-alpine3.16 as runner
WORKDIR /happy_puppy_front
ENV NODE_ENV production
COPY --from=builder /happy_puppy_front/next.config.js ./
COPY --from=builder /happy_puppy_front/public ./public
COPY --from=builder /happy_puppy_front/.next ./.next
COPY --from=builder /happy_puppy_front/node_modules ./node_modules
COPY --from=builder /happy_puppy_front/package.json ./package.json

EXPOSE ${FRONT_PORT}
CMD ["yarn", "start"]