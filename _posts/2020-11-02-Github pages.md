---
typora-copy-images-to: ../assets/img/github-pages/
typora-root-url: ../assets/
layout: post
categories: tema1 git practicas
---
# GitHub Pages
Ya que tenemos una cuenta en `GitHub`, vamos a usar la posibilidad de alojar una web estática personal en la url `https://nombre-de-usuario.github.io`

Esta web la usaremos para realizar las actividades del módulo. De esta forma, podéis practicar con git y tener siempre actualizadas las mismas.

> En mi opinión personal, la mejor herramienta para trabajar en formato markdown es [typora](https://typora.io/)

Hay muchas webs alojadas en `GitHub`: Bootstrap, Semantic UI, Electron.io, Foundation, Facebook design, ...

En las siguientes URLs tenéis más ejemplos:
* https://github.com/collections/github-pages-examples
* https://webdesignledger.com/best-github-project-pages/

Crear una página personal o para un proyecto es muy sencillo (además de gratis):
1. Crear un nuevo repositorio con el formato `username.github.io` donde `username` es vuestro nombre usuario de `GitHub`
2. Clonar el repositorio en local
```bash
git clone https://github.com/username/username.github.io
```
Por ejemplo, en mi caso es:
```bash
git clone https://github.com/victorponz/victorponz.github.io
```
3. Ir al directorio local del proyecto y crear una página de ejemplo
```bash
cd victorponz.github.io
echo "Hello World" > index.html
```
4. Hacer un `push`
```bash
git add --all
git commit -m "Initial commit"
git push -u origin master
```
5. Ya está!! https://victorponz.github.io/