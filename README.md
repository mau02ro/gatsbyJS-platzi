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

## Estructura de una aplicación en Gatsby

Toda nuestra aplicación va a estar en la carpeta _src_, dentro de esta nos vamos a encontrar con la carpeta _pages_,_components_,entre otras…

- **Pages:** Dentro de esta carpeta se encontraran todas nuestras rutas, **Index** va a ser la ruta raíz.

- **Components:** Vamos a tener todos nuestros componentes, para utilizarlos de vemos _importarlos_ y _exportarlos_ en el archivo index de esta carpeta.

```
export { default as Component } from "./Component"
```

## Router en Gatsby y Componente Link

Gatsby nos facilita mucho la creación de páginas de nuestra aplicación. Solo debemos crear un archivo en la carpeta _src/pages_ con el nombre de la página y automáticamente esa ruta disponible con el archivo contenido del archivo.
Por ejemplo: Podemos ver el contenido del _src/pages/index.js_ en la ruta _/_ y el contenido del archivo _src/pages/about.js_ en la ruta _/about_

Además Gatsby nos provee un componente para navegar entre páginas. Funciona muy parecido a una etiqueta, pero al dar click no recargamos la página ni haremos peticiones al servidor, en cambio, podemos visualizar inmediatamente el contenido de la página en la cual queremos navegar. Todo esto gracias a que Gatsby tiene todas las funcionalidades de una Single Page Application.

**_Recuerda que estas funcionalidades del componente solo funcionan en las páginas de nuestra aplicación con Gatsby, no podemos usarlo para navegar a otras aplicaciones._**

Para usarlo solo deber importarlo desde:

```
import {Link} from 'gatsby'
```

## Layout en Gatsby

Los Layouts son componentes que nos ayudan a presentar un mismo estilo visual en todas las páginas de nuestra aplicación. Envuelven el contenido de nuestra página para mostrar, además del contenido, otros componentes como el Menú. Entre otros.

Por defecto, debemos importar nuestro componente Layout desde todos los archivos de nuestra páginas, de forma solo veremos el contenido de la página sin los componentes que configuramos en el Layout.

Afortunadamente Gatsby nos permite configurar componentes que nos muestras páginas al permite de hacer el render en el navegador. Para esto debemos configurar la opción **_exports.wrapRootElement_** del archivo **gatsby-browser.js**

```
const React = require("react")
const Layout = require("./src/components/layout").default

exports.wrapRootElement = ({ element }) => <Layout>{element}</Layout>
```

## GraphQL y Gatsby

**GraphQL** es un lenguaje tipado que facilita la comunicación entre servicios, pero los datos de nuestra aplicación pueden venir de diferentes lugares, así que **GraphQL** no tiene forma de acceder a todos estos datos para que podamos consumirlos desde un mismo lugar.
Gatsby recolecta toda la información de nuestra aplicación mientras desarrollamos en local y la almacena en un servidor de **GraphQL**.

Luego, en la etapa de compilación, justo antes de pasar a producción, Gatsby guardará los datos de **GraphQL** junto al código, dé esta forma los tendremos disponibles sin necesidad de hacer peticiones a las fuentes de datos originales.

### Queries, Edges(conexiones) y Nodos en Gatsby

Al trabajar con plugins de fuentes de datos debemos entender dos conceptos:

- **Edges:** No podemos consumir la información de estos plugins de la misma forma que otras consultas de **GraphQL**. En estos casos, la propiedad edges nos hace referencia a la conexión entre estos plugins y el servidor de **GraphQL**.

- **Nodos:** Son los elementos individuales de información que obtenemos al hacer una consulta con la propiedad edges.

**_Por ejemplo_**

Para conseguir la información de nuestras imágenes (guardadas en la capeta _src/images_) usamos el plugin **_getsby-source-filesystem_**.
En este caso podemos acceder a la información de nuestras imágenes con la siguiente consulta de **GraphQL**.

```
query{
 	allFile{
    edges{
      node{
        name
        relativePath
      }
    }
  }
}
```

Recuerda que la ruta que obtenemos con la propiedad relativePath es relativa a la propiedad path de nuestra configuración del plugin Gatsby-source-filesystem en el archivo Gatsby-config.js.

**_Otro ejemplo_**

Podemos acceder a la metadata que configuramos en el archivo Gatsby-config.js ejecutando la siguiente consulta de **GraphQL**.

```
query GET_DESCRIPTION {
  allSite {
    edges {
      node {
        siteMetadata {
          description
        }
      }
    }
  }
}
```

### COnsultas en GraphQL desde React

En la sección anterior vimos como consultar la información que nos proveen los plugins de fuentes de datos desde GraphQL. Ahora vamos a hacerlo desde nuestras vistas en React.

**_-----------------------------------_**
**_SOLO SE PUEDE HACER DESDE LAS PAGES_**
**_-----------------------------------_**

Debemos importar graphql desde Gatsby

```
import { graphql } from "gatsby"
```

Exportar nuestras consultas con el nombre del query.

```
export const query = graphql`
  query NUESTRA_CONSULTA {
    #.....
  }
`
```

Y consumir la información de la propiedad **data** que obtenemos automáticamente en el componente de nuestras páginas.

```
const IndexPage = ({ data }) => {
  console.log(data)

  return (
    <>
      #...
    </>
  )
}
```
