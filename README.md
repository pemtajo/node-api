# node-api
A simple example for a API written in NodeJS, using Docker to my students.


# tests
Using Jest
## to run
```bash
npm run test
```

# docker
```bash
docker build .
```

```bash
docker run -p 3000:3000 <build-id>
```

## tests
```bash
docker build -f Dockerfile-test .
```

```bash
docker run <build-id>
```

## docker-compose
```bash
docker-compose up
```