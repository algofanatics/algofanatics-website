# Use a Node.js image as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# If you are building your code for production
RUN npm run build

# EXPOSE 8080
CMD [ "npm", "run", "dev" ]

