FROM node:17.6.0
WORKDIR /usr/code
COPY package.json .
RUN npm install
COPY . .
ENV PORT 8000
EXPOSE $PORT
CMD ["npm","run","start"]
