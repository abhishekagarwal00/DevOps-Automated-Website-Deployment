# Optional: containerised version of the same site (Docker concepts from the training)
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# Vite's base path is /DevOps-Automated-Website-Deployment/, so serve it from that folder
COPY --from=build /app/dist /usr/share/nginx/html/DevOps-Automated-Website-Deployment
EXPOSE 80
