# Prueba-Practica-CC-U3
Prueba Práctica de Computación en la Nube U3

Back-end
El backend debe ejecutarse si o si en el puerto 3001
docker build -t name .
docker run -it -p 3001:3001 name
Ejemplo: 
docker build -t klamer/backend_ppcc .
docker run -it -p 3001:3001 klamer/frontend_ppcc

Front-end
El frontend puede ejecutarse en cualquier puerto
docker build -t name .
docker run -it -p 4000:3000 name
Ejemplo: 
docker build -t klamer/frontend_ppcc .
docker run -it -p 4000:3000 klamer/frontend_ppcc