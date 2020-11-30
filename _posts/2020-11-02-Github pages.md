---
typora-copy-images-to: ../assets/img/github-pages/
typora-root-url: ../../
layout: post
categories: tema1 git
title: GitHub Pages
conToc: false
---
# GitHub Pages
Ya que tenemos una cuenta en `GitHub`, vamos a usar la posibilidad de alojar una web estática personal en la url `https://nombre-de-usuario.github.io`

Esta web la usaremos para realizar las actividades del módulo. De esta forma, podéis practicar con git y tener siempre actualizadas las mismas.

> En mi opinión personal, la mejor herramienta para trabajar en formato **markdown** es [typora](https://typora.io/)

Hay muchas webs alojadas en `GitHub`: [Bootstrap](https://getbootstrap.com/), [Semantic UI](https://semantic-ui.com/), [Electron](https://www.electronjs.org/), [Foundation](https://get.foundation/), [Facebook design](https://design.facebook.com/), ...

En las siguientes URLs tenéis más ejemplos:
* [https://github.com/collections/github-pages-examples](https://github.com/collections/github-pages-examples)
* [https://webdesignledger.com/best-github-project-pages/](https://webdesignledger.com/best-github-project-pages/)

Crear una página personal o para un proyecto es muy sencillo (además de gratis):
1. Crear un nuevo repositorio con el formato `username.github.io` donde `username` es vuestro nombre usuario de `GitHub`. También lo podéis crear en cualquier repositorio si os dais de alta en [GitHub Student Developer Pack](https://education.github.com/students)
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

## -tarea-Crea tu página personal
> Crea tu página en GitHub Pages. Todas las prácticas que hagas, las has de crear como un nuevo post y en la tarea de Moodle hacer referencia al mismo