var express = require('express');
var router = express.Router();

// req: request -> gelen istek
// res: response -> cevap
// next: sonraki işlem

// GET methodu (veri isteme) ile gelen isteklerde çalışacak fonksiyon
// domain.tld/deneme/
router.get('/', function(req, res, next) {
  res.send('respond with a resource'); // cevap döndür
});

// GET methodu (veri isteme) ile gelen isteklerde çalışacak fonksiyon
// domain.tld/deneme/merhaba
router.get('/merhaba', function(req, res, next) {
  // merhaba adresindeki verileri bulup cevap olarak döndürmeyi burası yapar
  res.send('sanada merhaba'); // cevap döndür
});

// POST methodu (veri gönderme) ile gelen isteklerde çalışacak fonksiyon
// domain.tld/deneme/merhaba
router.post('/merhaba', function(req, res, next) {
  console.log(req.body) // gelen veriyi (req.body üzerinden gelen veriye erişilir) konsola yazdır
  /*

  buraya veriyi veritabanına eklemek için gerekli kodlar yazılabilir

  */
  res.send('verini oluşturdum'); // cevap döndür
});

// PUT methodu (veri güncelleme) ile gelen isteklerde çalışacak fonksiyon
// domain.tld/deneme/merhaba
router.put('/merhaba', function(req, res, next) {
  console.log(req.body) // gelen veriyi (req.body üzerinden gelen veriye erişilir) konsola yazdır
  /*

  buraya veriyi veritabanından güncellemek için gerekli kodlar yazılabilir

  */
  res.send('verini güncelledim'); // cevap döndür
});

// DELETE methodu (veri silme) ile gelen isteklerde çalışacak fonksiyon
// domain.tld/deneme/merhaba
router.delete('/merhaba', function(req, res, next) {
  console.log(req.body) // gelen veriyi (req.body üzerinden gelen veriye erişilir) konsola yazdır
  /*

  buraya veriyi veritabanından silmek için gerekli kodlar yazılabilir

  */
  res.send('verini sildim'); // cevap döndür
});

module.exports = router;
