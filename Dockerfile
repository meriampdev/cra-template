FROM node:10.17.0
EXPOSE 8082
COPY package.json .
RUN npm install
CMD pm2-runtime start node_modules/react-scripts/scripts/start.js --name "my-app"