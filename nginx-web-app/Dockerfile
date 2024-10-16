# Build stage for React app
FROM node:14 AS frontend-build
WORKDIR /app/frontend
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ .
RUN npm run build

# Build stage for Node.js app
FROM node:14 AS backend-build
WORKDIR /app/backend
COPY backend/package*.json ./
RUN npm install
COPY backend/ .

# Production stage
FROM node:14-alpine
WORKDIR /app
COPY --from=backend-build /app/backend ./
COPY --from=frontend-build /app/frontend/build ./public
EXPOSE 3000
CMD ["npm", "start"]