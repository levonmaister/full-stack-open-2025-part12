FROM node:20


ENV PORT=3000
EXPOSE $PORT


WORKDIR usr/src/app

COPY --chown=node:node . .

RUN npm install

ENV MONGO_URL=mongodb://the_username:the_password@localhost:3456/the_database
ENV REDIS_URL=//localhost:6379

USER node

CMD npm run dev