---
typora-copy-images-to: ../assets/img/inversa/
typora-root-url: ../../
layout: post
categories: tema6 Seguridad móvil
title:  Ingeniería inversa en Android
conToc: true
render_with_liquid: false
---

Las aplicaciones Android se componen de un archivo `apk` que no es más que un archivo comprimido con el código compilado en formato `Dalvik Virtual Machine`. Estos archivos tienen la extensión `.dex` y son parecidos a los `.class` de Java.

En esta práctica utilizaremos la aplicación vulnerable [DIVA](http://www.payatu.com/wp-content/uploads/2016/01/diva-beta.tar.gz)

> DIVA is a vulnerable Android application. According to their official website, *“DIVA (Damn insecure and vulnerable App) is an App intentionally designed to  be insecure. The aim of the App is to teach developers/QA/security  professionals, flaws that are generally present in the Apps due poor or  insecure coding practices.”*

Vamos a instalarla en el emulador:

```
adb install DivaApplication.apk
```

![image-20220519192142676](/Ciberseguridad-PePS/assets/img/inversa/image-20220519192142676.png)

## Empezamos la ingeniería inversa.

Mediante ingeniería inversa obtenemos el código *más o menos* original de la aplicación. Mediante la utilidad [dex2jar](https://sourceforge.net/projects/dex2jar/) vamos a obtener una representación de estas clases.

Sólo hay que renombrar el archivo y ejecutar el siguiente comando:

```
sh d2j-dex2jar.sh ../DivaApplication.apk
```

Que crea el siguiente archivo `DivaApplication-dex2jar.jar`

Lo descomprimimos y observamos que es un conjunto de archivos `.class` de java. Vamos a usar un visor ([jd-gui](http://java-decompiler.github.io/)) que hace ingeniería inversa del código java. 

Para lanzar el programa, ejecuta

```
java -jar jd-gui-1.6.6.jar
```

Y abrimos `DivaApplication-dex2jar.jar`

![image-20220519190154407](/Ciberseguridad-PePS/assets/img/inversa/image-20220519190154407.png)

Y como se puede comprobar, el código es bastante legible. Se puede usar para encontrar vulnerabilidades en el código, como veremos más adelante.

Pero este código Java no nos sirve para modificar la aplicación. Para poder modificar la aplicación debemos obtener el código `smali`. Usamos la herramienta [apktool](https://ibotpeaches.github.io/Apktool/)

> A tool for reverse engineering 3rd party, closed, binary Android  apps. It can decode resources to nearly original form and rebuild them  after making some modifications. It also makes working with an app  easier because of the project like file structure and automation of some repetitive tasks like building apk, etc.
>
> It is **NOT** intended for piracy and other non-legal  uses. It could be used for localizing, adding some features or support  for custom platforms, analyzing applications and much more.

Ejecutamos el comando

```
apktool d DivaApplication.apk 
```

Y ahora abrimos el directorio `DivaApplication` con VsCode.

![image-20220519191024484](/Ciberseguridad-PePS/assets/img/inversa/image-20220519191024484.png)

Este código es el que deberíamos modificar para realizar cambios en la aplicación. Evidentemente, no es tarea trivial.

Nos vamos a contentar con modificar el mensaje de bienvenida que está localizado en el archivo `res/values/strings.xml` modificando la clave `<string name="dintro">`

introduciendo el valor 

```xml
<string name="dintro"><b>Hackeado por Ciberseguridad!</b></string>
```

Ya sólo nos queda volver a compilar la aplicación y a firmarla.

Primero la compilamos

```
./apktool build DivaApplication -o DivaModificada.apk
```

Y ahora la firmamos. Usaremos la aplicación [uber-apk-signer](https://github.com/patrickfav/uber-apk-signer). Descargamos el [jar](https://github.com/patrickfav/uber-apk-signer/releases/tag/v1.2.1) y ejecutamos:

```
java -jar uber-apk-signer-1.2.1.jar -a DivaModificada.apk 
```

Que nos genera el archivo `DivaModificada-aligned-debugSigned.apk`

Ahora desinstalamos la versión antigua:

```
adb uninstall jakhar.aseem.diva
```

E instalamos la hackeada:

```
adb install DivaModificada-aligned-debugSigned.apk
```

![image-20220519193909338](/Ciberseguridad-PePS/assets/img/inversa/image-20220519193909338.png)

