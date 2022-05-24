---
typora-copy-images-to: ../assets/img/fallos/
typora-root-url: ../../
layout: post
categories: tema5 CD/CI
title:  Herramientas de simulación de fallos
conToc: true
render_with_liquid: false
subtitle: 
author:
- Víctor Ponz
lang: es
titlepage: true
titlepage-background: assets/img/ci-cd.png
apage-background: assets/img/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 5. Gestión de la configuración
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

La **ingeniería del caos** es una disciplina que se centra en experimentar sobre un sistema  software en producción con el objeto de generar confianza en la  capacidad del sistema para responder y hacer frente ante situaciones  turbulentas e inesperadas.

Como  consecuencia del enorme auge y expansión de los microservicios y las  arquitecturas distribuidas en la nube, las aplicaciones software y sus  requerimientos de seguridad se han vuelto cada vez más complejos. 

Muchos son los beneficios que aporta la **ingeniería del caos**, a continuación se destacan algunos de los más importantes:

- Reducción de las pérdidas económicas ocasionadas por la aparición de problemas críticos.
- Contribuye a garantizar la calidad y alta disponibilidad de los servicios ofrecidos.
- Ayuda a comprender mejor el funcionamiento de los propios sistemas y generar confianza.

Organizaciones tan populares como ***Netflix***, ***LinkedIn*** o ***Facebook*** realizan ingeniería del caos con objeto de mejorar la comprensión de  sus sistemas distribuidos. Esta resulta especialmente útil para  encontrar nuevos problemas y corregirlos antes que fallos en sus  sistemas afecten a sus usuarios y repercutan negativamente sobre la  productividad y prestigio de la propia organización.

<iframe width="560" height="315" src="https://www.youtube.com/embed/ocvFr7PWCDE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

A continuación, se presentan algunas de  las herramientas más populares utilizadas en la ingeniería del caos para simulación de fallos:

* **Simian Army** 
  Es un conjunto de herramientas o *“monos”* desarrollado por el equipo técnico de ***Netflix*** para comprobar la salud y las medidas contra fallos de sus sistemas informáticos. Siempre hay un primer recluta, y ese fue [**Chaos Monkey**](https://netflix.github.io/chaosmonkey/), una herramienta que sabotea los servidores de producción de forma  aleatoria, con la finalidad de que los equipos de mantenimiento no sean  capaces de predecir cuándo y cómo tendrá lugar el sabotaje. Para  utilizar **Chaos Monkey** es necesario instalar[ Spinnaker](https://spinnaker.io/), la plataforma de entrega continua utilizada por Netflix.
  Hoy en día, el ejército de monos está  compuesto por varios soldados, cada uno de ellos con una función muy  específica:
  * **Latency Monkey:** Introduce retrasos artificiales en la capa de comunicación cliente-servidor para simular la degradación del servicio y mide si los servicios responden adecuadamente.
  * **Conformity Monkey:** Busca servidores que no se adhieren a las mejores prácticas y los cierra.
  * **Security Monkey:** Es una extensión de Conformity Monkey. Encuentra violaciones de seguridad o  vulnerabilidades y finaliza las instancias infractoras. También revisa los certificados SSL y DRM.
  * **Doctor Monkey:** Monitoriza el funcionamiento de los servidores, comprobando el nivel de carga de la CPU, para detectar instancias poco saludables.
  * **10-18 Monkey:** Detecta problemas de configuración y tiempo de ejecución en instancias  que atienden a clientes en múltiples regiones geográficas, utilizando diferentes idiomas y conjuntos de caracteres.
  * **Chaos Gorilla es similar a Chaos Monkey:** Pero simula una interrupción de toda una zona de disponibilidad de Amazon. Comprueba que los servicios se re-equilibren automáticamente en las zonas de disponibilidad funcional sin impacto visible para el  usuario.
  * **Janitor Monkey:** Asegura que el entorno de ejecución está libre de basura. Busca los recursos no utilizados y los libera.

* **Chaos Toolkit**
  Es un [framework](https://chaostoolkit.org/) desarrollado en Python, se trata un proyecto cuya misión es proporcionar un kit de herramientas y una API gratuitos, abiertos y  dirigidos por la comunidad a todas las diversas formas de herramientas  de ingeniería del caos que la comunidad necesita.

* **Chaos Kube**
  Es un herramienta para la generación de caos de código abierto que mata pods en clúster de Kubernetes,  periódicamente de forma aleatoria. Se pueden filtrar los ***pods*** de destino en [Chaoskube](https://github.com/linki/chaoskube) usando espacios de nombres, etiquetas, anotaciones, ..

* **Simmy**
  Es una [herramienta](https://github.com/Polly-Contrib/Simmy) de ingeniería del caos e inyección de fallos inspirada en *Simian Army* , pero que se integra con el proyecto de resiliencia [**Polly de .NET**](http://www.thepollyproject.org). Permite crear multitud políticas de inyección de caos a través de *Polly*: provoca excepciones, comportamientos inesperados en el sistema o añades latencias a la ejecución de los distintos procesos.

* **Chaos mess**: Es una [plataforma](https://chaos-mesh.org/) de ingeniería del caos de código abierto que permite  simular situaciones de caos en entornos de Kubernetes. Admite gran variedad de fallos: caídas en la ejecución de los pods, fallas de contenedor, fallas del sistema de archivos, errores en las transmisiones de red, alteraciones de tiempo en sistema y fallos del kernel.

* **Gremlin**
  Es una [herramienta](https://www.gremlin.com/) comercial, disponible a través de una plataforma SaaS, o como ellos denominan FaaS (Failure as a Service), que  permite experimentar sobre gran variedad de sistemas, incluidos servidores baremetal, los proveedores de cloud, contenedores, kubernetes, e incluso servicios serverless. Permite inyectar multitud de fallos como: introducir latencias, provocar la pérdida de tráfico de red, manipular la hora del sistema, apagar o reiniciar hosts y matar procesadores.

---

Este material formativo ha sido elaborado por Pedro Antonio Santiago Santiago y José Gaspar  Sánchez García para el proyecto “Ciberseguridad en Tecnologías de la  Información” financiado por Dualiza Bankia y FP Empresa.