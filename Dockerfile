# Use the official Node.js image as the base
FROM node:18-bullseye

# Set working directory
WORKDIR /app

# Copy package manager lock files and package.json
COPY bun.lockb package.json ./

# Install production dependencies using npm or yarn
RUN npm install --production 

# Copy the rest of the application files
COPY . .

# Build the Nuxt app for production
RUN npm run build

# Expose the production port
EXPOSE 8080

# Start the application in production mode
CMD ["npm", "run", "start"]