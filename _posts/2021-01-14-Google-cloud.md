---
typora-copy-images-to: ../assets/img/cloud/
typora-root-url: ../../
layout: post
categories: tema2 Docker
title: Google Cloud
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

## ¿Qué es?

> Según la [Wikipedia](https://en.wikipedia.org/wiki/Google_Cloud_Platform)
>
> **Google Cloud Platform** (**GCP**), offered by [Google](https://en.wikipedia.org/wiki/Google), is a suite of [cloud computing](https://en.wikipedia.org/wiki/Cloud_computing) services that runs on the same infrastructure that Google uses internally for its end-user products, such as [Google Search](https://en.wikipedia.org/wiki/Google_Search), [Gmail](https://en.wikipedia.org/wiki/Gmail), [file storage](https://en.wikipedia.org/wiki/Google_Drive), and [YouTube](https://en.wikipedia.org/wiki/YouTube).[[1\]](https://en.wikipedia.org/wiki/Google_Cloud_Platform#cite_note-1) Alongside a set of management tools, it provides a series of modular cloud services including computing, [data storage](https://en.wikipedia.org/wiki/Computer_data_storage), [data analytics](https://en.wikipedia.org/wiki/Data_analysis) and [machine learning](https://en.wikipedia.org/wiki/Machine_learning).[[2\]](https://en.wikipedia.org/wiki/Google_Cloud_Platform#cite_note-auto-2) Registration requires a [credit card](https://en.wikipedia.org/wiki/Credit_card) or bank account details.[[3\]](https://en.wikipedia.org/wiki/Google_Cloud_Platform#cite_note-3)
>
> Google Cloud Platform provides [infrastructure as a service](https://en.wikipedia.org/wiki/Infrastructure_as_a_service), [platform as a service](https://en.wikipedia.org/wiki/Platform_as_a_service), and [serverless computing](https://en.wikipedia.org/wiki/Serverless_computing) environments.
>
> In April 2008, Google announced [App Engine](https://en.wikipedia.org/wiki/Google_App_Engine), a platform for developing and hosting web applications in Google-managed [data centers](https://en.wikipedia.org/wiki/Data_center), which was the first cloud computing service from the company. The service became generally available in November 2011. Since the announcement of App Engine, Google added multiple cloud services to the platform.

## Práctica

1. Crea una cuenta en [Google Cloud](https://cloud.google.com/)
2. Sigue las [instrucciones](https://cloud.google.com/appengine/docs/standard/nodejs/building-app	) para desarrollar una aplicación en `node.js` y desplegarla en Google Cloud

* debes crear un repositorio en GitHub con el código de la aplicación
* Realizar un primer `commit`
* Modifica la aplicación para que muestre el mensaje "*Hello from Ciberseguridad*"
  ![image-20210211202523480](/Ciberseguridad-PePS/assets/img/cloud/image-20210211202523480.png)
* Crea el formulario `/submit`
* cada vez que modifiques algún archivo del proyecto, haz `push` al repositorio

