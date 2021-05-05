FROM node:14-alpine as builder

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn run build

FROM nginx:1.19-alpine

# COPY --from=builder /app/build /usr/share/nginx/html

# COPY conf/nginx.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html

# EXPOSE 80

# CMD [ "nginx", "-g", "daemon off;" ]