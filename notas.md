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
```
