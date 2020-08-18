FROM node:12.18.2-slim

WORKDIR /usr/src/api

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "start"]
