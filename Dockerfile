# Specify a base image
FROM node:alpine

WORKDIR '/app'

#Install some dependencies
COPY package.json .
RUN npm install
COPY . .
RUN node run build

FROM nginx
COPY --from=0 /app/build usr/share/nginx/html

# Set up a default command
CMD [ "npm","start" ]