FROM node:16

WORKDIR /app

# Install Directus CLI globally
RUN npm install -g @directus/cli

# Initialize Directus project
RUN npx directus init .

# Copy environment variables
COPY .env .

# Install dependencies
RUN npm install

EXPOSE  8020

# Start Directus
CMD ["npx", "directus", "start"]