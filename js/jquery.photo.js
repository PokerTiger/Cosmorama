/**
 * Created by user on 2017/7/4.
 */
$(window).on('load', function () {
    waterfall();
})


function waterfall() {
    var $boxs = $('#main>div');
    var w = $boxs.eq(0).outerWidth();//每一列的宽度
    var cols=Math.floor($(window).width()/w); //列数 取整
    $('#main').width(w*cols).css('margin','0 auto');
    var hArr=[];
    $boxs.each(function (index,value) {
        var h=$boxs.eq(index).outerHeight();
       if(index<cols){
           hArr[index]=h;

       }else {
           var minH=Math.min.apply(null,hArr);
           var minHIndex=$.inArray(minH,hArr);
           $(value).css({
               'position':'absolute',
               'top':minH+'px',
               'left':minHIndex*w+'px'
           })
           console.log(minH)
           hArr[minHIndex]+=$boxs.eq(index).outerHeight();
    }
    })
}