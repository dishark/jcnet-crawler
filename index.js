var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {

        $('td.font15').each(function(index, subject){
            var classified = subject.children[0].data;

            if (classified == undefined) return;

            console.log(classified);
        });
    }
});

c.queue('http://www.jcnet.com.br/classificados.php?tipo=EMPREGOS');