# Use a Node.js image as the base image
FROM node:16

# Create app directory
WORKDIR /usr/src/app

# Copy package.json to the app directory
COPY package.json .

# Install dependencies using yarn
RUN yarn

# Copy all files from the current directory to the app directory
COPY . .

# Expose port 3000
EXPOSE 3000

# Run the command "yarn start" when the container starts
CMD ["yarn", "start"]


