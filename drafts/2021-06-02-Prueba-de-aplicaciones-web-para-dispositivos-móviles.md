---
typora-copy-images-to: ../assets/img/inicprog/
typora-root-url: ../../
layout: post
categories: tema0 Prueba de aplicaciones web
title: Prueba de aplicaciones web y para dispositivos móviles
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


# 1 Fundamentos de la programación

El funcionamiento de un equipo  informático es relativamente sencillo. En un área de la memoria  principal se tiene un conjunto de bits agrupados en unidades denominadas **instrucciones**, que son  potencias de 2 y cuyo tamaño depende de la arquitectura del equipo: 8  bits,16 bits, 32 bits, 64 bits, 128 bits. El procesador obtiene la  siguiente instrucción a ejecutar, la interpreta y manda “órdenes” a los  diferentes elementos del equipo como registros, memoria principal, [ALU](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/1_fundamentos_de_la_programacin.html#t9944357c-761f-a6ee-06c6-14576064d651) o periféricos, una vez finalizada la instrucción pasa a la siguiente instrucción de la memoria principal.

![image-20220113154050918](/Ciberseguridad-PePS/assets/img/inicprog/image-20220113154050918.png)

Para facilitar la tarea de crear y modificar programas se han  desarrollado diferentes lenguajes de programación cuyo principal  objetivo es facilitar la creación de programas a los humanos. A pesar de existir una gran variedad de lenguajes y [paradigmas](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/1_fundamentos_de_la_programacin.html#tdc2bee05-a1e5-74ad-9897-059c3fb436f9), la ejecución se realiza en un procesador con programas binarios, por lo que de una u otra forma los fundamentos para escribir programas.

Vídeo que explica la evolución de los lenguajes de programación, las diferentes fases de la generación del software y los posibles errores en el proceso.

<iframe width="960" height="540" src="https://www.youtube.com/embed/PPlRkjvMRjM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1.1 Fundamentos de los lenguajes más utilizados I

Si bien en la actualidad existen múltiples técnicas, paradigmas y  filosofías en los lenguajes de programación como programación orientadas a aspectos, dirigida por eventos o basada en funciones lambda entre  muchas otras, los lenguajes más utilizados se basan en unos elementos y  estructuras comunes.

* **Variables** Asociación de un nombre simbólico a un  espacio de memoria, de forma que se puede referenciar por el nombre y no por la dirección, siendo posible consultar y modificar su valor. En los lenguajes de tipado fuerte es necesario indicar el tipo de dato como C o C++, en otros denominados no tipados no es necesario indicarlo como PHP o Javascript. También se ha de distinguir entre los lenguajes de tipado dinámico y estático que indican en qué momento se realiza la  comprobación de tipos, en la ejecución o en la compilación. 

* **Constantes** Al igual que las variables se asocia un  nombre simbólico a un área de memoria, pero en este caso solo es posible la lectura, no la modificación.

* **Sentencias de control alternativas** Expresiones que permiten modificar el flujo de ejecución del programa dependiendo de ciertas condiciones. La sintaxis dependerá del lenguaje concreto utilizado. Se clasifican en alternativas o condicionales e iterativas o repetitivas. Las primeras modifican el flujo dependiendo de la evaluación de una condición lógica y se decide qué conjunto o bloque de instrucciones se ejecutarán a continuación. Las más usadas son:

  `If-else`. Se indica una condición que al evaluarse devuelve cierto o falso y en función del resultado ejecuta uno u otro bloque.

  ```java
  if (condición){
  	bloque instrucciones si cierto
  }else{
      bloque instrucciones si falso
  }
  ```

  `Switch`. Permite evaluar una expresión y ejecutar más de dos posibles opciones en función de la expresión. Dependiendo del lenguaje, la expresión se puede limitar a comparar números enteros o caracteres como en C o en lenguajes más recientes como C# con enteros, caracteres, cadenas, booleanos o enumerados.

  ```java
  switch (expresión){}
      case X:
            bloque instrucciones;
            break;
      case Y:
            bloque instrucciones;
            break;
      default:
            bloque instrucciones;
  }
  ```

  **Sentencias de control repetitivas o iterativas**

  Con este tipo de estructuras se puede repetir un bloque de código un número concreto de veces en función de  la evaluación cierta de una condición lógica. Son también conocidas como bucles.

  `While`: Se ejecuta el bloque contenido en la  estructura mientras se cumpla la condición lógica. Se puede dar el caso  de no ejecutarse ninguna vez.

  ```java
  while (condición){
     bloque instrucciones
  }
  ```

  `Do-While`: Se ejecuta el bloque contenido en la  estructura mientras se cumpla la condición lógica. La evaluación de la  condición se ejecuta al final del bloque de instrucciones.

  ```java
  do {
     bloque instrucciones
  }while (condición)
  ```

  `For`: En este caso, además de la condición, posee un  bloque de instrucciones que se ejecutan al inicio, el bloque en el que  se encuentra la condición a evaluar en cada iteración y por último un  bloque de instrucciones que se ejecuta en cada iteración del bucle. Si  bien es posible indicar varias instrucciones separadas por comas en cada elemento del bucle for, no suele ser usual utilizarlo ya que no es  intuitivo...

  ```java
  for (inicialización; condición; iteración){
     bloque instrucciones
  }
  ```

  La evaluación de la condición en las estructuras `While` y `for`, se realiza al inicio. En el caso de la estructura `do-while` se evalúa la condición  al final de la ejecución del bloque de instrucciones, por tanto se  ejecuta al menos una vez.

<iframe width="960" height="540" src="https://www.youtube.com/embed/fJsh1ysWAV8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 1.2 Fundamentos de los lenguajes más utilizados II

Otro de los fundamentos de los lenguajes de programación son las  funciones o procedimientos, aunque estos últimos no son muy utilizados  en la actualidad. Se puede definir una **función** como f**ragmento de código identificado con un nombre**, que puede ser reutilizados utilizando ese nombre, que **devuelve un valor de un tipo de dato**, que recibe una serie de **argumentos** de un determinado tipo llamados **parámetros,** en cada una de las llamadas. Aunque esta definición es de lenguajes  fuertemente tipados, en los débilmente la definición es similar pero sin ser necesario tener en cuenta los tipos de datos utilizados.

Dependiendo del lenguaje la declaración, llamada a la función y  devolución de valores puede variar en cuanto a la sintaxis, pero los  fundamentos son los mismos. Un ejemplo de función en C:

```java
int funcion_multiplicar( int parametro1, int parametro2){
     return parametro1 * parametro2;
}
int argumento1 = 5, argumento2 = 4;
int resultado = funcion_multiplicar(argumento1,argumento2);
```

Es necesario destacar que existen 2 formas de indicarle a la función que parámetros tiene que utilizar y de qué forma: 

- **Por valor**: Se realiza una copia de la variable y  esta copia es la que recibe la función, por tanto los cambios realizados en función no tienen consecuencias en la variable original.
- **Por referencia**: Ya sea con los mecanismos que  provee de C (dirección de memoria del inicio de la variable que se pasa  como argumento, conocida como puntero), Java (en las variable original  se almacenan la dirección del objeto y se realiza una copia de la  variable a pasar como argumento, referenciando la copia también al  objeto) o de otros lenguajes, las consecuencia principal es que las  modificaciones realizadas dentro de la función afectan a la variable  pasada como argumento.

![image-20220113155546091](/Ciberseguridad-PePS/assets/img/inicprog/image-20220113155546091.png)

**Fundamentos de la funciones**

<iframe width="960" height="540" src="https://www.youtube.com/embed/VKHlddVMGkw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# 2 Lenguajes de programación interpretados y compilados

Los traductores son programas cuya finalidad es convertir lenguajes  de alto nivel (en los que se programa) a lenguajes de bajo nivel como  ensamblador o código máquina. Existen dos grandes grupos de tipos de  traductores: los compiladores y los intérpretes:

- Un **intérprete**  traduce el código fuente  línea a línea como se describe a continuación: primero traduce la  primera línea, detiene la traducción y, seguidamente la ejecuta; lee la  siguiente línea, detiene la traducción y la ejecuta, y así  sucesivamente. El intérprete tiene que estar cargado en memoria  ejecutándose para poder ejecutar el programa. Al igual que el  intérprete, el código fuente tiene que estar también en la memoria. En  caso de detectar un error durante el proceso de traducción el intérprete detiene la ejecución del programa. Los siguientes enlaces llevan a las  páginas oficiales de los principales lenguajes interpretados, en las que se puede encontrar documentación de los mismos, librerías, así como  cursos y materiales de aprendizaje:
  - [PHP.](https://www.php.net/)
  - [Perl.](https://www.perl.org/)
  - [Python.](https://www.python.org/) 
  - [Ruby.](http://www.ruby-lang.org/es/)
- Un ***compilador*** traduce el un programa entero de un lenguaje de programación (llamado código fuente) a otro denominado  lenguaje objetivo. Usualmente, el lenguaje objetivo es código máquina,  aunque también puede ser traducido a un código intermedio (***bytecode***) o a texto. El compilador únicamente estará instalado en la máquina de  desarrollo. El código generado para un sistema sólo funcionará para una  arquitectura *hardware* y *software* determinadas. Si se desea ejecutar en un sistema con un *hardware* o *software* diferente habrá que volver a recompilarlo. Ejemplos de lenguajes compilados típicos son: C/C++ y Pascal, entre otros.

![image-20220113155758374](/Ciberseguridad-PePS/assets/img/inicprog/image-20220113155758374.png)

Si observamos las diferencias entre compilador e intérprete, vemos claramente los **puntos fuertes y débiles** de cada solución para traducir el código fuente; con el intérprete, los  programas se pueden ejecutar de inmediato y, por lo tanto, se inician  mucho más rápido. Además, el desarrollo es mucho más fácil que con un  compilador, porque el **proceso de depuración** (es decir, la corrección de errores) se lleva a cabo igual que la  traducción, línea por línea. En el caso del compilador, primero debe  traducirse todo el código antes de poder resolver los errores o iniciar  la aplicación. Sin embargo, una vez que se ejecuta el programa, los  servicios del compilador ya no son necesarios, mientras que el  intérprete continúa utilizando los **recursos informáticos**.

Algunas ventajas de compilar frente a interpretar son:

- Se compila una vez; se ejecuta muchas veces.
- La ejecución del programa objeto es mucho más rápida que si se interpreta el programa fuente.
- El compilador tiene una visión global del programa, por lo que la información de los mensajes de error es más detallada.

Por otro lado, algunas ventajas de interpretar frente a compilar son:

- Un intérprete necesita menos memoria que un compilador.
- Permite una mayor interactividad con el código en tiempo de  desarrollo (e incluso, en algunos casos, mientras se ejecuta el código).

## 2. 1 Compilación en tiempo de ejecución

Para compensar los puntos débiles de  ambas soluciones, también existe el llamado modelo de compilación en  tiempo de ejecución (en inglés, ***Just-in-time-compiler\***, o “compilador justo a tiempo”). Este tipo de compilador, que a veces también se conoce por el término inglés ***compreter\*** (acrónimo de ***com\****piler* e *inter****preter\***), rompe con el modelo habitual de compilación y traduce el código del  programa durante el tiempo de ejecución, al igual que el intérprete. De  esta forma, la **alta velocidad de ejecución** típica de los compiladores se complementa con la **simplificación del proceso de desarrollo**.

En un entorno de compilación en tiempo  de ejecución, la compilación a bytecode es el primer paso, reduciendo el código fuente a una representación intermedia portable y optimizable.  El bytecode se despliega en el sistema de destino. Cuando dicho código  se ejecuta, el compilador en tiempo de ejecución lo traduce a código  máquina nativo. Esto puede realizarse a nivel de fichero (programa) o de funciones, compilándose en este último caso el código correspondiente a una función justo cuando va a ejecutarse (de aquí el nombre  de just-in-time, «justo a tiempo»).

El objetivo es combinar muchas de las  ventajas de la compilación a código nativo y a bytecode: la mayoría del  «trabajo pesado» de procesar el código fuente original y realizar  optimizaciones básicas se realiza en el momento de compilar a bytecode,  mucho antes del despliegue: así, la compilación a código máquina del  programa resulta mucho más rápida que partiendo del código fuente.  El bytecode desplegado es portable, a diferencia del código máquina para cualquier arquitectura concreta. Los compiladores dinámicos son más  fáciles de escribir, pues el compilador a bytecode ya realiza buena  parte del trabajo.

[Java](https://www.java.com/es/) es uno de los ejemplos más conocidos de lenguaje basado en compilación en  tiempo de ejecución: el compilador JIT, que figura entre los componentes del **Java Runtime Environment (JRE)**, mejora el **rendimiento de las aplicaciones Java** traduciendo el *código de bytes* en código máquina de manera dinámica.

![image-20220113155911118](/Ciberseguridad-PePS/assets/img/inicprog/image-20220113155911118.png)



`>> Vídeo explicativo de la diferencia entre lenguajes compilados e interpretados`

<iframe width="960" height="540" src="https://www.youtube.com/embed/eDYprseWPiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 3 Código fuente y entornos de desarrollo

Tal y como se ha comentado en puntos anteriores, los sistemas  informáticos ejecutan instrucciones en lenguaje binario o en lenguajes  próximos como lenguajes intermedios usados en algunos lenguajes sobre  máquinas virtuales como Java con ByteCodes o C# con CLI. Para la  creación del software no se escribe en estos lenguajes, ya que su  creación y especialmente su modificación es prácticamente imposible por  pequeño que sea el programa a realizar, utilizándose lenguajes de  programación de alto nivel que permiten la creación y modificación del  software.

Al conjunto de líneas de texto escritas en un lenguaje de programación que contienen la lógica de la aplicación se le denomina **código fuente.**

Al introducir el código fuente en un  compilador se obtiene el código objeto concreto para una arquitectura,  por último se realiza el “linkado” que une diferentes ficheros de código objeto como el generado por el código fuente y librerías externas  necesarias para obtener el ejecutable.

![image-20220113184028202](/Ciberseguridad-PePS/assets/img/inicprog/image-20220113184028202.png)

`>> Fases para la generación de un ejecutable`

<iframe width="960" height="540" src="https://www.youtube.com/embed/SvFFSIi1_u8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### 3.1 Entornos de desarrollo

El código fuente se crea utilizando  editores de texto, que no se han de confundir con los procesadores de  texto. Los primeros simplemente trabajan con texto sin formato como  negrita, tipos de letra ... y los segundos almacenan además del texto,  el formato, imágenes y otros elementos, por ejemplo Writer de  OpenOffice/LibreOffice es un procesador de texto y no se ha de utilizar  para gestionar código fuente. Si además de poder editar texto plano  incluyen funcionalidades relacionadas con la programación se denominan  editores de código.

Entre los **editores de texto y/o código** destacan:

* **Notepad**
  Editor de texto básico disponible en la  familia de sistemas operativos Windows. Suele ser útil para resolver  problemas puntuales como guiones *BAT* o para pequeñas modificaciones en lenguajes interpretados.

* **Notepad++**
  Más avanzado que el anterior, es un editor de código fuente gratuito, también disponible para Windows y Linux, posee funcionalidades para trabajar con multitud de lenguajes de programación, extensiones e integración con otras herramientas. Destaca por los bajos requerimientos de procesador y memoria. Se recomienda su uso en pequeños proyectos. Su uso se rige por la Licencia Pública General GNU y es posible descargarlo desde su web oficial https://notepad-plus-plus.org/

* **Nano**
  Editor de texto **minimalista** y **amigable**, disponible para los sistemas operativos **UNIX**. Sin embargo, no solo nos permite editar texto, sino que además tiene  otras características muy interesantes que lo hacen especialmente útil  para modificar archivos de configuración en la terminal o crear  lanzadores. 

* **vi/vim**
  [**Vi/Vim**](https://www.vim.org/) es un editor que forma parte del software estándar de los sistemas **UNIX** y **Apple OS X**, utilizándose desde el terminal. Su curva de aprendizaje es lenta, posee multitud de comandos que permiten su manejo a través del teclado. Posee un extenso número de *plugins* para aumentar su funcionalidad.  Soporta cientos de lenguajes de programación y formatos de archivo. Y  además, se integra fácilmente con muchas herramientas
* **Emacs**
  **Emacs** es un editor de código fuente principal competidor de **Vim**, forma parte del proyecto **GNU**. Incluye herramientas pensadas para el desarrollo de software como compilación y depuración desde el mismo entorno.

La evolución de los editores de texto son los **entornos de desarrollo**,  que añaden nuevas funcionalidades e integran el proceso del desarrollo  del software en una única herramienta, además de poder proporcionar  instrumentos para el trabajo en el equipo o integración en [**metodologías** **de desarrollo**](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/31__entornos_de_desarrollo.html#t973cd707-7d78-a46e-b913-276f5d0afe92), inicialmente desarrollados para un lenguaje concreto aunque en la actualidad utilizando *plugins* y/o extensiones se puede trabajar en prácticamente cualquier lenguaje, los más conocidos son:

* **IntelliJ IDEA**
  El más utilizado en entornos profesionales, posee versión gratuita y de  pago. Trabaja con múltiples lenguajes y entornos de trabajo, integración de herramientas como control de versiones o pruebas entre otros,. Es  posible añadir extensiones. Los requisitos mínimos del equipo son altos, mínimo 2 GB y recomendado 8GB de memoria principal.
* **Eclipse**
  El siguiente en uso, utilizado en grandes entornos como consultorías y  entidades bancarias, de código abierto. Inicialmente desarrollado para  Java actualmente soporta muchos lenguajes, posee sistema de ***[plugins](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/31__entornos_de_desarrollo.html#t23c4fc14-6829-0ef1-2545-f5ec9547da79)***. Es posible descargar versiones adaptadas a las necesidades del desarrollo como proyectos **Java** y desarrollo Web, exclusivo para **Java**, C/C++ o **PHP** entre otros.
* **Netbeans**
  [**NetBeans**](https://netbeans.apache.org/) es un entorno de desarrollo integrado libre, hecho principalmente para  el lenguaje de programación Java. Existe además un número importante de  módulos para extenderlo. **NetBeans IDE** es un producto  libre y gratuito sin restricciones de uso. Posee características  similares a los anteriores, aunque su uso es menor. Inicialmente  desarrollado por **Sun** pero se ha integrado como proyecto en la fundación **Apache**.
* **Visual Studio**
  Entorno de desarrollo de **Microsoft** centrado en sus lenguajes y tecnologías, en especial ***C#\*** aunque puede trabajar con otros como **Python** o **Javascript**. Entre las ventajas destaca la integración con otras herramientas como el ecosistema **Azure**.

* **Android Studio**
  Basado en **IntelliJ IDEA**, su uso se centra en el desarrollo de aplicaciones para **Android**. Se distribuye de forma gratuita. Si bien inicialmente se desarrollaba en Java actualmente se puede desarrollar en **C++** y **Kotlin**, el nuevo lenguaje preferente seleccionado por **Google** para el desarrollo de aplicaciones para **Android**.

Si bien los entornos de desarrollo son muy potentes, las necesidades de  procesador y memoria son altos, necesitando equipos muy potentes para  poder desarrollar con comodidad. Ante esta problemática en los últimos  años han aparecido herramientas que vuelven a los orígenes de los **editores de texto/código** con bajos requerimientos de hardware pero que poseen **herramientas, funcionalidades y extensiones** pensadas para el desarrollo en diferentes lenguajes, destacando:

* **Visual Studio Code**
  Editor de código gratuito. Posee sistema de [***plugins***](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/31__entornos_de_desarrollo.html#t48ea7033-23d8-d893-38cc-595c35ce5218), integración con gestor de código **Git** o depurador entre otras características. Es **multiplataforma** y los requisitos no son altos.
* **Atom**
  [**Atom**](https://atom.io/) ha sido desarrollado con **Node.js**, se trata de un editor de código abierto multiplataforma ideal para el desarrollo web, posee control de versiones mediante **Git** y ha sido desarrollado por **GitHub.** Posee también un completo sistema de [**plugins**.](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/31__entornos_de_desarrollo.html#t7078234f-54ca-fbde-ab81-5343416bf050), mediante el cual es posible ampliar las funcionalidades del editor.

* **Brackets**

  [**Brackets**](http://brackets.io/) es un editor de código fuente moderno, ligero y potente cuyo principal enfoque es el desarrollo y programación web. Creado por **Adobe Systems**, se trata de un software gratuito y de **código abierto** con **licencia MIT**, y actualmente es mantenido en **GitHub** por **Adobe** y otros desarrolladores. Está escrito en **JavaScript**, **HTML** y **CSS**.

  Su  interfaz clara y directa que dispone de detección automática del código y ayudas en la escritura, sangrado y coloración para identificar  segmentos. Especialmente diseñado para evitar distracciones y mejorar la productividad; facilita la obtención de asistencia y ayuda cuando es  necesario sin interferir con su proceso creativo.

* **Sublime Text**

  [**Sublime** **Text**](https://www.sublimetext.com/) es un editor de código **multiplataforma** (disponible para **OS X**, **Linux** y **Windows**) y de pago, aunque se puede descargar una versión de prueba, plenamente  funcional y sin limitación de tiempo. Se caracteriza por ser  extremadamente ligero y sencillo, ideado para programar sin distracciones. Su interfaz de color oscuro y la riqueza de coloreado de  la sintaxis, contribuyen a centrar y mantener la atención del  programador en su trabajo. Reconoce un **gran número de lenguajes** (*C, C++, C#, CSS, D, Erlang, HTML, Groovy, Haskell, HTML, Java, JavaScript, LaTeX, Lisp, Lua, Markdown, Matlab, OCaml, Perl, PHP, Python, R, Ruby,  SQL, TCL, Textile and XML*).

  Incorpora un buen número de herramientas para la edición del código y automatización de tareas. Algunas de sus características son ampliables mediante plugins.

**Entornos de desarrollo en la nube**

Los entornos de desarrollo on-line o en la nube están extendiéndose cada vez más. A pesar de que su **falta de potencia** puede ser considerada como una de sus grandes desventajas, estos ofrecen importantes ventajas como la capacidad de **trabajo colaborativo**, el uso de **repositorios comunes**, la posibilidad de **trabajo con cualquier dispositivo**, etc.

Estas ventajas hacen que muchos  desarrolladores, empresas y organizaciones estén optando por el uso de  estos entornos en la nube.

* **AWS Cloud9**
  [**AWS Cloud9**](https://aws.amazon.com/es/cloud9/) es un entorno de desarrollo integrado (IDE) basado en la nube que le  permite escribir, ejecutar y depurar su código solo con un navegador.  Incluye un editor de código, así como un depurador y un terminal. **Cloud9** incluye herramientas esenciales para los lenguajes de programación más conocidos, como **JavaScript**, **Python**, **PHP**, entre otros muchos, por lo que no necesita instalar archivos ni  configurar su máquina de desarrollo para empezar nuevos proyectos.  Proporciona una experiencia fluida de desarrollo de aplicaciones sin  servidor, lo que le permite definir recursos con facilidad, así como  depurar y cambiar entre ejecuciones locales y remotas. Con **Cloud9** puede compartir rápidamente el entorno de desarrollo con su equipo, lo  que le permite realizar programaciones en pareja y un seguimiento de las ediciones de su colega en tiempo real.

* **Codeanywhere**
  [Codeanywhere](https://codeanywhere.com/) es un entorno de desarrollo que posee muchas características propias de los **IDE** para escritorio, pero posee las ventajas de una IDE que trabaja desde  la nube. Permite acceder y trabajar desde cualquier dispositivo móvil,  sea **iOS** o **Android**.
  Compatible con  75 lenguajes de programación, dispone de múltiples opciones de  personalización del espacio de trabajo, Además, facilita la optimización de código, y es plenamente compatible con SFTP y Dropbox. También posee funciones para permitir el trabajo colaborativo en línea sobre un mismo código.
* **Codio**
  [**Codio**](https://www.codio.com/features/online-ide) es una IDE que ha sido diseñada para su uso en las aulas, ya sea en escuelas o universidades, por lo que posee características especiales para docentes donde pueden verificar el progreso de cada uno de sus estudiantes, entre otras cosas. Sin embargo, también es una IDE que  puede ser empleado por desarrolladores que desean aprender. Posee un editor de código, plantillas de proyecto para empezar más rápidamente y más 80 unidades de cursos. Posee también opciones para crear tu propio  curso y poder compartirlo en línea. Esta herramienta proporciona a los  estudiantes todo lo que necesitan para progresar en sus conocimientos  como programadores desde el nivel principiante hasta el avanzado. Es  compatible con ***Java, Python, C, C ++, NodeJS*** entre otros muchos.
* **Code Sandbox**
  [**Code Sandbox**](https://codesandbox.io/) es un editor de código fuente en línea, se trata de un IDE que es  manejado directamente desde el navegador, ideado para lograr un rápido  desarrollo web. Permite crear prototipos rápidamente, experimentar  fácilmente y compartir los desarrollos a través de la nube.Funciona con ***JavaScript*** (incluido ***TypeScript***) y tiene soporte de ***front-end*** y ***full-stack***. Incorpora plantillas de cliente para: ***React***, ***Vue, Angular, Preact, Svelte, Dojo, CX, Reason***, así como ***Vanilla JS,*** y también para **proyectos estáticos** (***HTML, JavaScript, CSS***). Además, dispone de plantillas contenedor para desarrollos en lado del servidor: ***Node.js, Angular, Adonis, Gatsby, Marko, Nuxt, Next, Sapper, Apollo, Ember,  Nest, Styleguidist, MDX Deck, Gridsome, Quasar, Docusaurus*** y ***Vuepress***.
* **Visual Studio Code para la Web**
  [Visual Studio Code](https://vscode.dev ) para la Web proporciona una experiencia de Microsoft Visual Studio Code gratuita y sin instalación que se ejecuta completamente en su navegador, lo que le permite navegar de forma rápida y segura por los repositorios de código fuente y realizar cambios ligeros en el código.
* **Koding**
  [Koding](https://www.koding.com/) es una IDE de código abierto desde donde se pueden desarrollar aplicaciones usando **PHP, Python, Perl, JavaScript**, entre otros. Asimismo, puede integrarse con otras herramientas como **Django, Ruby on Rails, Node.js, GitHub, Docker** o **Amazon Web Services**. Koding  emplea un sistema de archivos que permite simular un entorno local  independientemente del lugar donde se produce la conexión. Entre sus  características destacan: la sintaxis resaltada, atajos de teclado,  sangría automática, previsualización de código. Koding es una IDE de pago, aunque es  posible obtener planes gratuitos si se trata de grupos especializados en software de código abierto o si si se opta por incluir publicidad de Koding en tu sitio web.
* **Shift Edit**
  [**ShiftEdit**](https://shiftedit.net/about) es una IDE que te permite acceder a tus proyectos desde ***FTP, SFTP, Google Drive*** y ***Dropbox***. También permite clonar repositorios que se encuentren en ***GitHub*** o ***Bitbucket***. Como muchos otros entornos de desarrollo, posee características para  colaborar en línea, puedes invitar a otras personas a modificar tu  código, conversar con ellos por mensajes instantáneos y ver en tiempo  real los cambios que realizan en el código. Posee también un historial  de los cambios realizados.

# 4 Ejecución de software

Tras la generación del código objeto y el enlazado con otro código objeto o librerías externas se obtiene un ejecutable para una  arquitectura concreta en formato binario o un fichero en lenguaje intermedio de bajo nivel como CLI o Bytecode que se ejecuta en una máquina virtual. Esto puede llegar a generar **ejecutables relativamente grandes**, con el consiguiente incremento de **tiempo de carga y el espacio** en memoria principal, pero autocontenidos, es decir pueden funcionar sin necesidad de elementos externos.

Para solucionar el problema de carga de ejecutables de gran tamaño y el uso de memoria y dado que muchas de las funcionalidades en los diferentes programas son comunes se desarrollaron las librerías dinámicas. Estas librerías dinámicas son fragmentos de código binario que se cargan en memoria y que **diferentes programas pueden utilizar.** Por ejemplo una librería dinámica para el manejo de cadenas de texto puede ser utilizada por varios programas al mismo tiempo y no es necesario que cada uno cargue en memoria esa funcionalidad.

En Linux las librerías dinámicas poseen la extensión **.so** y en Windows son las famosas librerías **.dll**. En principio lo que parece una buena idea se puede convertir en ocasiones en un verdadero dolor de cabeza para los programadores y administradores de sistemas.

El primer problema son las diferentes versiones que una librería dinámica puede tener y la necesidad de versiones concretas, por ejemplo la librería de manejo de cadenas tiene la versión 1.0 y la versión 2.0,  el programa A necesita la versión 1.0 y el programa B la 2.0, pero el sistema solo puede tener una de las dos. A este problema se le denomina conflicto de versiones, y del cual se acuño el concepto de **infierno de dll**. Otro problema es el borrado de la librería dinámica al borrar uno de los programas, no pudiendo el resto utilizarla.



![Infierno de las DLL](/Ciberseguridad-PePS/assets/img/inicprog/infierno_dll.jpg)

Se desarrollaron diferentes soluciones para los problemas anteriores, basadas en almacenar de alguna forma las diferentes librerías que posee el sistema y que versión de la librería utiliza cada uno de los  programas.

Las librerías dinámicas, en especial las DLL, son un punto de entrada de virus y malware al inyectar código mediante librerías para  interceptar llamadas del sistema y poder modificarlas.

Una de las técnicas del malware es la inyección de DLL, que consigue modificar la librería dinámica válida por otra.

<iframe width="960" height="540" src="https://www.youtube.com/embed/IBwoVUR1gt8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# 5 Elementos principales de un programa

Los elementos principales de un programa informático clásico se  dividen en varios grupos dependiendo del paradigma, del lenguaje y de la finalidad. Por ejemplo, en C es necesaria la existencia de un punto de  entrada llamado main, o en los primeros lenguajes de servidor como PHP  se ejecutaba el fichero completo. A pesar de la variedad de elementos de un programa, prácticamente todos poseen los siguientes bloques:

- **Bloque de declaraciones**. Incluye la declaración y normalmente la instanciación de todos los objetos y elementos a procesar como constantes o variables.

- Bloque de instrucciones

  . Acciones sobre los  elementos definidos en el bloque de declaración que permiten lograr el  objetivo del programa. Dentro de este se puede diferenciar a su vez 3  grupos de instrucciones:

  - **Entrada**: Su función es obtener la información  aportada desde el exterior necesaria para realizar el procesamiento.  Esta información se almacena en los elementos definidos en el bloque de  declaraciones.
  - **Proceso**: Instrucciones cuya finalidad es alcanzar el objetivo del programa a partir de la información proporcionada en la entrada.
  - **Salida**. Una vez realizado los cálculos este bloque  se encarga de almacenar, por ejemplo en un fichero o en una base de  datos o mostrarlo en algún dispositivo de salida como un monitor o  impresora.

En la mayoría de los lenguajes actuales, además de los bloques anteriores se tienen también:

- **Espacio de nombre o paquete.** Indica el ámbito o alcance del código de forma que se puedan encapsular para su posterior uso.

- **Bloque de uso de elementos externos**. Indica las  clases o funciones externas que se van a utilizar en el programa,  denominados librerías o paquetes dependiendo del lenguaje, por ejemplo C o Java y que posteriormente serán enlazados, por ejemplo en C se  utiliza la palabra reservada #include o Java la palabra import.

- **Bloque de definición del fichero/clase** en el que se incluyen comentarios como el autor, el tipo de licencia, el uso o función del código o clase.

  ![Elementos básicos de un programa](/Ciberseguridad-PePS/assets/img/inicprog/elementos_programa-1642097197116.png)

# 6 Pruebas

Las **pruebas de software** forman parte del ciclo de desarrollo y permiten verificar el buen  funcionamiento/calidad de la aplicación. El objetivo de las pruebas es  convencer, tanto a los usuarios como a los desarrolladores, de que el  software es lo suficientemente robusto como para trabajar con él de  forma productiva.

Cuando un software supera pruebas  exhaustivas, la probabilidad de que ese software acabe dando problemas  en producción se atenúan y, por tanto, su fiabilidad se incrementa.

No siempre son los programadores de la  aplicación los encargados de realizar el proceso de pruebas. Resulta muy recomendable, que las pruebas sean diseñadas y realizadas por personal  externo al equipo de desarrollo, puesto que los programadores tienden a  probar las cosas que funcionan (si supieran dónde están los errores, los evitarían y no los cometerían).

Hay que tener en cuenta que es imposible probar todo, la prueba exhaustiva no existe. Muchos errores saldrán a  la luz cuando el software esté en producción y ya haya sido  implementado, no obstante se debe intentar que el número de errores sea  mínimo.

La finalidad primordial del proceso de  pruebas es detectar la presencia de posibles defectos del software  cuanto antes para poder corregirlos. Todo sistema o aplicación debe ser  probado antes de su puesta en producción y entrega al cliente.

> Los programas de pruebas pueden ser una forma eficaz de encontrar errores, pero es completamente inadecuada para demostrar su ausencia. 

> La tarea del programador no es sólo escribir un programa, sino que su Tarea principal es dar una prueba formal de que el programa que propone cumple la especificación funcional

Entre las principales razones, por las cuales es muy recomendable que las pruebas sean realizadas por un equipo de profesionales distinto al conformado por los propios desarrolladores y programadores del software destacan las siguientes:

- Aliviar a los equipos de desarrollo y centrarse en el desarrollo de software
- Aumento de la satisfacción de los empleados, ya que las pruebas, a  menudo desagradables para los equipos de desarrollo, son llevadas a cabo por personal especializado
- Pruebas eficientes realizadas por expertos certificados
- Pruebas utilizando un amplio y siempre actualizado conjunto de instrumentos de inspección
- La garantía externa de calidad a través de pruebas previene la ceguera operativa.
- Las pruebas calificadas y los informes de errores dan como resultado ciclos de publicación

Durante y después del proceso de implementación, la aplicación que se está  desarrollando debe ser comprobada para ver que satisface su  especificación y entrega la funcionalidad esperada por las personas que  han pagado por ella. La *verificación y la validación* es el nombre que se ha dado a los procesos de análisis y pruebas. La  verificación y la validación tienen lugar en cada etapa del proceso del  software. Comienzan a realizarse mediante revisiones de los  requerimientos y continúan con revisiones del diseño e inspecciones de  código hasta la prueba del producto.

**Verificación**

La verificación es el conjunto de actividades que aseguran que el  software implemente correctamente una función específica. Se refiere al  proceso de determinar si un flujo de trabajo se ha llevado a cabo en  forma correcta; se realiza al término de cada flujo de trabajo. Permite  comprobar que la aplicación satisface sus requerimientos funcionales y  no funcionales establecidos en su diseño. Debería de ofrecernos una  respuesta a las siguientes preguntas: 

* ¿Estamos construyendo  correctamente el producto?, 
* ¿El software cumple con sus  requisitos? (como una casa cumple con sus planos).

**Validación**

La validación, es un proceso más general, debe asegurar que el sistema  software satisface las expectativas del cliente. Es un conjunto  diferente de actividades que aseguran que el software construido  corresponde y satisface los requisitos del cliente. Es el proceso de  evaluación intensa que se lleva a cabo justo antes de entregar el  producto al cliente, su objetivo es determinar si el producto en  su totalidad satisface sus especificaciones. Nos permite responder a las  siguientes cuestiones: 

* ¿Estamos construyendo el producto  correcto?, 
* ¿Hace el software lo que el usuario realmente  requiere? (como una casa cumple con lo que el propietario  necesita y quiere).

El objetivo último del proceso de  verificación y validación es establecer con seguridad que el sistema software está <<hecho para un propósito>>. Esto significa  que el sistema debe ser lo suficientemente bueno para conseguir su uso  pretendido. El nivel de confianza requerido depende del propósito del sistema, de las expectativas de los clientes y de la situación del  entorno de mercado del producto.

## 6.1 Etapas o niveles de pruebas

En la actualidad existen muchos modelos de desarrollo de software y es un  reto para el ingeniero de pruebas amoldarse a cada modelo con el fin de  cubrir todas las tareas y actividades de manera óptima. El modelo  tradicional de desarrollo y pruebas es conocido como el modelo V, donde  se describen las actividades de desarrollo y las correspondientes  actividades en pruebas. 

El **modelo V**  plantea que en todo este proceso se debe llevar a cabo la verificación y validación y se realiza como se menciona a continuación. 

Cada  nivel de desarrollo se verifica con el nivel anterior, es decir, se  comprueba si los requisitos y definiciones de niveles previos han sido  implementados de forma correcta.

La validación se refiere a la  corrección de cada nivel de desarrollo, de esta manera se comprueba lo  adecuado de los resultados de un nivel de desarrollo.

<img src="/Ciberseguridad-PePS/assets/img/inicprog/Modelo_V.jpg" alt="Modelo V" style="zoom:50%;" />

De esta  manera podemos observar que el proceso de pruebas comienza antes que la  ejecución de las mismas, tan pronto comienza el desarrollo se puede  comenzar la preparación de las pruebas correspondientes, como es el caso de la revisión de documentos.

El ámbito o destino de las pruebas del software abarca cuatro niveles:

- **Pruebas unitarias o de componentes:** Se centran en probar un único componente (módulo, función, clase o interfaz) de forma aislada.
- **Pruebas de integración:** Permiten probar las comunicaciones de un grupo de componentes que están relacionados por propósito, uso, comportamiento o estructura.
- **Pruebas de sistema:** Sirven para comprobar el correcto funcionamiento del sistema completo.
- **Pruebas de aceptación:** Son un subconjunto de pruebas del sistema, que sirven para ayudar a  decidir al cliente, si acepta el paso a producción del software  programado.

<img src="/Ciberseguridad-PePS/assets/img/inicprog/Niveles_de_prueba_software.png" alt="Niveles de prueba software" style="zoom: 33%;" />

La figura es una excelente representación de los diferentes niveles de prueba software que se realizan en la actualidad. En la base de la pirámide se encuentran las pruebas unitarias, que cubren  la mayor parte del código de forma totalmente aislada, con  implementaciones sencillas y ejecuciones instantáneas. En el extremo  opuesto se encuentran las pruebas de aceptación, con una integración  absoluta de todos los elementos que conforman el programa y una visión  global del sistema propia del cliente final; por tanto, el desarrollo de estas pruebas resulta más complejo, requiere un mayor tiempo de  ejecución, y su coste aumenta considerablemente.

### 6.1.1 Pruebas unidad

Las pruebas unitarias o de componentes permiten **probar componentes individuales** para asegurar que funcionan correctamente. Los componentes pueden ser  entidades simples como funciones, métodos, clases de objetos, interfaces o agrupaciones coherentes de esas entidades. Cada componente se prueba  de forma individual sin interactuar con ningún otro elemento del  sistema.

Las pruebas no deben tener dependencias respecto a sí mismas o al entorno  donde se están ejecutando, pudiendo ser ejecutadas en distinto orden y  distintos subconjuntos sin que esto afecte al resultado final. Debido a  este principio muchas **herramientas de *testing* unitario** ejecutan las pruebas aleatoriamente.

**Motivos para realizar un test unitario**

Entre los principales motivos por los  que resulta altamente recomendable realizar pruebas unitarias sobre el  software desarrollado destacan los siguientes: 

- Las pruebas unitarias demuestran que la lógica del código está bien estructurada y funcionará en todos los casos.
- Aumentan la legibilidad del código y ayudan a los desarrolladores a entender el  código base, lo que facilita hacer cambios más rápidamente.
- Se realizan en pocos milisegundos, por lo que podrás realizar cientos de ellas en muy poco tiempo.
- Las pruebas de componentes permiten al desarrollador refactorizar el código más adelante y tener la garantía de que el módulo sigue funcionando  correctamente. Para ello se escriben **[casos de prueba](file:///home/victorponz/Documentos/2021-22/Ciberseguridad/Dualiza/Puesta en producción segura/PPS_01/611_pruebas_unidad.html#tdef73d9b-b11c-f506-6420-27b2cecc9b9d)** para todas las funciones y métodos, para que cada vez que un cambio  provoque un error, sea posible identificarlo y repararlo rápidamente.
- La calidad final del código mejorará ya que, al estar realizando pruebas  de manera continua, al finalizar el código será más limpio y de mayor  calidad.
- Como las pruebas unitarias dividen el código en pequeños fragmentos, es  posible probar distintas partes del proyecto sin tener que esperar a que otras estén completadas. 

#### ¿Qué son las pruebas unitarias?

En programación, una prueba unitaria es una forma de comprobar el  correcto funcionamiento de una unidad de código. Por ejemplo en diseño  estructurado o en diseño funcional una función o un procedimiento, en  diseño orientado a objetos una clase.

<iframe width="960" height="540" src="https://www.youtube.com/embed/wA_y-72rLs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>