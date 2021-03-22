**Ver vídeo primero**
https://openwebinars.net/academia/aprende/desarrollo-seguro/?enroll=1

* 

También muy interesante

https://owasp.org/www-pdf-archive/OWASP_Cheatsheets_Book.pdf

donde para cada posible ataque te dice qué puedes hacer para contrarestarlo

**Manual software libre**

https://softlibre.unizar.es/manuales/softwarelibre/guia_basica_sfa.pdf



El objetivo de este trabajo es "Determinar el nivel de seguridad requerido por una aplicación". 

## OWASP Top ten

https://owasp.org/www-project-top-ten/



## Application Security Verification Standard (ASVS)

https://cheatsheetseries.owasp.org/IndexASVS.html

https://cheatsheetseries.owasp.org/



## Software Assurance Maturity Model

https://owaspsamm.org/

https://opensamm.org/downloads/SAMM-1.0.pdf

Calculadora 

https://concordusa.com/SAMM/



## Secure Software Development Live Cicle (SDLC)

https://www.synopsys.com/blogs/software-security/secure-sdlc/

OWASP Code Review Guide

https://owasp.org/www-project-code-review-guide/



Ir a OWASP top ten y para cada una de ellas comprobar en el cheatsheet los procedimientos a chequear



## Curso de Desarrollo Seguro

https://openwebinars.net/academia/aprende/desarrollo-seguro/?enroll=1

### **1 Ciclo de desarrollo seguro de software**

La seguridad como "*La protección de la información frente a las distintas amenazas al objeto de garantizar el buen funcionamiento*"

La seguridad (ACID)

* Autenticidad
* Confidencialidad
* Integridad
* Disponibilidad

Comprobar vulnerabilidades de software (por ejemplo en GitHub)

**Fases del SECURE SDLC**

* Requisitos

  Recoger requisitos funcionales y no funcionales

  Los posibles problemas

  Qué tecnología usaremos o lenguajes

  Frameworks
  **¿Como se solucionan problemas de seguridad?** Pues, por ejemplo, comprobando la versión del lenguaje y del framework para que no tengan vulnerabilidades conocidas, también de las librerías usadas. Se puede hacer un gráfico de vulnerabilidades  

  Por ejemplo,  buscamos `scikit-learn` en GitHub y tiene 44.9K stars

  Vídeo explicativo de [madurez del ciclo de vida](https://www.youtube.com/watch?v=oi6p7UjMjAM)

* Arquitectura y diseño

  Se tratan temas como:

  * Definición de servicios
  * Interfaces
  * Protocolos
  * Sistemas
  * Redes
  * Flujo de datos

  En este caso la seguridad se centra en:

  * Identificar vulnerabilidades en las tecnologías escogidas y protegerlas
  * Asegurar los recursos de datos que son el verdadero jugo de la aplicación y hay que blindarlos.
  * Emplear protocolos de comunicación seguros
  * Estudiar estándares y arquitecturas típicas.

  Una arquitectura segura es el primer paso hacia una aplicación segura.

  Explicado en detalle en el [pdf](https://owasp.org/www-pdf-archive/OWASP_Cheatsheets_Book.pdf). Buscar `Application Security Architecture Cheat Sheet`

  **Muy interesante porque está organizada por apartados** Una buena [hoja de trucos](https://zeltser.com/media/docs/security-architecture-cheat-sheet.pdf) para aplicaciones de internet.

* Implementación

  * Desarrollo de la aplicación (código). Es la parte que gasta más tiempo, pero si hemos hecho una buena seguridad garantiza no cometer errores,
  * Seguir las buenas prácticas
  * Evitar el uso de funciones deprecated
  * Controlar errores
  * Controlar flujo de datos
  * Mantener los procesos lo más simples posibles
  * Hay una palabra que lo resume **KISS** Keep It Simpe Stupid

* Testeo
  Probar que todo funciona según los esperado.

  * Plan de pruebas
  * Tests unitarios
  * tests de integración
  * tests de los sistemas
  * Automatización de test
  * Revisión de test

  La seguridad se implanta con:

  * testear las vulnerabilidades conocidas, debemos asegurarnos de que están protegidas

  * Fuzz testing. 
    **IMPORTANTE** Vídeo explicativo en https://www.youtube.com/watch?v=IUnNCVf4q7U

    Desarrollo seguro con OWASP https://www.youtube.com/watch?v=5NofRNKvlbw

  * Pentesting básico 

    **IMPORTANTE**  Testeo con [burpsuite](https://www.youtube.com/watch?v=yncE5WvLJNU)

    Es un test de intrusión puro y duro. Con herramientas existentes aunque no son igual de eficientes que un test manual

* Despliegue 
  Una vez desarrollado falta desplegarlo con unas fases

  * Preparación del entorno en producción

  * Configuración de servicios

  * Configuración de sistemas

  * Gestión de usuarios

  * Gestión de operaciones

    

    Seguridad en el despliegue

  * Se configura de manera segura cada servicio

  * Se configura de manera segura cada sistema

  * Gestionar de manera segura los permisos y operaciones

    El entorno de testing es distinto del mundo real

* Mantenimiento

  * Una vez desplegado es importante darle mantenimiento
    * Revisión de bugs
    * Nuevas funcionalidades 
    * Optimización de código
  * Seguridad
    * Versiones actualizadas de cada framework o librería
    * Actualizar tecnologías
    * Actualizar procedimientos
    * Revisión de logs



**¿Por qué desarrollar de forma segura?**

El coste de arreglar un fallo de seguridad aumenta exponencialmente con el tiempo

En DevSecOps usamos TLS, conexiones ssh con claves públicas y privadas, usando servicios de la nube conocidos: Amazon, Google Cloud, Azure

Por ejemplo, enseñar el punto [37.3.1](https://owasp.org/www-pdf-archive/OWASP_Cheatsheets_Book.pdf) donde habla de la autenticación.

De hecho mejor explicar el 37.  **Secure Coding Cheat Sheet**

### 2 Seguridad en el desarrollo

#### Validación de entradas

