FROM node:18-alpine as dev

ENV NODE_ENV development

# Needed for VS Code Remote Development
RUN apk add musl libgcc libstdc++ git curl wget bash ca-certificates gcompat openssh-client libc6-compat libstdc++6 python3


# App directory
WORKDIR /app

# App dependencies
COPY package*.json ./
RUN npm ci

# Copy app source code
COPY . .

#Expose port and begin application
EXPOSE 9000
ENV PORT 9000
# Start the app
CMD [ "npm", "run", "auth"]

# build stage
FROM node:18-alpine as build
WORKDIR /app
COPY --chown=node:node package*.json ./
RUN npm install

COPY --chown=node:node . .
RUN npx nx build auth --generatePackageJson --optimization


# prod stage
FROM node:18-alpine as prod

ENV NODE_ENV production

WORKDIR /app

COPY --chown=node:node --from=build /app/dist/apps/auth ./
RUN npm ci --only=production && npm cache clean --force


EXPOSE 9000
ENV PORT 9000
USER node

CMD ["node", "./main"]
