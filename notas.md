
Vídeos seguridad en docker
1. [Seguridad en el host](https://player.vimeo.com/video/517148290)
2. [Seguridad en el demonio](https://player.vimeo.com/video/517148194)
3. [Seguridad en contenedores](https://player.vimeo.com/video/517147973)
4. [Seguridad en la construcción de imágenes I](https://player.vimeo.com/video/517161900)
5. [Seguridad en la construcción de imágenes II](https://player.vimeo.com/video/517161039)
6. [Seguridad en la construcción de imágenes III](https://player.vimeo.com/video/517162103)
7. [Seguridad en la construcción de imágenes IV](https://player.vimeo.com/video/517162393)


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
pandoc _posts/2020-11-01-Git.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-01-Git.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
pandoc _posts/2020-11-02-Github\ pages.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-02-Github\ pages.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
  pandoc _posts/2020-11-03-jekyll.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-03-jekyll.pdf
  pandoc _posts/2020-11-03-jekyll.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-03-jekyll.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
   pandoc _posts/2020-11-04-Arquitectura-web-Conceptos-generales.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-04-Arquitectura-web-Conceptos-generales.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
   
  pandoc _posts/2020-11-06-Instalar-LAMP.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-06-Instalar-LAMP.pdf 
   pandoc _posts/2020-11-06-Instalar-LAMP.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-06-Instalar-LAMP.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
   
     pandoc _posts/2020-11-05-Protocolo-HTTP.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-05-Protocolo-HTTP.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
pandoc _posts/2020-11-07-Configuracion-Basic-Apache.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-07-Configuracion-Basic-Apache.pdf 
  pandoc _posts/2020-11-07-Configuracion-Basic-Apache.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-07-Configuracion-Basic-Apache.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
 
 pandoc _posts/2020-11-08-P1-Apache.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-08-P1-Apache.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
     
pandoc _posts/2020-11-30-testing-owasp.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2020-11-30-testing-owasp.pdf

 pandoc _posts/2021-01-08-Docker.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-08-Docker.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
 
 pandoc _posts/2021-01-09-Práctica-Docker.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-09-Práctica-Docker.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan -N
 
 pandoc _posts/2021-01-12-nginx.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-12-nginx.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan
pandoc _posts/2021-01-31-Validación-de-entradas.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-31-Validación-de-entradas.pdf
 pandoc _posts/2021-01-13-Docker-compose.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-13-Docker-compose.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan
pandoc _posts/2021-01-14-Google-cloud.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-14-Google-cloud.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan
pandoc _posts/2021-01-31-Validación-de-entradas.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-01-31-Validación-de-entradas.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan
pandoc _posts/2021-03-01-Hardening-Servidor.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-03-01-Hardening-Servidor.pdf
pandoc _posts/2021-03-10-Seguridad-en-Docker.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-03-10-Seguridad-en-Docker.pdf
pandoc _posts/2021-03-01-Hardening-Servidor.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-03-01-Hardening-Servidor.pdf
pandoc _posts/2021-04-01-Inyección-SQL.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-04-01-Inyección-SQL.pdf
pandoc _posts/2021-05-01-FileUpload.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-05-01-FileUpload.pdf
 pandoc _posts/2021-06-01-Aplicación-en-python.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-06-01-Aplicación-en-python.pdf --template=eisvogel.tex --toc --highlight-style tango --filter pandoc-latex-environment --variable urlcolor=cyan
pandoc _posts/2021-06-01-Iniciación-a-la-programación.md --pdf-engine=xelatex --resource-path=.:/home/victorponz/Documentos/2020-21/Ciberseguridad/..  -o assets/pdf/2021-06-01-Iniciación-a-la-programación.pdf

