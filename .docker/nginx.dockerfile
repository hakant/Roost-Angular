FROM nginx:alpine

MAINTAINER Hakan Tuncer

# Copy custom nginx config
COPY ./.docker/nginx.conf /etc/nginx/nginx.conf
COPY dist /usr/share/nginx/html

EXPOSE 80 443

ENTRYPOINT ["nginx", "-g", "daemon off;"]