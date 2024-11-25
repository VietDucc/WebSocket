# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from Dockerhub
FROM node:lts-buster AS development

# Create app directory
WORKDIR /usr/src/app

# Copy all the code needed to run the app (no need for package.json or package-lock.json)
COPY . /usr/src/app

# Expose the port the app runs on
EXPOSE 3000

# Command to run the app (assuming you have a pre-built frontend)
CMD ["npm", "start"]
