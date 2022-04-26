---
typora-copy-images-to: ../assets/img/Seguridad-docker/
typora-root-url: ../../
layout: post
categories: tema3 Seguridad Web
title: Seguridad en docker
conToc: true
author: Víctor Ponz
conToc: true
titlepage: true
titlepage-background: assets/img/seguridad.png
page-background:  assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 3. Seguridad en docker
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


## Seguridad host

Como comparte el mismo kernel de la máquina host, todo el software del sistema debe estar actualizado a la máxima versión estable.

Antes de aplicar seguridad en el host, se debería usar alguna tipo de seguridad en el host mediante `ip_tables`, `SELinux`, `apparmor`, defensa en profundidad, perímetro etc.

Algo también muy importante es controlar los permisos de usuarios. Sólo deben acceder a docker aquellos usuarios con permiso de root, ya que docker debe acceder al kernel. Lo aconsejable es crear un grupo de docker e ir añadiendo ahí los usuarios que puedan lanzar contenedores.

`sudo usermod -aG docker $USER`

y recargar los permisos (o reiniciar sesión)

`newgrp docker`

## Seguridad en el demonio

El demonio corre como superusuario, así que debemos impedir que los usuarios puedan tocar la configuración  y el socket no deberían poder verlo.

El archivo es `/etc/docker/daemon.json` (si no existe, se debe crear para introducir las siguientes configuraciones)

Poner `debug: false` y es muy interesante configurar `ulimits`que permiten definir los archivos que pueden cargar los contenedores y es interesante dejar unos límites por defecto.

También es interesante `icc` que impide que haya conectividad entre los contenedores ya que todos están en la misma red por defecto de tal manera que no se verán entre sí y sólo aquellos que estén linkados explícitamente en su configuración. Por ejemplo wordpress y mysql

Ejemplo de archivo `daemon.json`

```json
{
    "debug": false
}

```

Otro archivo es `key.json` y ningún usuario que no sea root no debería acceder porque ahí se almacena en base64 la key para conectarse por TLS (por ejemplo con el Registry).

## Seguridad en contenedores

Son uno de los ejes principales del hardening pues donde hay más configuraciones afectadas.

Por ejemplo asignando un `ulimit` al contenedor:

```
docker run --ulimit nofile=512:512 --rm debian sh -c "unlimit -n"
```

Si se retira el flag de ulimits, daría los de por defecto. Se puede modificar el archivo de configuración para fijar unos límites pequeños y luego modificarlo en tiempo de ejecución.

También se pueden meter límites para otro tipo de recursos. Por ejemplo para limitar el alcance de una ataque un DDoS en el que nuestro contenedor puede quedarse sin recursos y esto afectaría al resto de contenedores (incluso a la máquina host) pues se quedarían sin recursors

Por ejemplo:

`docker run -it --cpus=".5" ubuntu /bin/bash`

De esta forma  nunca gastaría más de 0.5 CPUs

Otra configuración interesante es reiniciar en el fallo:

en el comando `--restart=on-failure`

### Privilegios

Por defecto el usuario es `root`

Se puede cambiar el usuario por defecto al correr la  imagen y podemos forzar a ello con el flag `-u uuid`

Por ejemplo, si corremos el siguiente comando con el usurio 4400 

`docker run -u 4400 alpine ls /root`

Nos devolverá que no tengo accesos

```
ls: can't open '/root': Permission denied

```

Otro flag relacionado con permisos es `--privileged`:

`docker run -it --privileged ubuntu`

`mount -t tmpfs none /mnt`

Luego correr:

`df -h`

Y nos muestra que ha sido capaz de montarlo, pero si no le añadimos privilegios devuelve:

```
mount: /mnt: permission denied.
```

El que sí tiene privilegios hereda todas las [capabilities](https://www.incibe-cert.es/blog/linux-capabilities) de linux.

Otra cosa es montar el socket de docker en un contenedor. Por ejemplo, levantar un docker dentro de docker. Esto se ve mucho en CD/CI.

Por ejemplo:

`docker  run -v /var/run/docker.sock:/var/run/docker.sock -it docker`

Cuando se lanza tengo un docker dentro de docker es la misma ejecución de docker porque comparten el socket. Si lanzo dentro un contenedor ubuntu, también lo podré listar si hago docker ps en el host

## Seguridad en imágenes

Es más fiable confiar en una imagen de la que tengo acceso al `Dockerfile` que una que ya viene construida. Puede tener malware si la imagen no es confiable.

Por ejemplo, si buscamos un imagen de Wodpress encontraremos unas 8000 imágenes. La más popular es la imagen oficial que es la generada por Docker. En el caso de que la haya generado otro desarrollador estará indicado en la imagen. Por ejemplo `Multicontainer WordPress` de **Microsoft**

Se puede hacer una imagen a partir de un repositorio en GitHub como por ejemplo, esta [imagen](https://hub.docker.com/r/irespaldiza/whoami) alojada en https://github.com/irespaldiza/whoami por lo que se puede clonar o crearlo tú a partir del Dockerfile.

Es  bastante normal que el código deba estar compilado lo que añade más superficie a ser atacada porque no interesa tener un compilador en la imagen ya que si nuestro contenedor es atacado el atacante podría compilar programas en nuestro sistema, cosa que está totalmente prohibida.

Por ejemplo:

```dockerfile
FROM golang:alpine AS builder
ENV GO111MODULE=auto
COPY whoami.go /app/
WORKDIR /app
RUN go build -o whoami

FROM alpine
WORKDIR /app
COPY --from=builder /app/whoami /app/
ENTRYPOINT ./whoami
```


### Escaneo pasivo de vulnerabilidades

Un escáner de seguridad de contenedores ayudará a encontrar todas las vulnerabilidades dentro de los contenedores y a monitorearlas regularmente contra cualquier ataque, problema o error nuevo.

> -task-**Práctica 1**
>
> Una de ellas es [trivy](https://aquasecurity.github.io/trivy/v0.25.3/). Por ejemplo, descarga [https://github.com/christophetd/log4shell-vulnerable-app](https://github.com/christophetd/log4shell-vulnerable-app) que contiene, entre otras, la vulnerabilidad [log4shell](https://www.cvedetails.com/cve/CVE-2022-23307/). Genera la imagen y luego escanéala con trivy

> -task-**Práctica 2**
>
> Realiza un testeo de una imagen de Wordpress (no uses tags recientes, pues no tendrán tantas vulnerabilidades)

> -task-**Práctica 3**
>
> Realiza un testeo con DependencyTrack a partir del BOM generado con [Syft](https://github.com/anchore/syft/), ten en cuenta que el formato de salida debe ser `cyclonedx`. También realiza el testeo con [Grype](https://github.com/anchore/grype/)

Más información en

* [Docker Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html)
* [Anchore](https://anchore.com/opensource/)
* [https://geekflare.com/container-security-scanners/](https://geekflare.com/container-security-scanners/)