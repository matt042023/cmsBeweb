FROM node:21

WORKDIR /usr/src/app

COPY build/ .

RUN npm install -g serve

EXPOSE 14000

CMD ["serve", "." , "-l", "14000"]
