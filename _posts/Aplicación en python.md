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
## Crear la primera imagen

Los tags están en [https://github.com/using-docker/using_docker_in_dev/tags](https://github.com/using-docker/using_docker_in_dev/tags)

Hemos de crear la siguiente estructura:

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

> [info]Según la [Wikipedia](https://es.wikipedia.org/wiki/Flask)
>
> **Flask** es un [framework](https://es.wikipedia.org/wiki/Framework) minimalista escrito en [Python](https://es.wikipedia.org/wiki/Python) que permite crear aplicaciones web rápidamente y con un mínimo número de líneas de código.

