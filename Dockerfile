# Use an official Node.js 18 image as the base
FROM node:18-bullseye

# Install Bun
RUN curl -fsSL https://bun.sh/install | bash && \
    echo 'export PATH="/root/.bun/bin:$PATH"' >> ~/.bashrc && \
    /bin/bash -c "source ~/.bashrc && bun --version"

# Set working directory
WORKDIR /app

# Copy package manager lock files and package.json
COPY bun.lockb package.json ./

# Install production dependencies with Bun
RUN /bin/bash -c "source ~/.bashrc && bun install --production"

# Copy the rest of the application files
COPY . ./

# Build the Nuxt app for production
RUN /bin/bash -c "source ~/.bashrc && bun run build"

# Expose the production port
EXPOSE 8080

# Start the application in production mode
CMD ["/bin/bash", "-c", "source ~/.bashrc && bun run start"]
