# transitUC-1
Trazar las posiciones de los vehículos en un mapa usando NodeJS como back-end (API) y Angular 2 como front-end.

## NodeJS (Back-end) + Angular 2 (Front-end)

### Objetivo

Trazar las posiciones de los vehículos en un mapa usando NodeJS como back-end (API) y Angular 2 como front-end.

### Tareas

* Crear instancia (BD) SQL con el dump adjunto (positions.csv)
* Desarrollar RESTful API y llamada (request) que a partir de un identificador dado de dispositivo (IMEI) entregue sus múltiples posiciones (latitud y longitud) 
* Crear una aplicación Angular 2, que implemente una manera de seleccionar dispositivos (IMEI) y luego recupere las posiciones, de ese IMEI, usando la API para trazarlas (unirlas por una línea en mapa) por fecha de la medición (cronológicamente). Sugerimos usar AGM (https://angular-maps.com/), pero tienes libertad en la elección de la librería.

### Clonar transitUC-1

Para clonar transitUC-1 usando git
```
git clone https://github.com/eucliz/transitUC-1.git
cd transitUC-1
```

### Instala las dependencias del servidor
```
npm install
bower install bootstrap --save
```
### Ejecutar el servidor

La forma más sencilla de iniciar el servidor es:
```
node server.js
```
### Instala las dependencias del cliente 

En otra terminal 
```
cd client
npm install
npm start

