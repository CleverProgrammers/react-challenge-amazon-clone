FROM node:20-alpine3.16
RUN sudo apt-get install npm
RUN sudo apt-get update
COPY . .
RUN npm install
RUN npm audit fix --force
RUN sudo npm install -g serve
CMD ["sudo", "serve", "-s" ,"build"]
