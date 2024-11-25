# Sử dụng image Node.js
FROM node:16

# Set working directory
WORKDIR /usr/src/app

# Copy server-websocket.js vào container
COPY ./backend /usr/src/app

# Cài đặt dependencies
RUN npm install

# Chạy WebSocket server
CMD ["node", "server-websocket.js"]
