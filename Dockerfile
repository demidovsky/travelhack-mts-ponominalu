FROM node:alpine

RUN npm install -g serve

# COPY . .
# RUN npm run build

COPY build build

CMD [ "serve", "-s", "build" ]