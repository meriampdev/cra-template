FROM node:10.17.0
EXPOSE 8082
COPY package.json .
RUN npm install
RUN npm install -g pm2 
WORKDIR /app/