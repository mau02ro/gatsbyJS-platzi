# gatsbyJS-platzi

curso de desarrollo de aplicaciones web con [GatsbyJs](https://www.gatsbyjs.org/)

## Tabla de contenido

- [¿Que es GatsbyJS?](#Que-es-gatsbyJS)
- [Crear un sitio web en Gatsby](#Crear-un-sitio-web-en-Gatsby)
  - [Starters](#Starters)

## ¿Que es GatsbyJS?

Gatsby es un marco de código abierto y gratuito basado en React que ayuda a los desarrolladores a crear sitios web y aplicaciones increíblemente rápidos.

Gatsby es un framework open source que nos facilita la construcción de aplicaciones web. Integra tecnologias como React, GraphQL y diferentes funtes de información como FireBase, WordPress o Sanity. Su velocida se debe a que compila la aplicación mientras desarrollamos para que el sitio en produccion obteng todos los beneficios de las Single Page Applications y el Server Side Rendering.

# Crear un sitio web en Gatsby

Tenemos dos formas de instalar Gatsby y crear nuestro proyecto.

**1. A mano:** Devemos crear las carpetas y archivos de nuestro proyecto siguindo las practicas de Gatsby. Tambien debemos instalar las dependencias:

```
npm install --save react react-dom gatsby
```

**1. De forma global:** Usamos gatsby-cli para generar un proyecto básico de Gatsby. No debemos crear los archivos ni las carpetas, solo ejecutar los siguientes comandos.

```
#Tener instalado o instlar gatsby-cli
npm install -g gatsby-cli

#Crear el proyecto
gatsby develop
```

## Starters

Los starters son proyectos creados con el fin de modificar el contenido y tener nuestro sitio listo sin nesecidad de hacer configuraciones. Solo debemos copiar el nombre del starter y ejecutar el siguiente comando.

```
gatsby new tu-proyecto creador/nombre-del-starter
```
