FROM node:17

WORKDIR /app

ADD . /app

ARG NODE_ENV
RUN npm install


CMD ["node", "index.js"]

