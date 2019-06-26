/*$("video.d-block").each(function(e) {
    e.addEventListener('ended', 
    e => {$("#myCarousel").carousel('next'); alert("Terminó el video");}
    , false);
});*/
$(function(){
    var currentVid;

    function playVideo(v){ //Reproducir video y pausar carrusel   
        v.trigger('play');
        $('#myCarousel').carousel('pause');
        v.on('ended', function(){ //Finalizó el video, pasar al siguiente slide y des-pausear el carrousel
            setTimeout( () => $('#myCarousel').carousel('next').carousel('cycle') ,500);           
            v.off();  
        });
    }

    function skipVideo(v){ //Detener video del slide anterior y des-pausear el carrusel
        vid.trigger('pause');
        vid[0].currentTime = 0;
        $('#myCarousel').carousel('cycle');
    }

    $('#myCarousel').on('slid.bs.carousel', function (e) { //El carrusel llegó al siguiente slide
        if(currentVid!=null) skipVideo(currentVid);
        vid = $('#myCarousel .carousel-item.active video');
        if(vid.length){
            setTimeout( () => playVideo(vid) ,500);
            currentVid = vid;
        } else {
            currentVid = undefined;
        }
    });
    
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