# FROM node:latest
# LABEL Getripay Transaction

# WORKDIR /src

# COPY . /src

# RUN npm install --production

# EXPOSE 3000

# CMD npm run start

FROM node:12

# Create app directory
WORKDIR /usr/src/server/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# RUN npm install
# If you are building your code for production
RUN npm install 
# --only=production

# Bundle app source
COPY . .

EXPOSE 4003
CMD [ "npm", "run", "server" ]
