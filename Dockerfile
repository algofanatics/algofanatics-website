# Use a Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY . .

# Install dependencies
RUN yarn

# start app
CMD ["yarn", "dev"]
