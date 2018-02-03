FROM nginx

RUN yum install -y npm
RUN cd src/frontend && npm install
RUN cd src/frontend && npm install -g gulp
RUN cd src/frontend && gulp build:dist

COPY ./dist /usr/share/nginx/html
EXPOSE 80