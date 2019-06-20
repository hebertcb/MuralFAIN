/*$("video.d-block").each(function(e) {
    e.addEventListener('ended', 
    e => {$("#myCarousel").carousel('next'); alert("Terminó el video");}
    , false);
});*/
$(function(){

    $('#myCarousel').on('play', '#video', function () {
        $('#myCarousel .carousel-item.active #video').on('ended', function () {
            $('#myCarousel').carousel('next').carousel('cycle');
            $(this).off();
        });
    });
    /*
    $('#myCarousel .carousel-item.active #video').on('ended', function () {
        console.log('terminado');
        //$('#myCarousel').carousel('next');
        $(this).carousel({ride:'carousel'});
    });
    */
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        vid = $('#myCarousel .carousel-item.active video');
        if(vid.length){
            vid.trigger('play');
            $(this).carousel('pause');
        }else{
                vid.trigger('pause');
                video.currentTime = 0;
            }
    });

    //$('#myCarousel').on('slide.bs.carousel', function (e) {
    //});
})


/*
$('video').on('play', function (e) {
    $("#myCarousel").carousel('pause');
    alert("Playyyyy");
});
$('video').on('ended', function (e) {
    $("#myCarousel").carousel();
});
*/