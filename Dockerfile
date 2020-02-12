FROM node:10.17.0
EXPOSE 8082
WORKDIR /app/
COPY ./ .
RUN npm install
RUN npm install -g pm2 
