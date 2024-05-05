FROM alpine:3.18
ENV NODE_VERSION 22.1.0
WORKDIR /src
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm install
COPY ./src ./src
COPY ./.env ./
CMD "npm build; npm start;
