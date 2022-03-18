# Proyecto de prueba para la utilización de AntDesigne

Este proyecto fue construido a modo de estudio utilizando la librería de [AntDesigne](https://ant.design/).

## Iniciar proyecto

Para iniciar el proyecto, basta con ejecutar 2 comandos:

### `npm install`

Instalará todas las dependencias necesarias para el proyecto.

### `npm start`

Ejecuta la aplicación en modo desarrollador. Por lo general ocurre en el puerto 3000 siempre y cuando no se esté utilizando.

## FAQS

**"has been blocked by CORS policy"!**

Dentro del archivo /src/config.tsx existe duplicada la variable apiUrl. Cuando aparezca este error, se debe comentar el primero quedando de la siguiente forma:

//export const apiUrl = "https://bittrex.com/api/v1.1/public/"

export const apiUrl = "http://localhost:8085/proxy/api/v1.1/public/"



Luego sólo se debe ejecutar en una ventana aparte de donde se ejecuta "npm start":

lcp --proxyUrl https://bittrex.com --port 8085 

[Referencia](https://www.npmjs.com/package/local-cors-proxy).
