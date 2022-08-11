# Base image
###################################
# Stage 1, base image for build time
###################################
FROM node:16-alpine as build

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN yarn

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN yarn build

###################################
# Stage 2, base image for runtime
###################################
FROM gcr.io/distroless/nodejs

COPY --from=build /usr/src/app /

EXPOSE 3001

# Start the server using the production build
CMD [ "dist/main.js" ]