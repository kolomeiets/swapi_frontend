FROM node:22-alpine

WORKDIR /app/

COPY ./src /app/src
COPY ./public /app/public
COPY package.json /app/
COPY package-lock.json /app/


RUN npm install 

ENV PORT 4444

CMD ["npm", "start"]
