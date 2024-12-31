# Step 1: Use Node.js image as base
FROM node:18 AS build

# Step 2: Set working directory
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json package-lock.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the Vite app code into the container
COPY . .

# Step 6: Build the Vite app for production
RUN npm run build

# Step 7: Install a static file server (optional but recommended)
RUN npm install -g serve

# Step 8: Expose the port (default for Vite is 5000)
EXPOSE 5000

# Step 9: Start the app using serve to serve the built Vite app
CMD ["serve", "-s", "dist", "-l", "5000"]
