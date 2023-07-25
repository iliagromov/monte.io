FROM node:18.15.0 as node

ARG APP_DOMAIN=${APP_DOMAIN}

ENV APP_DOMAIN=$APP_DOMAIN

# Build
RUN mkdir /app
WORKDIR /app

COPY ./package.json yarn.lock /app/

RUN yarn install
RUN yarn run disable-telemetry

# Ensure that proper .env files exists before building
RUN test -f "/app/.env.production"

# Copy artifact to NGINX container
COPY . /app/

RUN yarn run build

FROM nginx:alpine

# Configuring NginX
RUN rm -rf /user/share/nginx/html/*
COPY nginx/website.nginx.conf /etc/nginx/nginx.conf
COPY nginx/500.html /usr/share/nginx/html/500.html

# Configure varnish
COPY default.vcl /etc/varnish/

# Configure supervisor
COPY supervisord.conf /app/supervisord.conf

EXPOSE 80
CMD ["supervisord","-c","/app/supervisord.conf"]