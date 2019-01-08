FROM nginx
#ADD RESOUCES 添加静态资源
COPY build/ /usr/share/nginx/html
#REPLACE CONF 替换配置文件
COPY nginx.conf /etc/nginx/nginx.conf
CMD ["nginx"]

