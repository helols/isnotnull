// @author: Yoon Kim
var jsdom = require('jsdom')
  , fs = require("fs")
  , jquery = fs.readFileSync("./jquery.js");

console.log(new Date());
jsdom.env({
  url  : 'https://github.com/tmpvar/jsdom',
  src  : [jquery],
  done : function (errors, window) {
    if(!errors) {
      var $ = window.$;
      console.log($('title').text());
      console.log($('link[rel="icon"]').attr('href'));
      console.log(new Date());
    }
  }
});
