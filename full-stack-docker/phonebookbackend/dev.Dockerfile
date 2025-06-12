FROM node:20

ENV PORT=3000
EXPOSE $PORT

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm install

USER node

CMD npm run dev

