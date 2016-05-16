var express = require('express');
var kuroshiro = require("kuroshiro");
var kanjidic = require('kanjidic');
var routes = function () {
    var kanji = express.Router();

    kanji.route('/')
        .post(function (req, res) {
            var kanjiJSON = [];
            kuroshiro.init(function (err) {
                var result = kuroshiro.convert(req.body.kanji, { mode: 'furigana', to: 'hiragana' }); kanjiJSON.push({ html: result });
                console.log(result);

                // res.json(kanjiJSON);
                res.status(201).send(kanjiJSON);
            });
        });
    kanji.route('/:kanji')
        .get(function (req, res) {
            var kanjiJSON = [];
            kuroshiro.init(function (err) {
                var result = kuroshiro.convert(req.params.kanji, { mode: 'furigana', to: 'hiragana' }); kanjiJSON.push({ html: result });
                res.status(201).send(kanjiJSON);
            });
        });
    // kanji.route('/find/:kanjimoji')
    //     .get(function (req, res) {
    //         // get data on single kanji 
    //         var ame = kanjidic.lookup('雨');
 
    //         // get JSON dump of the whole database 
    //         var dump = kanjidic.toJSON();
 
    //         // this can be useful for further processing: 
    //         var subset = dump.filter(function (kanjiData) {
    //             return kanjiData.oldJlptLevel >= 3;
    //         })
    //             .map(function (kanjiData) {
    //                 return (kanjiData).pick('kanji', 'kunyomi', 'onyomi', 'meaning')
    //             });
    //             res.status(201).send(subset);
    //     });
    return kanji;
};

module.exports = routes;