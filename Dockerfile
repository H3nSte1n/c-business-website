FROM node:10.15.1

WORKDIR /src

COPY package*.json /src/

ENV NUXT_HOST=0.0.0.0
ENV PATH /node_modules/.bin:$PATH

RUN npm install

# COPY . /

# RUN npm run build
