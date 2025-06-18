FROM node:18-alpine
WORKDIR /app
COPY app/ .
RUN npm install express body-parser
CMD ["node", "server.js"]
