

function carouselTwo(){

    this.init();
    this.bind();
    this.move();
    this.click();
}

carouselTwo.prototype.init = function(){
     this.oDiv = document.getElementById("carousel2");
     this.oUl = this.oDiv.getElementsByTagName('ul')[0];
     this.aLi = this.oUl.getElementsByTagName('li');

     this.speed = -2;
    this.oUl.innerHTML += this.oUl.innerHTML;
    this.oUl.style.width = this.aLi[0].offsetWidth * this.aLi.length + 'px';


}

carouselTwo.prototype.move = function(){
    if(this.oUl.offsetLeft < -this.oUl.offsetWidth / 2) {
        this.oUl.style.left = '0';
    }
    if(this.oUl.offsetLeft > 0) {
        this.oUl.style.left = -this.oUl.offsetWidth / 2 + 'px';
    }
    this.oUl.style.left = this.oUl.offsetLeft + this.speed + 'px';
}
carouselTwo.prototype.bind = function(){

    var _this = this;
    this.timer = setInterval((function(){
        _this.move();
    }), 30);

    this.oDiv.onmouseover = function() {
        clearInterval(_this.timer);
    };
    this.oDiv.onmouseout = function() {
        _this.timer = setInterval((function(){
            _this.move();
        }), 30);
    };
}
carouselTwo.prototype.click = function(){
    var _this = this;
    document.getElementsByClassName('arrow-l')[0].onclick = function() {
        _this.speed = -2;
    };
    document.getElementsByClassName('arrow-r')[0].onclick = function() {
        _this.speed = 2;
    };
}
new carouselTwo();