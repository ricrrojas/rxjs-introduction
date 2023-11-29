npm run build
docker build -t registry.digitalocean.com/rxjs-introduction/angular-app:latest  . --platform=linux/amd64
docker push registry.digitalocean.com/rxjs-introduction/angular-app:latest
