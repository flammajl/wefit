# build environment
FROM node:16-alpine as build

WORKDIR /app

ENV VITE_API_URL=http://localhost:3333

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# production environment
FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=build /app/dist .

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

CMD ["nginx", "-g", "daemon off;"]
