


function Cp($cp){
    this.$cp = $cp;

    this.mouseenter();
    this.mouseleave();

}
Cp.prototype.mouseenter = function(){
    this.$cp.on('mouseenter', function (event) {
        $(event.target).find('a').css('color', '#fff');
    })
}
Cp.prototype.mouseleave = function(){
    this.$cp.on('mouseleave',function(event){
        $(event.target).find('a').css('color','#044d2b');
    })
}
new Cp($('.cp-l li'));