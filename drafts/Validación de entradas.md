## Antes de empezar

Para continuar esta entrada es necesario descargar el código PHP

## Validación de entradas

Nunca hay que confiar en aquello que introducen los usuarios en un formulario web. Estamos acostumbrados a trabajar con ellos en cualquier aplicación web de hoy en día: Facebook, Twitter, Instagram, ... y realmente no nos damos cuenta de lo fácil que es atacar una web a través de ellos si no se toman las debidas precauciones al validar los datos de entrada.

## Tumbando el servidor ( no de momento)

Parece mentira pero hay un ataque llamado **ReDoS** (Regular Expression Denial of Service Attacks) que nos puede tumbar el servidor.

Una expresión regular es una cadena de texto que representa un patrón de búsqueda. Lo usamos mucho en la consola, por ejemplo al escribir `ls *.pdf`que nos lista todos los documentos del directorio actual que terminen en `pdf` pues el token `*` significa cualquier cosa. 

Otro ejemplo, sería la expresión `col?.pdf` que listaría el documento `cola.pdf` pero no `colada.pdf` porque el token `?` significa un sólo carácter. 

Vamos a usar una app que permite el registro de  usuarios. Se le pide un nombre de usuario y una contraseña. La aplicación no deja que el usuario introduzca su nombre de usuario dentro de la contraseña y para ello usa el siguiente código PHP

Más info en:

* [https://s0md3v.medium.com/exploiting-regular-expressions-2192dbbd6936](https://s0md3v.medium.com/exploiting-regular-expressions-2192dbbd6936)
* [https://sec.okta.com/articles/2020/04/attacking-evil-regex-understanding-regular-expression-denial-service](https://sec.okta.com/articles/2020/04/attacking-evil-regex-understanding-regular-expression-denial-service)
* http://www.hackingwithphp.com/4/8/0/regular-expressions

## Robar cookies

Como vimos en el tema HTTP

## Redirigir a otra web.

