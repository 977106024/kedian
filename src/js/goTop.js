// var $ = require('jquery');

  function GoTop($ct){
    this.$ct = $ct;
    console.log($ct)
    this.$target = $('<div id="go-top"><a href="#"></a></div>');

    this.bindEvent();

  }
  GoTop.prototype.createNode = function(){
    this.$ct.append(this.$target);
  }
  GoTop.prototype.bindEvent = function(){
    var self = this;
      $(window).on('scroll',function(){
        var offsetTop = $(window).scrollTop();

        if(offsetTop > 100){
          self.createNode();
          self.$target.show();
        }else{
          self.$target.hide();
        }
      });

    this.$target.on('click',function(){
      $(window).scrollTop(0);
    });
  }
  new GoTop($('body'));

// var xhr = new XMLHttpRequest();
//
// xhr.onreadystatechange = function () {
//   if(xhr.readyState === 4) {
//     if(xhr.status === 200 || xhr.status === 304) {
//       console.log(xhr.responseText);
//     }else {
//       console.log(xhr.responseText);
//     }
//   }
// }
//
// xhr.open('get','/....',true);
// xhr.send();
