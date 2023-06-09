FROM node:current-alpine3.17

WORKDIR node

COPY . .

RUN npm install
RUN npm install nodemon -g

CMD nodemon server.js