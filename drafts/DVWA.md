---
typora-copy-images-to: ../assets/img/dvwa/
typora-root-url: ../../
layout: post
categories: tema3 
title: Instalación DVWA
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
## Máquinas vulnerables

**DVWA** (Damn  Vulnerable  Web  Application), es  una  aplicación para  pentesters y usuarios de seguridad web que desean mejorarse en el campo de la seguridad de aplicaciones  web.  

Es  un  sistema  educativo  creado  con  PHP  que contiene  ciertas debilidades web. 

Debilidades alojadas:

* Brute Force
* Command Execution
* CSRF
* File Inclusion
* SQL Injection
* Upload
* XSS Reflected
* XSS Stored

Hay 3 niveles de dificultad en el sistema DVWA: bajo, medio y alto.

## Instalar DVWA en Kali Linux

Para   la   instalación   de   DVWA en Kali   Linux,   primero   descargamos   DVWA accediendo a [http://dvwa.co.uk/](http://dvwa.co.uk/) y presionando en “Download”.

![DVWA](/Ciberseguridad-PePS/assets/img/dvwa/image-20210127105213394.png)

El archivo “DVWA-master.zip”se descargará en formato .zip y extraemos los archivos

![Archivos descrompimidos](/Ciberseguridad-PePS/assets/img/dvwa/image-20210127105541171.png)

Ahora vamos a mover la carpeta dwa a `/var/www/html/` que es donde escucha apache.