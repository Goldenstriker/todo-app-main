FROM node:20-alpine

WORKDIR /todo_app_main/

COPY public/ /todo_app_main/public
COPY src/ /todo_app_main/src
COPY package.json /todo_app_main/

RUN npm install

CMD ["npm", "start"]