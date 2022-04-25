---
typora-copy-images-to: ../assets/img/AppPhyton/
typora-root-url: ../../
layout: post
categories: tema2 Aplicación en Python
title: Aplicación en Python
conToc: true
subtitle: Usando docker-compose
author:
- Víctor Ponz
lang: es
titlepage: true
titlepage-background: assets/img/despliegue.png
page-background: assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 2. Aplicación en Python
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
## Qué aprenderemos

* a usar `docker`
* a usar `docker-compose` para crear una aplicación basada en microservicios
* a crear `branches` para cada nueva característica en *git*
* a crear `tags` para guardarnos el estado del repo en un momento dado


## 1. Hello World!

Para empezar, crea un nuevo repositorio en GitHub y clónalo en local

Para esta práctica hemos de crear la siguiente estructura:

![Estructura ficheros](/Ciberseguridad-PePS/assets/img/AppPhyton/image-20210616160236314.png)

Crea esta estructura de directorio y súbela a git

Creamos la primera versión de una pequeña aplicación que, de momento, va a mostrar el famoso **"Hello World!"**. Este es el contenido del `Dockerfile`:

```dockerfile
FROM python:3.4
RUN pip install Flask==0.10.1
WORKDIR /app
COPY app /app
CMD ["python", "identidock.py"]
```

y ahora creamos el archivo `identidock.py` 

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World!\n'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
```

Este programa :

* <span style='color:red'>(1) </span>usa Flask para desarrollar la aplicación
* <span style='color:red'>(4) </span> Crea la ruta `/`  asociada a una URL y el método `hello_word` que responde a dicha ruta
* <span style='color:red'>(9) </span>Ejecuta el servidor web de python

> Según la <a href='https://es.wikipedia.org/wiki/Flask'> Wikipedia</a><br>
<strong>Flask</strong> es un <a href='https://es.wikipedia.org/wiki/Framework'>framework</a> minimalista escrito en <a href='https://es.wikipedia.org/wiki/Python'>Python</a> que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código.




Vamos a generar la imagen y a correr el contenedor:

```
docker build -t identidock .
docker run -d -p 5000:5000 identidock
```

Una vez iniciado el contenedor, usaremos el comando `curl` para realizar una petición:

```bash
curl localhost:5000
```

que nos devuelve:

```bash
Hello World!
```

El problema con este tipo de flujo de trabajo es que cada vez que se hace una modificación en el código se debe parar y reiniciar el contenedor. Se puede mejorar haciendo un *bind mount* del directorio local `app` de tal forma que quedaría de esta forma:

```bash
docker run -d -p 5000:5000 -v "$(pwd)"/app:/app identidock
```

Este argumento `-v $(pwd)/app:/app` hace que la carpeta `app` del host pase al contenedor ya montada en el directorio `/app` del mismo.

Pero antes de continuar debemos haber parado el contenedor creado anteriormente. Una forma fácil es usar el contenedor que devuelve el comando `$(docker ps -lq)` que mediante el flag `l` lista sólo el último lanzado.

```bash
docker stop $(docker ps -lq)
docker rm $(docker ps -lq)
```

Ahora si modificamos el archivo `identidock.py` e introducimos el siguiente contenido, 

```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello World from Ciberseguridad!\n'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')

```

veremos que la salida del navegador ha cambiado

```bash
curl localhost:5000
```

 

```
Hello World from Ciberseguridad!
```

> **GIT**
>
> Si todo ha ido bien, **actualiza tu repositorio remoto** creando un *tag* y subiendo este *tag* también
>
> 1. Crea un `commit` con el mensaje v1
> 2. Haz un `push` de dicho `commit`
> 3. Ahora crea un *tag* con el comando `git tag v1` y sube este *tag* a tu repo mediante `git push origin v1`

## 2. Identicons

> **GIT**
>
> Crea una nueva [rama](https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell) para programar la nueva característica mediante el comando 
>
> * `git branch identicons` para crear una nueva rama
> * `git checkout identicons` para cambiar a la mueva
>
> También se puede conseguir el mismo resultado con el comando
> `git branch -d identicons`

Vamos a convertir la aplicación anterior en una aplicación web que, dado un nombre de usuario, genere un [identicon](http://identicon.net/)

El primer caso es modificar nuestra aplicación para que muestre un formulario en el que se pueda escribir. 

Reemplaza el fichero `identidock.py` con el siguiente contenido:

```python
from flask import Flask
app = Flask(__name__)
default_name = 'Víctor Ponz'
@app.route('/')
def get_identicon():
	name = default_name
	header = '<html><head><title>Identidock</title></head><body>'
	body = '''<form method="POST">
			Hola <input type="text" name="name" value="{}">
			<input type="submit" value="submit">
			</form>
			<p>Te pareces a:
			<img src="/monster/monster.png"/>
			'''.format(name)
	footer = '</body></html>'
	return header + body + footer
if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
```

* en las líneas <span style='color:red'>(9 al 14) </span>, crea un formulario para poder ser enviado por `POST`

**Este es el resultado**

![Formulario](/Ciberseguridad-PePS/assets/img/AppPhyton/image-20210616182531601.png)

De momento el enlace a la imagen aparece roto, pero es normal. En el siguiente apartado lo enlazaremos con el generador de identicon.

### 2.1 Sacando partido a un generador de imágenes

Vamos a iniciar un contenedor con una imagen de [dnmonster](https://github.com/amouat/dnmonster) que proporciona avatares únicos para una cadena dada. Para ello usaremos una imagen de este servicio más adelante que expone una API REST para generar las imágenes.

Primero modificamos el archivo `identidock.py` con el siguiente contenido:

```python
from flask import Flask, Response
import requests
app = Flask(__name__)
salt = "UNIQUE_SALT"
default_name = 'Víctor Ponz'

@app.route('/')
def mainpage():
	name = default_name
	header = '<html><head><title>Identidock</title></head><body>'
	body = '''<form method="POST">
			Hola <input type="text" name="name" value="{0}">
			<input type="submit" value="submit">
			</form>
			<p>Te pareces a:
			<img src="/monster/monster.png"/>
			'''.format(name)
	footer = '</body></html>'
	
	return header + body + footer

@app.route('/monster/<name>')
def get_identicon(name):
	r = requests.get('http://dnmonster:8080/monster/' + name + '?size=80')
	image = r.content
	return Response(image, mimetype='image/png')
	
if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
```

* <span style='color:red'>(23) </span> La parte novedosa es el método `get_identicon` que se conecta a la URL [http://dnmonster:8080](http://dnmonster:8080) para obtener una imagen y devolverla en el objeto `Response` El puerto 8080 es donde escucha la imagen `dmonster`

Hemos de incluir el paquete `requests` en la instalación, por lo que modificamos el `Dockerfile`

```dockerfile
FROM python:3.4
RUN pip install Flask==0.10.1 requests==2.5.1
WORKDIR /app
COPY app /app
CMD ["python", "identidock.py"]
```

Ya podemos instalar la imagen para lanzar el contenedor de **dmonster** y enlazarlo con nuestra aplicación. 

Primero lo haremos mediante comandos y luego usaremos `docker-compose`.

```bash
docker run -d --name dnmonster amouat/dnmonster:1.0
```

Ahora iniciamos el contenedor de la aplicación casi de la misma manera que en anteriormente, excepto que agregamos el argumento `--link dnmonster: dnmonster` para conectar los contenedores. Esta es la magia que hace que la URL [http://dnmonster: 8080](http://dnmonster: 8080) sea direccionable en el código Python

```bash
docker run -d -p 5000:5000 -v "$(pwd)"/app:/app --link dnmonster:dnmonster identidock
```

Si ahora abres http://localhost:5000 deberías ver una página como la siguiente:

![dnmonsters](/Ciberseguridad-PePS/assets/img/AppPhyton/image-20210617091803206.png)

No parece mucho, pero acabamos de generar nuestro primer icono de identificación.

> **GIT**
>
> Crea un nuevo `tag` que identifique esta versión mediante los comandos
>
> ```
> git add *
> git commit -m v2.1
> git tag v2.1
> git push origin v2.1
> ```
>
> Lo que hemos creado es como un `snapshot` de cómo está el repositorio en este momento
>
> Si quieres comprobar en qué rama estás, usa el comando
>
> ```
> git branch
> ```

### 2.2 Generar identicons

El botón de enviar todavía está roto, porque en realidad no estamos usando ninguna entrada del usuario, pero lo arreglaremos en un minuto. 

Primero, hagamos un archivo `Compose` (para que no tengamos que recordar todos esos comandos de ejecución).

Creamos `docker-compose.yml`:

```yaml
identidock:
  build: .
  ports:
    - "5000:5000"
  volumes:
    - ./app:/app
  links:
    - dnmonster
dnmonster:
  ports:
    - "5080:8080"
  image: amouat/dnmonster:1.0

```

Mediante `Compose` definimos los distintos servicios que componen nuestra aplicación de tal forma que no hemos de estar parando los contenedores uno a uno.

Además define que el contenedor `identidock` depende de `dnmonster` por lo que primero lanza este contenedor.

Paramos el contenedor y hacemos `docker-compose up -d`

Ya sólo nos queda hacer que funcione el botón submit. Para ello hacemos que el controlador `/` también responda a peticiones `POST`  `(@app.route('/', methods=['GET', 'POST']`) y pasar el nombre como un parámetro para el generador de identicon.

```python
from flask import Flask, Response, request
import requests
import hashlib
app = Flask(__name__)
salt = "UNIQUE_SALT"
default_name = 'Víctor Ponz'

@app.route('/', methods=['GET', 'POST'])
def mainpage():
	name = default_name
	if request.method == 'POST':
		name = request.form['name']
	salted_name = salt + name
	name_hash = hashlib.sha256(salted_name.encode()).hexdigest()
	header = '<html><head><title>Identidock</title></head><body>'
	body = '''<form method="POST">
			Hola <input type="text" name="name" value="{0}">
			<input type="submit" value="submit">
			</form>
			<p>Te pareces a:
			<img src="/monster/{1}"/>
			'''.format(name, name_hash)
	footer = '</body></html>'
	
	return header + body + footer
@app.route('/monster/<name>')
def get_identicon(name):
	r = requests.get('http://dnmonster:8080/monster/' + name + '?size=80')
	image = r.content
	return Response(image, mimetype='image/png')
	
if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
```

Ahora, cada vez que introduzcamos un nombre, nos devolverá un *monstruo*

![image-20211214193155151](/Ciberseguridad-PePS/assets/img/AppPhyton/image-20211214193155151.png)

> **GIT**
>
> Ahora es el momento de fusionar (`merge`) la rama `identicons` con la rama `master`
>
> Para ello
>
> ```
> git add *
> git commit -m "Finalizar identicons"
> git checkout master 
> ```
>
> Si revisáis ahora el código fuente veréis que está como estaba antes de empezar la nueva rama. Ahora vamos a fusionar las dos ramas
>
> ```
> git merge identicons
> ```
>
> Y por arte de magia ya tenemos aplicados los cambios
>
> Es hora de eliminar la rama creada mediante el comando
>
> ```
> git branch -d identicons
> ```
>
>  Y de subir los cambios al repo
>
> ```
> git push
> ```
>
> También crearemos un nuevo `tag` 
>
> ```
> git tag v2.2
> git push origin v2.2
> ```

## 3. Añadir cacheo

> **GIT**
> Crea una nueva rama llamada `cacheo` y muévete a dicha rama

Hasta aquí todo bien. Pero hay una cosa horrible sobre esta aplicación en este momento (aparte de los monstruos): cada vez que se solicita un monstruo, hacemos una llamada computacionalmente costosa al servicio `dnmonster`. No hay necesidad de esto; el objetivo de un icono de identificación es que la imagen sigue siendo la misma para una entrada determinada, por lo que deberíamos almacenar en **caché** el resultado.

Usaremos `Redis` para lograrlo. `Redis` es un almacén de datos de **clave-valor** en memoria. Es excelente para tareas como esta en las que no hay una gran cantidad de información y no nos preocupa la durabilidad (si una entrada se pierde o se elimina, podemos simplemente regenerar la imagen).

Podríamos agregar el servidor `Redis` a nuestro contenedor `identidock`, pero es más fácil y más idiomático crear un contenedor nuevo. De esta manera, podemos aprovechar la imagen oficial de Redis que ya está disponible en Docker Hub y evitar la molestia adicional de ejecutar varios procesos en un contenedor.

```yaml
identidock:
  build: .
  ports:
    - "5000:5000"
  volumes:
    - ./app:/app
  links:
    - dnmonster
    - redis
dnmonster:
  ports:
    - "5080:8080"
  image: amouat/dnmonster:1.0
redis:
  image: redis:3.0
```

Ahora instalamos `redis` dentro de la imagen del proyecto en el archivo `Dockerfile`

```dockerfile
FROM python:3.4
RUN pip install Flask==0.10.1 requests==2.5.1 redis==2.10.3
WORKDIR /app
COPY app /app
CMD ["python", "identidock.py"]
```

Y modificamos el código para usar la imagen `redis`

```python
from flask import Flask, Response, request
import requests
import hashlib
import redis

app = Flask(__name__)
cache = redis.StrictRedis(host = 'redis', port = 6379, db = 0)
salt = "UNIQUE_SALT"
default_name = 'Víctor Ponz'

@app.route('/', methods=['GET', 'POST'])
def mainpage():
	name = default_name
	if request.method == 'POST':
		name = request.form['name']
	salted_name = salt + name
	name_hash = hashlib.sha256(salted_name.encode()).hexdigest()
	header = '<html><head><title>Identidock</title></head><body>'
	body = '''<form method="POST">
			Hola <input type="text" name="name" value="{0}">
			<input type="submit" value="submit">
			</form>
			<p>Te pareces a:
			<img src="/monster/{1}"/>
			'''.format(name, name_hash)
	footer = '</body></html>'
	
	return header + body + footer
@app.route('/monster/<name>')
def get_identicon(name):
	image = cache.get(name)
	if image is None:
		print ("Cache miss", flush=True)
		r = requests.get('http://dnmonster:8080/monster/' + name + '?size=80')
		image = r.content
		cache.set(name, image)
	return Response(image, mimetype='image/png')
		
if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
```

Ahora sólo nos queda parar el contenedor, construirlo y levantarlo

```bash
docker-compose stop
docker-compose build
docker-compose up -d
```

> **GIT**
>
> Muévete a la rama `master` y fusiona los cambios. Crea y sube la rama y el `tag` v3



**Referencias**

* Using - Docker: O'Reilly, Adrian Mouat
