FROM node:lts as APP

WORKDIR /app

COPY . /app

RUN yarn install

RUN yarn build

RUN yarn global add serve

EXPOSE 5000

CMD ["serve", "-s", "build"]
