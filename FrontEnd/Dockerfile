#make node
FROM node:18.16.1 as builder

#Dockerfile made by 한석현 

RUN mkdir /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build


# Nginx 단계
FROM nginx:latest

RUN rm -rf /etc/nginx/conf.d/default.conf

# Nginx 설정 파일을 복사합니다. 여기에서는 default.conf를 사용합니다.
COPY ./nginx.conf /etc/nginx/conf.d

# 빌드된 Node.js 어플리케이션을 Nginx의 웹 루트 디렉터리로 복사합니다.
COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
