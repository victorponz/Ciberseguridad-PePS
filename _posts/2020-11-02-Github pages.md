---
typora-copy-images-to: ../assets/img/github-pages/
typora-root-url: ../../
layout: post
categories: tema1 git
title: GitHub Pages
conToc: false
subtitle: Creación de una página personal
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
header-left: UD 1. GitHub Pages
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

## Crea tu página personal

> -task-**Tarea**
>
> Crea tu página en GitHub Pages. Todas las prácticas que hagas, las has de crear como un nuevo post y en la tarea de Moodle hacer referencia al mismo

