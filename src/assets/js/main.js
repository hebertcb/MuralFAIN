/*$("video.d-block").each(function(e) {
    e.addEventListener('ended', 
    e => {$("#myCarousel").carousel('next'); alert("Terminó el video");}
    , false);
});*/
$(function(){
    var currentMed;

    function playMedia(m){ //Reproducir video y pausar carrusel   
        console.log('Reproducir!!');
        m.trigger('play');
        $('#myCarousel').carousel('pause');
        m.on('ended', function(){ //Finalizó multimedia, pasar al siguiente slide y des-pausear el carrousel
            setTimeout( () => $('#myCarousel').carousel('next').carousel('cycle') ,500);           
            m.off();  
        });
    }

    function skipMedia(m){ //Detener multimedia del slide anterior y des-pausear el carrusel
        m.trigger('pause');
        m[0].currentTime = 0;
        $('#myCarousel').carousel('cycle');
    }

    $('#myCarousel').on('slid.bs.carousel', function (e) { //El carrusel llegó al siguiente slide
        console.log("Evento slide");
        if(currentMed!=null) skipMedia(currentMed);
        let media = ($('#myCarousel .carousel-item.active video').length) ? ($('#myCarousel .carousel-item.active video')) : ($('#myCarousel .carousel-item.active audio'));
        console.log('Media',media);
        if(media.length){
            setTimeout( () => playMedia(media) ,500);
            currentMed = media
        } else {
            console.log("No hay multimedia.");
            currentMed = null;
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