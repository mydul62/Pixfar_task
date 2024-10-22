FROM node:21-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g typescript

COPY tsconfig*.json ./

COPY . .

EXPOSE 5173

CMD ["npm","start", "run", "dev"]
