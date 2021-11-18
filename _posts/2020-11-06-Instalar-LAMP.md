---
typora-root-url: ../../
typora-copy-images-to: ../assets/img/LAMP/
layout: post
categories: tema1 apache
conToc: true
title: LAMP
subtitle: Instalación de la pila LAMP
author:
- Víctor Ponz
lang: es
titlepage: true
titlepage-background: assets/img/git-basico/dibujo.png
page-background: assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 1. LAMP
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
# LAMP

Se denomina "LAMP" a un grupo de software de código libre que se instala normalmente en conjunto para habilitar un servidor para alojar sitios y aplicaciones web dinámicas. Este término en realidad es un acrónimo que representa un sistema operativo **L**inux con un servior **A**pache, los datos se almacenan en base de datos **M**ySQL y el contenido dinámico es procesado con **P**HP.

En esta guía, vamos a instalar LAMP en un desktop con Kali Linux. Los pasos son parecidos para instalarlo en Windows y Mac

## Paso Uno. Instalar apache

El servidor Web **apache** es actualmente el más popular del mundo, lo que hace que sea una buena opción para montar nuestros sitios.

Podemos instalar **apache** fácilmente desde el gestor de paquetes de Kali, `apt` Un gestor de paquetes nos permite instalar con mayor facilidad un software desde un repositorio conservado por Kali. Puedes aprender más sobre [como utilizar apt](https://www.digitalocean.com/community/tutorials/how-to-manage-packages-in-ubuntu-and-debian-with-apt-get-apt-cache) aquí.

Para nuestros propósitos, podemos iniciar escribiendo los siguientes comandos:

```
sudo apt-get update
sudo apt-get install apache2
```

Ya que estamos utilizando el comando `sudo`, estas operaciones son ejecutadas con privilegios de administrador, por lo que te pedirá la contraseña para verificarlo.

Después de esto, ya tendremos instalado nuestro servidor web.

Para que se ejecute en esta sesión, lanza el comando (al reiniciar el sistema ya funcionará sin este paso)

```bash
systemctl start apache2
```

Puedes hacer una prueba después de esto para verificar que todo haya ido según lo previsto, visitando la dirección IP pública de tu servidor en el navegador web (ver la nota en el siguiente apartado para averiguar cuál es tu dirección IP pública, si es que no tienes esta información ya).

```
http://localhost
o
http://127.0.0.1
```

Podrás ver la imagen por defecto de la página web apache Ubuntu/Kali, que esta ahí para fines informativos. Deberá ser algo como esto:

![](/Ciberseguridad-PePS/assets/img/LAMP/default_apache.png)

Si puedes ver esta página, entonces tu servidor web ya se ha instalado correctamente.

## Paso Dos. Instalar MySQL (opcional)

Ahora que ya tenemos nuestro servidor web configurado y corriendo, es el momento de instalar **MySQL** (o **MariaDB**). MySQL es un sistema de gestión de base de datos. Básicamente, se encarga de organizar y facilitar el acceso a las bases de datos donde nuestro sitio puede almacenar información.

En el caso de Kali, hemos de descargar la versión desde [https://dev.mysql.com](https://dev.mysql.com)

```
sudo apt install -y wget
wget https://dev.mysql.com/get/mysql-apt-config_0.8.15-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.15-1_all.deb
```

En el proceso de instalación seleccionaremos `debian buster` 

Confirma los pasos por defecto pulsando `<OK>`

Para ejecutarlo en esta sesión usa:

```bash
sudo systemctl enable --now mysql
```

Y para crear la contraseña usa:

```bash
sudo mysql -u root -p
```

> **Nota**.
>
> Como contraseña usaremos **sa**

## Paso Tres. Instalar PHP

PHP es el componente de nuestra configuración que procesará código para mostrar contenido dinámico. Puede ejecutar secuencias de comandos, conectarse a nuestras bases de datos MySQL para obtener información, y entregar el contenido procesado a nuestro servidor web para mostrarlo.

Una vez más podemos aprovechar el sistema `apt` para instalar nuestros componentes. Vamos a incluir algunos paquetes de ayuda, así:

```
sudo apt-get install php libapache2-mod-php
```

Instalaremos también el paquete de conexión mysql con php

```
sudo apt-get install php-mysql
```

Esto deberá instalar PHP sin ningún problema. Vamos a probar esto en un momento.

En la mayoría de los casos, vamos a querer modificar la forma en que Apache sirve archivos cuando se solicita un directorio. Actualmente, si un usuario solicita un directorio del servidor, Apache buscará primero un archivo llamado `index.html` Nosotros queremos decirle a nuestro servidor web que elija los archivos PHP de preferencia, por lo que vamos a hacer Apache busque un archivo `index.php` primero.

Para ello, escribe este comando para abrir el archivo `dir.conf` en un editor de texto con privilegios de root:

```bash
sudo nano /etc/apache2/mods-enabled/dir.conf
```

Se verá de forma similar a esto:

```xml
<IfModule mod_dir.c>

    DirectoryIndex index.html index.cgi index.pl index.php index.xhtml index.htm

</IfModule>
```

Queremos mover el índice del archivo PHP destacándolo a la primera posición después de la especificación del `DirectoryIndex`, así:

```xml
<IfModule mod_dir.c>

    DirectoryIndex index.php index.html index.cgi index.pl index.xhtml index.htm

</IfModule>
```

Cuando hayas terminado, guarda y cierre el archivo presionando "CTRL-X". Vas a tener que confirmar el guardado escribiendo "S" y luego pulsando "ENTER" para confirmar la ubicación de almacenamiento de archivos.

Después de esto, tenemos que reiniciar el servidor web Apache para que nuestros cambios sean reconocidos. Puedes hacerlo hacerlo ejecutando esto:

```
sudo systemctl restart apache
```

En este punto, el LAMP está instalado y configurado. Sin embargo, todavía debemos probar nuestro PHP.

## Paso Cuatro. Prueba del Procesador PHP en el Servidor Web

Con el fin de probar que nuestro sistema se ha configurado correctamente para PHP, podemos crear un script PHP muy básico.

Vamos a llamar a este script index`.php`. Para que Apache pueda buscar el archivo y lo trabaje correctamente, se debe guardar en un directorio muy específico, al cual se le conoce como "raíz".

En Linux, este directorio se encuentra en `/var/www/html/`. Podemos crear el archivo en esa ubicación ejecutando:

```
sudo nano /var/www/html/index.php
```

Esto abrirá un archivo en blanco. Queremos poner el texto siguiente, que es el código PHP válido, dentro del archivo:

```php
<?php
phpinfo();
?>
```

Cuando hayas terminado, guarda y cierra el archivo.

Ahora podemos probar si nuestro servidor web puede visualizar correctamente el contenido generado por un script PHP. Para probar esto, sólo tenemos que visitar esta página en nuestro navegador web. De nuevo necesitarás la dirección IP pública del servidor.

La dirección que deseas visitar será:

```
http://127.0.0.1/
```

La página que verás debe ser algo como esto:

![PHP](/Ciberseguridad-PePS/assets/img/LAMP/image-20201213190749557.png)

## Paso Cinco. Instalación de phpMyAdmin (opcional)

phpMyAdmin es un software web gratuito para trabajar con MySQL en la web, proporciona un interfaz visual conveniente a las capacidades de MySQL.

```
sudo apt-get install phpmyadmin apache2-utils
```

Durante la instalación, `phpMyAdmin` nos guiará a través de una configuración básica.

Una vez que el proceso se inicia, seguimos estos pasos:

1. Seleccionamos `Apache2` como servidor
2. Seleccionamos SÍ cuando se le pregunte si desea configurar la base de datos para `phpmyadmin` con `dbconfig-common`
3. Introducimos nuestra contraseña de **MySQL** cuando se le solicite
4. Introducimos nuestra contraseña que deseamos utilizar para iniciar sesión en `phpmyadmin`

Una vez finalizada la instalación, añadimos `phpmyadmin` a la configuración de **apache**.

```
sudo nano /etc/apache2/apache2.conf
```

Agregamos la configuración de `phpmyadmin` al archivo.

```
Include /etc/phpmyadmin/apache.conf
```

Creamos un usuario para conectarnos a MySql

```
mysql -u root -p // Pedirá la contraseña del usuario root
CREATE USER 'phpmyadmin'@'localhost' IDENTIFIED BY 'sa';
GRANT ALL PRIVILEGES ON *.* TO 'phpmyadmin'@'localhost' WITH GRANT OPTION;
FLUSH PRIVILEGES;

```

Reiniciar **apache**:

```
sudo systemctl restart apache2
```

A continuación, podemos acceder a `phpmyadmin` accediendo a [http://localhost/phpmyadmin](http://localhost/phpmyadmin) e introduciremos el usuario (`phpmyadmin`) y contraseña (`sa`). 

> **Nota**.
>
> Nunca instalaremos `phpMyAdmin` en producción o si lo hacemos debemos hacerlo de [forma segura](https://www.tecmint.com/change-secure-phpmyadmin-login-url-page/)

![phpMyAdmin](/Ciberseguridad-PePS/assets/img/LAMP/phpMyAdmin.png)



**Basado en los siguientes documentos**

[https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-12-04](https://www.digitalocean.com/community/tutorials/how-to-install-and-secure-phpmyadmin-on-ubuntu-12-04)

[https://computingforgeeks.com/how-to-install-mysql-on-kali-linux/](https://computingforgeeks.com/how-to-install-mysql-on-kali-linux/)

