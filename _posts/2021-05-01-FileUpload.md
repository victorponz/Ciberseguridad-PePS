---
typora-copy-images-to: ../assets/img/fileupload
typora-root-url: ../../
layout: post
categories: tema4 SQL Injection
title: File Upload
conToc: true
header-includes: |
    \usepackage{fancyhdr}
    \pagestyle{fancy}
    \newcommand{\changefont}{%
    \fontsize{8}{11}\selectfont}
    \fancyhead[CO,CE]{}
    \fancyhead[LO,CE]{}
    \fancyfoot[LO,CE]{\changefont https://victorponz.github.io/Ciberseguridad-PePS/}
    \fancyfoot[CO,CE]{}
    \fancyfoot[LE,RO]{\thepage}
    \renewcommand{\headrulewidth}{2pt}
    \renewcommand{\footrulewidth}{1pt}
---

## Práctica - FileUpload

En la siguiente práctica vamos a realizar un *reverse shell* mediante la subida de un archivo ejecutable para que el ordenador de la víctima se conecte al ordenador del atacante al visitar una url.

Los pasos son los siguientes:

1. Vamos a *subir* un archivo `php` que contiene el código del *reverse shell* mediante la opción de menú *File Upload*.

![File Upload](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504174939266.png)

2. Descarga el archivo del *reverse shell* desde esta [dirección](https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php) y guárdalo como `shell.php`

3. Edítalo y cambia la IP por la de tu equipo

![image-20210504175459944](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504175459944.png)



4. Ahora sube el archivo mediante el menú `Upload`, fijándote en la url que genera.
   

   ![image-20210504175752547](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504175752547.png)

5. Ya sólo nos queda ejecutar en el ordenador del atacante el comando `netcat`

   ```bash
   nc -v -n -l -p 1234
   ```

6. Y quedarnos a la espera de una conexión entrante desde el ordenador de la víctima al visitar la url del punto 4.

   ![image-20210504180028030](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504180028030.png) 

