/*$("video.d-block").each(function(e) {
    e.addEventListener('ended', 
    e => {$("#myCarousel").carousel('next'); alert("Terminó el video");}
    , false);
});*/
$(function(){
    var currentVid;

    function playVideo(v){  
        console.log('Play video and Stop carousel');      
        v.trigger('play');
        $('#myCarousel').carousel('pause');
        v.on('ended', function(){
            $('#myCarousel').carousel('next').carousel('cycle');            
            v.off();      
            console.log('End Video');      
        });
    }

    function skipVideo(v){ 
        console.log('Stop EX-currentVideo and Play Carousel');   
        vid.trigger('pause');
        vid[0].currentTime = 0;
        $('#myCarousel').carousel('cycle');
    }

    $('#myCarousel').on('slid.bs.carousel', function (e) {
        if(currentVid!=null) skipVideo(currentVid);
        vid = $('#myCarousel .carousel-item.active video');
        console.log(vid);
        if(vid.length){
            playVideo(vid);
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