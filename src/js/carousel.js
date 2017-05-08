  // var $ = require('jquery');
  function Carousel($node){
    this.$node = $node;
    this.init();
    this.bind();
    this.setBg(1);
    this.autoPlay();
  }

  Carousel.prototype.init = function(){
        this.$ct = this.$node.find('.img-ct'),
        this.$items = this.$ct.children(),
        this.$pre = this.$node.find('.pre'),
        this.$next = this.$node.find('.next'),
        this.$bullet = this.$node.find('.bullet');

        this.imgWidth = $(window).width(),
        this.imgCount = this.$items.length;


    this.$ct.prepend(this.$items.last().clone());
    this.$ct.append(this.$items.first().clone());
    this.imgRealCount = this.$ct.children().length;

    this.$ct.find('li').css('width',this.imgWidth);
    this.$ct.find('.cover').css('width',this.imgWidth);
    this.$ct.css({
      left:0-this.imgWidth,
      width:this.imgRealCount*this.imgWidth
    });

    this.curIdx = 0;
    this.isAnimate = false;
  }

  Carousel.prototype.bind = function(){
    var _this = this;
    this.$next.on('click',function(){
      _this.playNext();
    });
    this.$pre.on('click',function(){
      _this.playPre();
    });
    this.$bullet.find('li').on('click',function(){
      var idx = $(this).index();
      console.log(idx);
      if(idx > _this.curIdx){
          _this.playNext(idx - _this.curIdx);
      }
      if(idx < _this.curIdx){
        _this.playPre(_this.curIdx - idx);
      }
    });
  }

  Carousel.prototype.playNext = function(idx){
    var _this = this;
    var idx = idx || 1;
    if(!this.isAnimate){
      this.isAnimate = true;
      this.setBg(this.curIdx+2);
      this.$ct.animate({left:'-='+(_this.imgWidth*idx)},function(){
        _this.curIdx = (_this.curIdx + idx)%_this.imgCount;
        if(_this.curIdx === 0){
          _this.$ct.css('left',-_this.imgWidth);
        }
        _this.isAnimate = false;
        _this.setBullet();
      })
    }
  }

  Carousel.prototype.playPre = function(idx){
      var _this = this;
      var idx = idx || 1;
      if(!this.isAnimate){
        this.isAnimate = true;
        this.setBg(this.curIdx);
        this.$ct.animate({left:'+='+(_this.imgWidth*idx)},function(){
          _this.curIdx = (_this.imgCount + _this.curIdx - idx)%_this.imgCount;
          console.log(_this.curIdx);
          if(_this.curIdx == (_this.imgCount - 1)){
            _this.$ct.css('left',-_this.imgWidth*_this.imgCount);
          }
          _this.isAnimate = false;
          _this.setBullet();
        })
      }
  }

  Carousel.prototype.setBullet = function(){
      this.$bullet.children().removeClass('active')
                        .eq(this.curIdx).addClass('active');
  }
  Carousel.prototype.setBg = function(idx){
      // console.log(idx);

        var idx = idx || 0;
        $node = this.$ct.children().eq(idx),
        $cover = $node.find('.cover'),
        imgUrl = $cover.attr('data-bg-img'),
        $cover.css('background-image','url('+imgUrl+')');
  }
  Carousel.prototype.autoPlay = function(){
    var _this = this;
    clock = setInterval(function(){
         _this.playNext();
    },2000)
  }

  var init = function($ct){
      $ct.each(function(index,node){
        new Carousel($(node));
      })
  }
  init($('.carousel'));
