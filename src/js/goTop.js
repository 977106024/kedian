// var $ = require('jquery');

  function GoTop($ct){
    this.$ct = $ct;
    this.$target = $('<div id="go-top"><a href="#"></a></div>');

    this.bindEvent();

  }
  GoTop.prototype.createNode = function(){
    this.$ct.append(this.$target);
  }
  GoTop.prototype.bindEvent = function(){
    var self = this;
    $(window).on('scroll',function(){
      var offsetTop = $('body').scrollTop();

      if(offsetTop > 100){
        self.$target.show();
        self.createNode();
      }else{
        self.$target.hide();
      }
    });


    this.$target.on('click',function(){
      $(window).scrollTop(0);
    });
  }
    new GoTop($('body'));
