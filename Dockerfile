FROM node:18.13.0-alpine as builder

WORKDIR /angular-frontend

COPY package*.json ./

RUN npm install

COPY . .

# Build Development
RUN npx ng build --output-path=dist

# Deploy
FROM nginx:1.23.3-alpine

COPY nginx /etc/nginx

COPY --from=builder /angular-frontend/dist /usr/share/nginx/angular-frontend