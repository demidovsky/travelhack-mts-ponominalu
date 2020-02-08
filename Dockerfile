FROM node:alpine

RUN npm install -g serve

COPY . .

RUN npm run build

CMD [ "serve", "-s", "build" ]