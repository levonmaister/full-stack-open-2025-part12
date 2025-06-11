FROM node:20

EXPOSE 5173

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ENV VITE_BACKEND_URL=http://localhost:8080

RUN npm test
 
RUN npm run build

RUN npm install -g serve

CMD ["serve", "-s", "dist", "-l", "5173"]