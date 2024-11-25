# Sử dụng Node.js làm base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy các file cần thiết
COPY package*.json ./

# Cài đặt dependencies
RUN npm install



# Copy toàn bộ source code
COPY . .

# Expose port của backend
EXPOSE 8081

# Chạy server WebSocket
CMD ["node", "server-websocket.js"]
