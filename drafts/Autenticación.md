---
typora-copy-images-to: ../assets/img/autenticacion/
typora-root-url: ../../
layout: post
categories: tema3 Seguridad Web
title: Autenticación
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
## Autenticación HTTP
<blockquote class='task'>
<i class='fa fa-check'> </i><strong> Práctica 1</strong> Realiza y documenta este punto</blockquote>

También merece la pena conocer el tipo de autenticación HTTP que provee de un mecanismo sencillo para acceder a recursos protegidos por usuario y contraseña.

> Según la [Wikipedia](https://es.wikipedia.org/wiki/Autenticaci%C3%B3n_de_acceso_b%C3%A1sica)
> En el contexto de una transacción [HTTP](https://es.wikipedia.org/wiki/Hypertext_Transfer_Protocol), la **autenticación de acceso básica** es un método diseñado para permitir a un [navegador web](https://es.wikipedia.org/wiki/Navegador_web), u otro programa cliente, proveer credenciales en la forma de [usuario](https://es.wikipedia.org/wiki/Usuario_(informática)) y [contraseña](https://es.wikipedia.org/wiki/Contraseña) cuando se le solicita una [página](https://es.wikipedia.org/wiki/Página_web) al [servidor](https://es.wikipedia.org/wiki/Servidor_web).
>
> Ha sido diseñado con el fin de permitir a un navegador web o programa **aportar credenciales** basadas en nombre de usuario y [contraseña](https://es.wikipedia.org/wiki/Contraseña), que le permitan autenticarse ante un determinado servicio. El sistema  es muy sencillo de implementar, pero sin embargo no está pensado para  ser utilizado sobre líneas públicas, debido a que las credenciales que  se envían desde el cliente al servidor, aunque no se envían directamente en texto plano, se envían únicamente codificadas en [Base64](https://es.wikipedia.org/wiki/Base64), lo que hace que se puedan obtener fácilmente debido a que es  perfectamente reversible, es decir, una vez que se posee el texto  codificado es posible obtener la cadena original sin ningún problema,  por lo que la información enviada no es cifrada ni segura.

![Proceso de autenticación](https://media.prod.mdn.mozit.cloud/attachments/2017/02/21/14689/3a44ec0bfe7597613dfb913e450a68eb/HTTPAuth.png)

Veamos un ejemplo de autenticación básica en PHP

```php
<?php

$valid_passwords = array ("mario" => "qwerty");
$valid_users = array_keys($valid_passwords);

$user = $_SERVER['PHP_AUTH_USER'];
$pass = $_SERVER['PHP_AUTH_PW'];

$validated = (in_array($user, $valid_users)) && ($pass == $valid_passwords[$user]);

if (!$validated) {
  header('WWW-Authenticate: Basic realm="My Realm"');
  header('HTTP/1.0 401 Unauthorized');
  die ("Not authorized");
}

// If it arrives here, it is a valid user.
echo "<p>Welcome $user.</p>";
echo "<p>Congratulation, you are into the system.</p>";
Y las cabeceras que envían el cliente y el servidor
    
```

![Petición de credenciales](/Ciberseguridad-PePS/assets/img/autenticacion/image-20210131094552650.png)

![Autenticado con éxito](/Ciberseguridad-PePS/assets/img/autenticacion/image-20210131093617327.png)

A partir del momento en que se produce la autenticación, cliente y servidor se intercambian las credenciales mediante las cabecera `Authorization` con el valor `Basic bWFyaW86Y2FyYm9uZWxs`. Como está codificado en `base64`, es muy fácil obtener las credenciales si estas se envían en texto plano. Por ello es muy importante que el **protocolo de la página sea HTTPS** para que de esta forma las credenciales viajen encriptadas.

Es muy fácil, decodificar `base64`. Por ejemplo en [https://www.base64decode.org/](https://www.base64decode.org/)

![Decodificación](/Ciberseguridad-PePS/assets/img/autenticacion/image-20210131095048905.png)

Este método se puede emplear para una intranet o para una parte de la aplicación en la que sea necesario iniciar sesión, añadiendo una capa más de seguridad, porque se deben realizar dos autorizaciones: la primera basada en `HTTP` y la segunda, como veremos a continuación, mediante **sesiones**

<blockquote class='task'>
<i class='fa fa-check'> </i><strong> Práctica 1</strong><br> Configura apache para que al  directorio <code>/protegido</code> sólo se pueda acceder mediante un usuario y contraseña siguiendo las instrucciones detalladas en <a href='https://cwiki.apache.org/confluence/display/HTTPD/PasswordBasicAuth'>Password protect a directory using basic authentication</a>.<br>
Documenta la configuración e instalación con una entrada en tu blog
</blockquote>



## OAuth0

Bien explicado en https://jordisan.net/proyectos/Autent_y_auth-J_Sanchez.pdf

https://auth0.com/learn/how-auth0-uses-identity-industry-standards/

https://platzi.com/blog/aprende-estandares-de-seguridad-y-oauth/

## Single Sign-On

Un sólo uso

## Contraseñas de un sólo uso (One-time password)



FIDO El nuevo estántar https://www.bbva.com/es/que-es-fido-el-nuevo-estandar-de-autenticacion-online/



# How to Securely Store Passwords in Database?			

https://www.vaadata.com/blog/how-to-securely-store-passwords-in-database/

Obtener la contraseña a partir de un hash

https://md5hashing.net/hash/md5/21b72c0b7adc5c7b4a50ffcb90d92dd6

# Password Storage Cheat Sheet

https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html

https://stackoverflow.com/questions/674904/salting-your-password-best-practices

https://stackoverflow.com/questions/536584/non-random-salt-for-password-hashes/536756#536756

