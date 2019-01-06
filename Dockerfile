FROM nginx
RUN mkdir /usr/share/nginx/customer
RUN mkdir /usr/share/nginx/customer/dist
RUN rm -rf /etc/nginx/nginx.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY ./dist /usr/share/nginx/customer/dist
EXPOSE 8889
