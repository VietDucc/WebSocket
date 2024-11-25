# Sử dụng image Nginx để phục vụ index.html
FROM nginx:alpine

# Copy index.html vào thư mục mặc định của Nginx
COPY ./frontend/index.html /usr/share/nginx/html/index.html

# Chạy Nginx
CMD ["nginx", "-g", "daemon off;"]
