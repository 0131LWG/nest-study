# build stage
FROM node:18.12-alpine3.15 as build-stage
WORKDIR /app
COPY package.json .
RUN npm config set registry https://registry.npmmirror.com/
RUN npm install -g pnpm
RUN pnpm install
COPY . .
RUN pnpm run build

# production stage
FROM node:18.12-alpine3.15 as production-stage

COPY --from=build-stage /app/dist /app
COPY --from=build-stage /app/package.json /app/package.json

WORKDIR /app

RUN npm install -g pnpm
RUN pnpm install --production

EXPOSE 3000
CMD ["node", "/app/main.js"]
