FROM node:20

EXPOSE 5173
WORKDIR /usr/src/app

COPY . .

# Change npm ci to npm install since we are going to be in development mode
RUN npm install


ENV VITE_BACKEND_URL=http://localhost:3000/

 
CMD ["npm", "run", "dev", "--", "--host"]

