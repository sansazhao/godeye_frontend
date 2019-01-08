FROM nginx
#REPLACE CONF 替换配置文件
ADD nginx.conf /usr/local/nginx/conf/

#ADD RESOUCES 添加静态资源
RUN rm /usr/local/nginx/html/index.html
RUN mkdir -p /usr/local/nginx/html/static
COPY build/ /usr/local/nginx/html/static
CMD ["nginx"]

