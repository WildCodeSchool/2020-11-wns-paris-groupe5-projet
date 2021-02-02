FROM node:alpine
WORKDIR /app
COPY package.json .
RUN npm install  --only=prod
COPY . .
EXPOSE 80

ENV MONGODB_USERNAME=root
ENV MONGODB_PASSWORD=secret
ENV MONGODB_URL=mongodb
ENV GMAIL_EMAIL=thiahanet@gmail.com
ENV GMAIL_PASS=password

CMD [ "npm", "run", "start" ]