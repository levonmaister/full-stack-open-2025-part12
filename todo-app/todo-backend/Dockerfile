FROM node:20


ENV PORT=3000
EXPOSE $PORT


WORKDIR usr/src/app

COPY --chown=node:node . .

RUN npm ci

ENV MONGO_URL=mongodb://the_username:the_password@mongo:27017/the_database
ENV REDIS_URL=//redis:6379

USER node

CMD npm start