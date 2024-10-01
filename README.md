# Frontend (SWAPI)

---
## Build & Run

Step 1. Create .env file in a root folder with following content(example):
```
# Containers option
REACT_APP_BACKEND_API_URL=http://localhost:3333/galactic-spending
# Local launch option 
REACT_APP_BACKEND_API_URL=http://127.0.0.1:8000/galactic-spending
```

### Containers

```
docker build . -t frontend
docker run -d -p 4444:4444 --env-file=.env frontend
```
### Local 

```
npm install

npm start

```
