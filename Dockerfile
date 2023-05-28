# Use a Node.js image as the base image
FROM node:16

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Build the app
RUN npm run build

# Start the app
RUN npm start

# set port to 80

# Expose port 80
# EXPOSE 80

# start app
CMD ["yarn", "start"]
