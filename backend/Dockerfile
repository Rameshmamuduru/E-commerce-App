FROM node:20-alpine

LABEL maintainer="Ramesh Mamuduru"
LABEL description="Dockerfile for Backend of E-commerce App"

WORKDIR /app

COPY package*.json ./
RUN npm install

RUN npm install -g pm2

COPY . .

EXPOSE 3000

CMD ["pm2-runtime", "npm", "--", "start"]
