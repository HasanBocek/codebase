// Uygulamanın başlangıç noktası

// kütüphaneleri import ettik
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index'); // index.js dosyasını import ettik ve indexRouter değişkenine atadık

var app = express(); // express uygulamasını oluşturduk

// Burada ayar çektik
app.use(logger('dev')); // logları konsola yazdırmak için
app.use(express.json()); // json veri almak için
app.use(express.urlencoded({ extended: false })); // urlencoded veri almak için
app.use(cookieParser()); // cookie işlemleri için

// Burada bütün methodları yönlendirdik

app.use('/deneme', indexRouter); // domain.tdl/deneme -> indexRouter (/routes/index.js) dosyasına yönlendirme yaptık

//app.use("/baskabiradres", baskaRouter); // domain.tld/baskabiradres -> baskaRouter dosyasına yönlendirme yapar (burası yorum satırı olduğu için çalışmayacak)

// ilk çalıştırmada önce kütüphaneleri yüklemek için npm install yazmalıyız
// sonra uygulamayı çalıştırmak için npm start yazmalıyız
// npm start dediğimizde bu dosya çalışacak

module.exports = app; // app.js dosyasını dışarıya açtık
// Bu dosyayı require eden dosyada app değişkenine ulaşabiliriz
