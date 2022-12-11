FROM node:17

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN npm install

COPY . ./

EXPOSE $PORT

CMD ["node", "index.js"]

