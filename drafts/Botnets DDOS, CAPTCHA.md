---
typora-copy-images-to: ../assets/img/inicprog/
typora-root-url: ../../
layout: post
categories: tema0 Prueba de aplicaciones web
title: Botnets, DDOS, Captcha
subtitle: 
conToc: true
titlepage: true
titlepage-background: assets/inicprog/dibujo.png
page-background: assets/fondo-pagina.png
urlcolor: CornflowerBlue
linkcolor: black
toc-own-page: true
toc-title: Contenidos
header-left: UD 0. Iniciación a la programación
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
## Ataques de denegación de servicio

Fuente [Incibe](https://www.incibe-cert.es/blog/medidas-proteccion-frente-ataques-denegacion-servicio-dos)

Los ataques de denegación de servicio son un tipo de ataque informático a través del cual se reduce o anula la capacidad de servidores o recursos informáticos de ofrecer servicio. Existen diferentes escenarios en los que se aplica, como por ejemplo la saturación de servicios online mediante el envío masivo de peticiones o la explotación de vulnerabilidades de programas o servicios que dejan de funcionar total o parcialmente. En la mayoría de estos ataques, los atacantes emplean una gran variedad de técnicas y herramientas con las que ocultar su identidad, por lo que resulta un gran problema para capturar a los responsables.

Casi en la mayoría de los casos este tipo de ataque supone un gran problema para quien lo recibe debido a que ya no es solo que tus potenciales clientes no puedan acceder a tus servicios, sino que tus empleados también podrían ser incapaces de acceder a los recursos o a la gestión del servicio para actuar en el mismo y tratar de impedir o mitigar el incidente.

Para evitar todos estos peligros y una posible pérdida de reputación por parte de tus clientes a tu empresa además de las posibles pérdidas económicas, es necesario prepararse ante cualquier situación como esta y tomar las medidas necesarias para prevenir ser víctima de estos ataques.

En algunos casos, el ataque es llevado a cabo mediante el uso de múltiples equipos de origen, es decir, las peticiones que se realizan a tus servicios son desde una gran cantidad de equipos diferentes, incluso separados geográficamente. Este tipo es llamado ataque de denegación de servicio distribuido (DDoS), y por lo general se utilizan [botnets](https://es.wikipedia.org/wiki/Botnet) para realizarlo.

En publicaciones anteriores se explicaron [los tipos básicos de ataques DoS y la clasificación que se le puede dar a cada ataque dependiendo de la capa del modelo OSI a la que afecte](https://www.incibe-cert.es/blog/clasificacion-ataques-dos), como pueden ser a la [capa de aplicación](https://www.incibe-cert.es/blog/dos-capa-aplicacion), o la [capa de infraestructura](https://www.incibe-cert.es/blog/dos-capa-infraestructura), que abarca la capa de transporte y de red del modelo OSI.

Sin lugar a dudas, los ataques de denegación de servicio pueden parecer infalibles debido a que aprovechan un sinfín de vulnerabilidades dentro de los protocolos de internet, o incluso colocarnos en una situación que puede parecer de indefensión si los estamos sufriendo, pero tomando algunas medidas de prevención y control podemos paliar estas circunstancias y estar preparados para salir indemnes de muchos incidentes de este tipo de ataques.

A la hora de implantar medidas para evadir estos ataques debemos de tener en cuenta los diferentes vectores que se pueden aprovechar para realizarlo.

## Medidas de protección de nuestra red

El primer vector en el que podemos implementar capas de seguridad es la infraestructura de red, ya que es la ruta de entrada a los servicios ofrecidos. Alguna de las medidas a tener en cuenta es por ejemplo, en el caso de tener los servicios online dentro de una red corporativa, la instalación de un router entre esta red y el proveedor de servicios (ISP), debido a que podemos configurar fácilmente capas de seguridad tales como una lista de control de acceso (ACL), que controla el acceso a nuestra red en base a las IP’s de los solicitantes, y/o un cortafuegos. En muchas ocasiones este router es proporcionado por el ISP, pero no siempre es así, o no siempre nos permite configurar estas medidas de seguridad, debiendo en este caso contar con un router adicional interno en nuestra red a modo de cortafuegos que nos permita aplicar estas medidas de seguridad.

Por otro lado, en el caso de que los servicios online se encuentren alojados en servidores externos de hosting, VPS o servidores dedicados, las medidas de protección que ofrece el router y comentadas en el párrafo anterior deben ser implementadas virtualmente, es decir, en forma de servicios del servidor, o a través de los paneles de configuración del proveedor. Además es necesario valorar y consular las medidas de protección que el proveedor aplica ya por defecto en toda su red.

También es recomendable disponer de una cantidad considerable de ancho de banda tanto por parte de nuestro sistema como por parte de nuestro proveedor de servicios, de esta manera podemos llegar a evitar ataques DoS del tipo ICMP Flood, entre otros. En el caso de no poder disponer de un ancho de banda mayor implantar una red de entrega de contenidos, o CDN puede ser una solución bastante efectiva en el caso de que ofrezcas servicios a zonas alejadas geográficamente y tengas mucho volumen de peticiones. Una CDN se trata de una red con servidores alejados geográficamente los cuales son copias exactas entre ellos, de esta manera ofreceríamos respuestas más rápidas a las peticiones web, aumentado la capacidad cache de nuestra red además de descongestionar nuestro servicio por el aumento de ancho de banda total. La utilización de un CDN es una de las medidas más eficaces ante grandes ataques de denegación de servicio por consumo de ancho de banda.

Otra de las medidas que podemos implementar es la instalación de un proxy inverso el cual apunte a varios servidores de nuestra red que tienen copias exactas de los servicios que queremos ofrecer. De esta maneras conseguiremos balancear el número de peticiones que un servidor recibe entre otros con las mismas funcionalidades y así no saturar el servicio. Además esta configuración ofrece otras ventajas, ya que por ejemplo nuestra web sería tolerante a fallos, o dispondría de un cache, haciendo que nuestro servicio sea más veloz.

También podemos ejecutar los diferentes servicios que ofrecemos desde nuestra red en diferentes máquinas, por ejemplo separar el servidor de correos del servidor web, ejecutando este último en una “zona desmilitarizada” (DMZ) de nuestra red.

 

## Medidas de protección en nuestra infraestructura

Otro de los frentes que debemos proteger es nuestra infraestructura de servidores como de dispositivos que componen nuestra red, tales como routers o switches.

En el caso de estos dispositivos, es necesario comprobar cada cierto tiempo el estado del software, es decir, en el caso de que no se actualicen automáticamente comprobar la versión de nuestros aparatos y de estar obsoleta, obtener la versión más reciente la cual solucione cualquier problema de seguridad o vulnerabilidad que haya sido descubierta. Algunos de los ataques de denegación de servicio son llevados a cabo mediante la explotación de los fallos de seguridad que los dispositivos puedan tener, por lo que es importante realizar inspecciones en busca de nuevas actualizaciones en la página web oficial del fabricante.

Desactivar todos los puertos que no sean necesarios en nuestros servidores si el objetivo de este es únicamente el de alojar un servicio web. En este caso, los puertos que deben de estar abierto son el 80/TCP u 8080/TCP para peticiones HTTP, o el 443/TCP para peticiones HTTPS. En el caso de querer alojar un servicio DNS, podemos tener abierto el puerto 53/TCP y/o 53/UDP. Además es aconsejable suprimir todos los servicios que no sean utilizados, y de esta manera evitar una posible explotación del mismo.

En el caso de servidores Windows es recomendable configurar ciertos registros como [*SynAttackProtect*](https://technet.microsoft.com/en-us/library/cc938202.aspx) y algunos relacionados, como son [*TcpMaxPortsExhausted*](https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-2000-server/cc938214(v=technet.10)) o [*TcpMaxHalfOpen*](https://technet.microsoft.com/en-us/library/cc938212.aspx) que controlan la pila TCP/IP para evitar ataques “SYN flood”. Además de para Windows, también existen soluciones similares para Linux tales como [SYN-Cookies, SYN-Cache y SYN-Proxy](https://security.stackexchange.com/questions/46756/what-is-the-difference-between-syn-cookie-syn-cache-and-syn-proxy). Este tipo de soluciones, debido a su necesidad de procesamiento, es recomendable instanciarlas en dispositivos que no sean el propio servidor que aloja el servicio principal.

A la hora de configurar un servidor para que aloje nuestra página web, es necesario dotarlo de diferentes medidas de seguridad tales como un cortafuego. En el caso de servidores web, además de cortafuegos, es aconsejable instalar un WAF, o “Web Application Firewall”, especializado en controlar las conexiones a nuestro sitio, filtrarlas, monitorearlas y bloquearlas en el caso de que considere maliciosas. Los WAFs nos los podemos encontrar en tipo “hardware” o tipo “software”.

### Características de los “Web Application Firewalls”

- Este tipo de firewalls pueden ser instalados en nuestro servidor como tal, o en otro que esté integrado en nuestra red. Esto hay que tenerlo muy en cuenta, debido a que también consume capacidad de procesamiento de nuestras máquinas ya que tiene que procesar las peticiones con las reglas que le definamos antes de entregarlas al servidor web, por lo que en el caso de estar recibiendo un ataque y que el servicio WAF falle o se degrade, también puede hacerlo nuestra página web.
- Existe otra forma hacerlos participes en la seguridad de nuestra red ya que podemos encontrar proveedores que ofrecen el servicio en remoto, es decir, en “cloud”. La manera en cómo funciona esta arquitectura es que la compañía a la que le contratas los servicios despliega el cortafuegos en sus servidores, dirigiendo y procesando allí el tráfico del servicio web antes de ser enviado a tu servidor ya sin ninguna amenaza. Algunos de los proveedores de estos servicios son [Akamai](https://www.akamai.com/es/es/), [CloudFlare](https://www.cloudflare.com/es/) y [Sucuri](https://sucuri.net/es/), entre otros.
- Además de bloquear ataques de denegación de servicio (DoS), los WAFs también son capaces de detectar y bloquear ataques como son “Cross-Site Scripting” o “SQL injection”.

Como podemos ver, en algunos casos los WAFs son una solución bastante óptima y sencilla, además puede utilizarse con una configuración “semi-automática”, debido a que los servicios de este tipo cuentan con configuraciones básicas que ya podrían proteger los servicios web de ataques de denegación de servicio. En cualquier caso, es aconsejable definir reglas de configuración a medida para adaptar el WAF a nuestra infraestructura y obtener una mejor protección aprovechando al máximo las características del WAF.

Como ya comentamos anteriormente, una modalidad de ataques de denegación de servicio (DoS) son los distribuidos. Los ataques de denegación de servicio distribuido (DDoS) son realizados a través de, por lo general, botnets. Puedes comprobar con [la herramienta de la OSI](https://www.osi.es/es/servicio-antibotnet) si alguno de los servidores de tu red pertenece a una de estas redes distribuidas delictivas y de esta manera evitar que seas una parte fundamental de estos ataques cuyo único fin es la extorsión y el dinero.

## Medidas de protección en nuestras aplicaciones web

A la hora de proteger aplicaciones web es importante tener en cuenta diferentes aspectos de Ciberseguridad que harán aumentar la resiliencia de nuestro sistema, y por ende la confianza que nuestros clientes tienen depositados en nuestros servicios.

En la mayoría de las ocasiones los ataques de denegación de servicio dirigido a aplicaciones web no se llevan a cabo a través de la sobrecarga del sistema, saturación del servicio o agotamiento del ancho de banda, sino a través de la explotación de vulnerabilidades en nuestra aplicación, por lo que la regla de seguridad más importan es instalar lo antes posible las actualizaciones de seguridad que sean publicadas y que solucionen posibles problemas de seguridad en la aplicación que utilicemos en nuestra web. En el caso de utilizar aplicaciones con un desarrollo ad hoc, es necesario la realización de auditorías para identificar problemas de seguridad y de esta manera solucionarlos.

Además es muy recomendable disponer del sistema CAPTCHA en los formularios de nuestra web, de esta manera no será posible ejecutar un ataque automatizado a través de ellos.

Las aplicaciones web que requieren privacidad, es decir, que recogen directa o indirectamente datos de carácter personal es obligatorio el uso del protocolo TLS para asegurar la confidencialidad en la trasmisión de los mismos a través de Internet. En el caso de que no se utilicen datos privados, es recomendable plantearse el uso de TLS, pero teniendo en cuenta que es necesario un procesamiento computacional adicional para lidiar con este protocolo, por lo que una sobrecarga de peticiones podría desembocar en una denegación de servicio de nuestro sistema. En el caso de que sea necesario en muchos servicios, es aconsejable establecer un límite de conexiones simultáneas que requieran de dicho protocolo.

En el caso de ya ser víctima de un ataque de denegación de servicio (DoS) que está siendo dirigido a nuestro sitios web aprovechando alguna vulnerabilidad que tenga la aplicación, podemos contar con una copia estática de nuestra web que muestre información básica como el número de teléfono de nuestra empresa, la dirección de correo electrónico o la física para que podamos ser contactados, además de contenido que no necesite de mucho procesamiento para ser mostrado y de esta manera no dejar en ningún momento de dar servicio.

## Sistemas anti-bots          

http://www.juntadeandalucia.es/servicios/madeja/contenido/recurso/650

## Recaptcha

https://www.google.com/recaptcha/about/

