# Use a Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY . .

# Install dependencies
RUN yarn

# RUN yarn build

# set port to 80

# Expose port 80
# EXPOSE 80

# start app
CMD ["yarn", "dev"]
