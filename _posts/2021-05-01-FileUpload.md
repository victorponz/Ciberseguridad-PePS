---
typora-copy-images-to: ../assets/img/fileupload
typora-root-url: ../../
layout: post
categories: tema4 File Upload
title: File Upload
conToc: false
author: Víctor Ponz
conToc: true
titlepage: true
titlepage-background: assets/img/riesgos.png
# No funciona el background :(
apage-background:  assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 4. File Upload
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

## Práctica - FileUpload

En la siguiente práctica vamos a realizar un *reverse shell* mediante la subida de un archivo ejecutable para que el ordenador de la víctima se conecte al ordenador del atacante al visitar una url.

Los pasos son los siguientes:

## Paso 1
Vamos a *subir* un archivo `php` que contiene el código del *reverse shell* mediante la opción de menú *File Upload*.

![File Upload](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504174939266.png)

## Paso 2
Descarga el archivo del *reverse shell* desde esta [dirección](https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php) y guárdalo como `shell.php`

## Paso 3
Edítalo y cambia la IP por la de tu equipo

![Reverse shell](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504175459944.png)

## Paso 4
Ahora sube el archivo mediante el menú `Upload`, fijándote en la url que genera.

   ![File upload](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504175752547.png)

## Paso 5
Ya sólo nos queda ejecutar en el ordenador del atacante el comando `netcat`

   ```bash
   nc -v -n -l -p 1234
   ```
6. Y quedarnos a la espera de una conexión entrante desde el ordenador de la víctima al visitar la url del punto 4.

   ![Conexión realizada](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504180028030.png) 

