---
typora-copy-images-to: ../assets/img/dependencias/
typora-root-url: ../../
layout: post
categories: tema5 CD/CI
title:  Gestión de dependencias
conToc: true
subtitle: 
author:
- Víctor Ponz
lang: es
titlepage: true
titlepage-background: assets/img/ci-cd.png
apage-background: assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 5. Gestión de dependencias
header-right: Ciberseguridad
footer-left: IES El Caminàs
footer-right: \thepage/\pageref{LastPage}
titlepage-rule-color: 1e2c37
header-includes: |
    \usepackage{lastpage} 
    \usepackage{awesomebox}
pandoc-latex-environment:
    noteblock: [note]
    tipblock: [tip]
    warningblock: [warning]
    cautionblock: [caution]
    importantblock: [important]

---

## Introducción 

Hoy en día, cualquier aplicación depende de muchos sino de cientos de paquetes. Estos paquetes de software pueden tener vulnerabilidades que hemos de conocer y mitigar, pues hay que tener siempre el software actualizado.

Si tenemos alojado un repositorio en GitHub y este es público se nos ofrece automáticamente un visor de dependencias en `Insights-> Dependency Graph`. En esta lista se muestran todas las dependencias de tu proyecto así como sus versiones.

![image-20220217165758099](/Ciberseguridad-PePS/assets/img/dependencias/image-20220217165758099.png)



Pero existe una herramienta llamada https://docs.dependencytrack.org/ que, además de mostrar las dependencias también permite conocer sus vulnerabilidades.

## Instalación

Se puede instalar directamente con Docker

```bash
# Downloads the latest Docker Compose file
curl -LO https://dependencytrack.org/docker-compose.yml

# Starts the stack using Docker Compose
docker-compose up -d
```

Una vez instalado y accedido, hemos de crear un proyecto https://www.npmjs.com/package/@cyclonedx/bomhttps://www.npmjs.com/package/@cyclonedx/bomhttps://www.npmjs.com/package/@cyclonedx/bomectoy cargar un archivo `bom.xml` que es un formato estándar para especificar **Bill Of Materials**

Tenemos ejemplos de este tipo de archivos en  [https://github.com/CycloneDX/bom-examples/tree/master/SBOM](https://github.com/CycloneDX/bom-examples/tree/master/SBOM)

Una vez descargado uno de los ejemplos, hemos de subirlo mediante el botón `Upload BOM`

![image-20220217171717088](/Ciberseguridad-PePS/assets/img/dependencias/image-20220217171717088.png)



Se mostrará toda la información en una rejilla como la siguiente:

![image-20220217171845022](/Ciberseguridad-PePS/assets/img/dependencias/image-20220217171845022.png)

Si ordenamos por `Risk Score` vemos que la primera es `lodash`. Al hacer clic en ella, nos muestra más información.

![image-20220217172253621](/Ciberseguridad-PePS/assets/img/dependencias/image-20220217172253621.png)

Donde además podemos acceder a la información detallada de cada una de las vulnerabilidades.

![image-20220217172514628](/Ciberseguridad-PePS/assets/img/dependencias/image-20220217172514628.png)

## Generación de archivos BOM

Existen varias herramientas para generar automáticamente ficheros BOM a partir de la definición de un proyecto.

* Para node.js existe una librería llamada [cyclonedx](https://www.npmjs.com/package/@cyclonedx/bom) que permite generar ficheros BOM a partir de la definición del proyecto
* Para php existe la librería [CycloneDX](https://github.com/CycloneDX/cyclonedx-php-composer)
* Para [java](https://www.baeldung.com/spring-maven-bom) también se pueden crear automáticamente a partir del fichero `pom.xml` 

