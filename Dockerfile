# Use an official Node.js 18 image as the base
FROM node:18-bullseye

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash && \
    export BUN_INSTALL="/root/.bun" && \
    export PATH="$BUN_INSTALL/bin:$PATH" && \
    bun --version

# Set working directory
WORKDIR /app

# Copy package manager lock files and package.json
COPY bun.lockb package.json ./

# Install dependencies with Bun
RUN export BUN_INSTALL="/root/.bun" && \
    export PATH="$BUN_INSTALL/bin:$PATH" && \
    bun install

# Copy the rest of the application files
COPY . ./

# Build the Nuxt app
RUN export BUN_INSTALL="/root/.bun" && \
    export PATH="$BUN_INSTALL/bin:$PATH" && \
    bun run build

# Expose the port Nuxt will run on
EXPOSE 3000

# Start the application
CMD ["bun", "run", "start"]
