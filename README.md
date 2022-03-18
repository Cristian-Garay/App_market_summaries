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

Dentro del archivo /src/config.tsx existe duplicada la variable apiUrl. Cuando aparezca este error, sólo se debe ejecutar el siguiente comando en una nueva ventana de comandos: 

"lcp --proxyUrl https://bittrex.com --port 8085" 

[Referencia](https://www.npmjs.com/package/local-cors-proxy).
