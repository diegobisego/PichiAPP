# Use the official Node.js image as a base
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app will run on (if necessary)
EXPOSE 8080

# Command to start your NestJS app
CMD ["npm", "run", "start"]
