FROM node:20


ENV PORT=3000
EXPOSE $PORT


WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci

USER node

CMD npm start