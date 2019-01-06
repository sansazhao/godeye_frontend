FROM nginx
RUN mkdir /usr/share/nginx/customer
RUN rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 8889
