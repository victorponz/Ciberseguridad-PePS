Apache

https://geekflare.com/apache-web-server-hardening-security/

https://www.tecmint.com/apache-security-tips/

mod_headers

https://stackabuse.com/securing-your-node-js-app/

**Pandoc**

```
pandoc _posts/2020-11-01-Git.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o example13.pdf
```

Da problemas con las imágenes y con las líneas horizontales

Tampoco funciona bien imprimiendo desde Chrome.
Hay que quitar las líneas horizontales y crear un enlace en /Ciberseguridad-PePS que apunte a la ruta real de la carpeta
```
pandoc _posts/2020-11-01-Git.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-01-Git.pdf
 pandoc _posts/2020-11-02-Github\ pages.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-02-Github\ pages.pdf 
  pandoc _posts/2020-11-03-jekyll.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-03-jekyll.pdf
  pandoc _posts/2020-11-04-Arquitectura-web-Conceptos-generales.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-04-Arquitectura-web-Conceptos-generales.pdf 
  pandoc _posts/2020-11-05-Protocolo-HTTP.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-05-Protocolo-HTTP.pdf 
pandoc _posts/2020-11-06-Configuracion-Basic-Apache.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-06-Configuracion-Basic-Apache.pdf 
pandoc _posts/2020-11-30-testing-owasp.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-30-testing-owasp.pdf

```

