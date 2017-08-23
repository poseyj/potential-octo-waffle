FROM node:6.11.1

ADD https://github.com/Yelp/dumb-init/releases/download/v1.1.1/dumb-init_1.1.1_amd64 /usr/local/bin/dumb-init
RUN chmod +x /usr/local/bin/dumb-init

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm set progress=false && npm config set depth 0
RUN npm install

COPY . /usr/src/app

EXPOSE 3000

RUN npm run test-jenkins
#CMD ["dumb-init", "node", "index.js"]
