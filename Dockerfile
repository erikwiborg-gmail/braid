FROM node:22-alpine AS build

WORKDIR /build
COPY package.json .
COPY package-lock.json .
RUN npm ci
COPY . .
ENV APP app
RUN npm run build

FROM node:22-alpine AS deploy-node
WORKDIR /app
COPY package.json .
COPY package-lock.json .
COPY --from=build /build/build .
EXPOSE 3000
CMD ["node", "index.js"]