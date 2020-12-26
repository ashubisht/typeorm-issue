FROM node:lts-alpine

# --no-cache: download package index on-the-fly, no need to cleanup afterwards
# --virtual: bundle packages, remove whole bundle at once, when done
RUN apk --no-cache --virtual build-dependencies add \
  python \
  make \
  g++ \
  jq

WORKDIR /app

COPY yarn.lock /app
COPY package.json /app

COPY packages/api/package.json /app/packages/api/package.json

RUN yarn install --pure-lockfile

COPY packages/api /app/packages/api

RUN yarn workspace api compile

ENV NODE_ENV production
ENV PORT 80

EXPOSE 80

CMD yarn workspace api node --max-old-space-size=3072 ./dist/index.js
