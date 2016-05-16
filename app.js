var express = require('express');
var app = express();

var bodyParser = require('body-parser');
// kuroshiro.init(function (err) {
//     // kuroshiro is ready
//     var result = kuroshiro.convert('<dl class="list1"><dl class="list1"><dt class="subHead">営業支援</dt><dd>－商品カタログや営業提案書などをスマートデバイスで視覚的にプレゼン</dd><dt class="subHead">ペーパーレスの会議</dt><dd>－ペーパーレス会議を実現するための会議室管理、資料共有及び、デバイス間の操作連動が可能</dd><p></p></dt><dd>－マニュアルやプレゼン資料、動画、画像などのファイルをリアルタイムで共有可能</dd><dt class="subHead">保守・点検と各種報告</dt><dd> －スマートデバイスを用いてマニュアル参照、営業日報、保守・点検の報告などで利用可能</dd><dt class="subHead">商品カタログ配信</dt><dd>－商品カタログや商品情報、会社情報などをマルチデバイスに配信、共有可能</dd><dt class="subHead">E-learning</dt><dd>－教育現場（小中高、大学、塾など）と社内教育などでスマートデバイスおよび、PCを用いた教育が可能</dd></dl>',{mode:'furigana', to:'hiragana'});    
//     console.log(result);
// });
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
kanji = require('./routers/kanji')();

app.use('/api/kanji', kanji); 
// app.get('/:kanji', function (req, res) {
//    // First read existing users.
//    var kanjiJSON = [];
//    kuroshiro.init(function (err) {
//     // kuroshiro is ready
//     var result = kuroshiro.convert(req.params.kanji,{mode:'furigana', to:'hiragana'});    kanjiJSON.push({html:result});
//         console.log(result);
//         //res.end(JSON.stringify(kanjiJSON));
//         res.json(kanjiJSON);
//     });
// })
var port = process.env.PORT || 1337;
var server = app.listen(port, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
        
        
        
        
        
          
        
        
        
        
        
        
        
      