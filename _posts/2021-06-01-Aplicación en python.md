---
typora-copy-images-to: ../assets/img/AppPhyton/
typora-root-url: ../../
layout: post
categories: tema2 Aplicación en Python
title: Aplicación en python
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
## Hello World!

Los tags están en [https://github.com/using-docker/using_docker_in_dev/tags](https://github.com/using-docker/using_docker_in_dev/tags)

Para esta práctica hemos de crear la siguiente estructura:

![Estructura ficheros](/Ciberseguridad-PePS/assets/img/AppPhyton/image-20210616160236314.png)

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

* usa Flask para desarrollar la aplicación
* Crea la ruta `/`  asociada a una URL y el método `hello_word` que responde a dicha ruta
* Ejecuta el servidor web de python

>[info]Según la [Wikipedia](https://es.wikipedia.org/wiki/Flask)<br>
>**Flask** es un [framework](https://es.wikipedia.org/wiki/Framework) minimalista escrito en [Python](https://es.wikipedia.org/wiki/Python) que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código.

Vamos a generar la imagen y a correr el contenedor:

```
docker build -t identidock .
docker run -d -p 5000:5000 identidock
```

Una vez iniciado el contenedor, usaremos el comando curl para realizar una petición:

```
curl localhost:5000
```

que nos devuelve:

```
Hello World!
```

El problema con este tipo de flujo de trabajo es que cada vez que se hace una modificación en el código se debe parar y reiniciar el contenedor. Se puede mejorar haciendo un *bind mount* del directorio local `app` de tal forma que quedaría de esta forma:

```
docker run -d -p 5000:5000 -v "$(pwd)"/app:/app identidock
```

Este argumento `-v $(pwd)/app:/app` hace que la carpeta `app` del host pase al contenedor ya montada en el directorio `/app` del mismo.

Pero antes de continuar debemos haber parado el contenedor creado anteriormente. Una forma fácil es usar el contenedor que devuelve el comando `$(docker ps -lq)` que mediante el flag `l` lista sólo el último lanzado.

```
docker stop $(docker ps -lq)
docker rm $(docker ps -lq)
```

## Identicons

Vamos a convertir la aplicación anterior en una aplicación web que, dado un nombre de usuario, genere un [identicon](http://identicon.net/)

El primer caso es modificar nuestra aplicación para que muestre un formulario en el que se pueda escribir. Reemplaza el fichero `identidock.py` con el siguiente contenido:

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

Este es el resultado

![Hola](/Ciberseguridad-PePS/assets/img/AppPhyton/image-20210616182531601.png)

De momento el enlace a la imagen aparece roto, pero es normal. En el siguiente apartado lo enlazaremos con el generador de identicon.

### Sacando partido a un generador de imágenes

Vamos a iniciar un container con una imagen de [dnmonster](https://github.com/amouat/dnmonster). Para ello usaremos una imagen de este servicio más adelante que expone una Api REST para generar las imágenes.

Primero modificamos el archivo `identidock.py` con el siguiente contenido:

```python
from flask import Flask, Response
app = Flask(__name__)
default_name = 'Víctor Ponz'

@app.route('/')
def mainpage():
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
	
@app.route('/monster/<name>')
def get_identicon(name):
	r = request.get('http://dnmonster:8080/monster/' + name + '?size=80')
	image = r.content
	return Response(image, mimetype='image/png')

if __name__ == '__main__':
	app.run(debug=True, host='0.0.0.0')
```

La parte novedosa es el método `get_identicon` que se conecta a la URL [http://dnmonster:8080](http://dnmonster:8080) para obtener una imagen y devolverla en el objeto `Response`

Hemos de incluir el paquete response en la instalación, por lo que modificamos el `Dockerfile`

```dockerfile
FROM python:3.4
RUN pip install Flask==0.10.1 requests==2.5.1
WORKDIR /app
COPY app /app
CMD ["python", "identidock.py"]
```

