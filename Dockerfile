FROM alpine:latest

RUN apk add npm

WORKDIR server

COPY . .

RUN npm install

CMD node server.js