FROM node:current-alpine3.17

WORKDIR /api
COPY package-lock.json package-lock.json
COPY package.json package.json

RUN npm install
RUN npm install nodemon -g

CMD nodemon server.js