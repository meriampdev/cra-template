FROM node:10.17.0
EXPOSE 8082
WORKDIR /app/
COPY package.json .
RUN npm install
RUN rm package.json
RUN npm install -g pm2 
