FROM node:20-alpine3.16
COPY . .
RUN npm install
RUN npm audit fix --force
RUN npm build
RUN npm install -g serve
CMD ["sudo", "serve", "-s" ,"build"]
