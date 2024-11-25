# syntax=docker/dockerfile:1.4

# Giai đoạn Phát triển (development)
FROM node:lts-buster-slim AS development

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép các tệp package.json và package-lock.json
COPY package.json /usr/src/app/package.json
COPY package-lock.json /usr/src/app/package-lock.json

# Cài đặt các phụ thuộc
RUN npm ci

# Sao chép toàn bộ mã nguồn vào container
COPY . /usr/src/app

# Mở cổng mà server WebSocket sẽ lắng nghe
EXPOSE 3000

# Lệnh để khởi động server WebSocket
CMD [ "node", "backend/server-websocket.js" ]

# Giai đoạn Môi trường Phát triển (dev-envs)
FROM development as dev-envs

# Cài đặt các công cụ phát triển như git
RUN <<EOF
apt-get update
apt-get install -y --no-install-recommends git
EOF

# Tạo người dùng và nhóm Docker để người dùng có thể chạy Docker từ trong container
RUN <<EOF
useradd -s /bin/bash -m vscode
groupadd docker
usermod -aG docker vscode
EOF

# Sao chép công cụ Docker từ ảnh khác (nếu cần thiết)
COPY --from=gloursdocker/docker / /

# Lệnh khởi động lại server WebSocket trong môi trường phát triển
CMD [ "node", "backend/server-websocket.js" ]
