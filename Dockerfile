FROM node:10.15.1

COPY package*.json /

ENV NUXT_HOST=0.0.0.0
ENV PATH /node_modules/.bin:$PATH

WORKDIR /
RUN npm install
WORKDIR /src
RUN ln -sf /node_modules /src/node_modules

# COPY . /

# RUN npm run build
