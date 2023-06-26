# Use a Node.js image as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

RUN cd /usr/src/app

# Install app dependencies
COPY . ./

RUN yarn

# Bundle app source
COPY . .

# If you are building your code for production
RUN yarn build

# EXPOSE 8080
CMD [ "yarn", "start" ]

