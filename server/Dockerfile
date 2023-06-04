FROM node:16-alpine3.11 as build

WORKDIR /home/app/api
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
COPY . .
RUN ls -la
EXPOSE 3001


CMD ["npm", "run", "start:prod"]
