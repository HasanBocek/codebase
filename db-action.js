// burada örnek veri tabanı işlemlerini bulabilirsin (örneğin veri tabanına veri eklemek, veri güncellemek, veri silmek)
// bu dosyayı require eden dosyada router değişkenine ulaşabiliriz
// mongodb gibi veri tabanları için mongoose kütüphanesini kullanabiliriz

// mongodb nodejs crud operations (create, read, update, delete) ile googledan örneklerini bulabilirsin

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Veri tabanı bağlantısı
mongoose.connect('mongodb://localhost:27017/veritabani', {useNewUrlParser: true, useUnifiedTopology: true});

// Veri tabanı şeması
const veriTabaniSema = new Schema({
  isim: String,
  soyisim: String,
  yas: Number
});

// Veri tabanı modeli
const veriTabaniModel = mongoose.model('veriTabaniModel', veriTabaniSema);

// Veri tabanına veri ekleme
veriTabaniModel.create({
  isim: 'Ahmet',
  soyisim: 'Yıldız',
  yas: 25
}, function(err, veri){
    if(err) console.log(err);
    console.log(veri);
});

// Veri tabanındaki veriyi güncelleme
veriTabaniModel.updateOne({isim: 'Ahmet'}, {yas: 26}, function(err, veri){
    if(err) console.log(err);
    console.log(veri);
});

// Veri tabanındaki veriyi silme
veriTabaniModel.deleteOne({isim: 'Ahmet'}, function(err, veri){
    if(err) console.log(err);
    console.log(veri);
});

// Veri tabanındaki veriyi bulma
veriTabaniModel.find({isim: 'Ahmet'}, function(err, veri){
    if(err) console.log(err);
    console.log(veri);
});