# gatsbyJS-platzi

curso de desarrollo de aplicaciones web con [GatsbyJs](https://www.gatsbyjs.org/)

## Tabla de contenido

- [¿Que es GatsbyJS?](#Que-es-gatsbyJS)
- [Crear un sitio web en Gatsby](#Crear-un-sitio-web-en-Gatsby)
  - [Starters](#Starters)
- [Ecosistema de plugins](#Ecosistema-de-plugins)

## ¿Que es GatsbyJS?

Gatsby es un marco de código abierto y gratuito basado en React que ayuda a los desarrolladores a crear sitios web y aplicaciones increíblemente rápidos.

Gatsby es un framework open source que nos facilita la construcción de aplicaciones web. Integra tecnologias como React, GraphQL y diferentes funtes de información como FireBase, WordPress o Sanity. Su velocida se debe a que compila la aplicación mientras desarrollamos para que el sitio en produccion obteng todos los beneficios de las Single Page Applications y el Server Side Rendering.

## Crear un sitio web en Gatsby

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

### Starters

Los starters son proyectos creados con el fin de modificar el contenido y tener nuestro sitio listo sin nesecidad de hacer configuraciones. Solo debemos copiar el nombre del starter y ejecutar el siguiente comando.

```
gatsby new tu-proyecto creador/nombre-del-starter
```

## Ecosistema de plugins

Los plugins son código de Gatsby que alguien más de la comunidad escribió por nosotros para que podamos configurar nuestra aplicación lo más ágil y rápido posible.

Los plugins pueden ayudarnos de 3 formas:

- **Plugins como Componentes:** Cuando instalamos el plugin obtenemos un componente que debemos integrar a nuestra aplicación para obtener algún beneficio.

- **Plugins como Funcionalidades:** Nos ayuda a trasformar información o implementar una funcionalidad en concreto. Por ejemplo: [gastby-image](https://www.gatsbyjs.org/docs/gatsby-image/) nos ayuda a crear nuevas versiones de nuestras imágenes con menor calidad para mejorar la carga inicial de nuestro sitio web.

- **Plugins como Fuentes de datos:** Estos plugins utilizan NodeJS y GraphQL para consumir la información de algún lugar o herramienta como Firebase, WordPress,APIs Rest, entre otras.
