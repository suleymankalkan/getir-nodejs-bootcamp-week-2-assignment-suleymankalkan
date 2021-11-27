
## Homework-2

+ Creating a server with `http` module
+ Basic Routing
+ Logging requests to file using `fs` module
+ Error 404 for the unknown routes



### Avaible Routes


| Route |
| :-------- |
| `/` |
| `/about` |
| `/contact` |
| `/getir` | 

Any other routes that isn't listed above will give you an 404 error.

### Setup & Start

```bash
  npm install
  npm start
```

### Environment

| Type | Default Value | Description                       |
| :-------- | :------- | :-------------------------------- |
| `Server Port`      | `3000` | HTTP Server Port |
| `Log File`      | `sunucu.log` | File to log the requests|




# week-2-assignment

 Bir sonraki derse hazırlıklı gelebilmeniz adına sizlere ARGE ödevi vermeye karar verdik. Bu repo üzerinde klasörlerinizi/dosyalarınızı oluşturup çalışabilirsiniz. 

 ## Yapmanız gereken maddeler;

* Http modülü ile bir web server oluşturalım.
* Client tarafından gönderilen request’leri; talep edilen url’lere yönlendirip (Ana Sayfa, Hakkımızda vs.) ekranda “… sayfasındasınız”  gibi bir mesaj verelim.

* Gelen her request’i FS modülünü kullanarak bir dosyada loglayalım.

* Tanımlı olmayan url’ler için gelen her request’i de 404 uyarısı ile yönlendirip mesaj gösterelim.


NOTE: Node modules gibi büyük dosyaları github'a pushlamamanız için bir .gitignore dosyası eklemeyi de unutmayın.



