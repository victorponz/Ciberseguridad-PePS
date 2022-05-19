```
sh d2j-dex2jar.sh ../DivaApplication.apk 
apktool d DivaApplication.apk //Resultado en el directorio output
install anbox.io
install adb
adb install Diva-application.apk
adb root
adb shell //primero ejecutar su para root
sqlite3
```



Instalar 

adb

sqlite3

Parece ser que la actividad InsecureDataStorage4 da error al grabar por tema de permisos

No sé por qué motivo pero no me encuentra el archivo [file:///data/data/jakhar.aseem.diva/shared_prefs/jakhar.aseem.diva_preferences.xml](file:///data/data/jakhar.aseem.diva/shared_prefs/jakhar.aseem.diva_preferences.xml)

```
adb shell input text 'file:///data/data/jakhar.aseem.diva/shared_prefs/jakhar.aseem.diva_preferences.xml'
```

Access control porque es más técnico. El primero no sé por qué no funciona

Corregir la actividad 11

```
adb shell content query --uri content://jakhar.aseem.diva.provider.notesprovider/notes
```



https://blog.roysolberg.com/2018/02/crack-android-apps



![image-20220518110841853](../../../../.config/Typora/typora-user-images/image-20220518110841853.png)

Al final lo hago así

```
keytool -genkey -v -keystore keystore.keystore -alias alias -keyalg RSA -keysize 2048 -validity 3650
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore keystore.keystore base.unaligned.apk alias

./zipalign -v 4 /home/victorponz/Documentos/android/base.unaligned.apk /home/victorponz/Documentos/android/base.aligned.apk

```

Crackear

Modificamos 

```
 apktool decode developertools-2.1.1.apk
```

Modificamos el archivo `strings.xml`

```
./apktool build developertools-2.1.1 -o base.unaligned.apk
```

```
keytool -genkey -v -keystore keystore.keystore -alias alias -keyalg RSA -keysize 2048 -validity 3650

jarsigner -verbose -sigalg MD5withRSA -digestalg SHA1 -keystore ~/.android/debug.keystore -storepass android base.unaligned.apk androiddebugkey
```

Lo hago mediante la herramienta [https://github.com/patrickfav/uber-apk-signer](https://github.com/patrickfav/uber-apk-signer)