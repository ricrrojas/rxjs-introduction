FROM node:latest as build
WORKDIR /usr/local/app
COPY ./dist /usr/local/app/dist

FROM nginx:latest

COPY --from=build /usr/local/app/dist/rxjs-introduction /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
