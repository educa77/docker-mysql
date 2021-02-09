FROM node:14

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app/backend

COPY backend/package*.json ./

RUN npm install

RUN npm i -g sequelize-cli

RUN npm i mysql2

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
