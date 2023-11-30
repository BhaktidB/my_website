// alert('hi')
// $('.title p').text('yoooo')
let start=false;
let audio = new Audio('audio/cafe.mp3');

$('.mute-button').click(()=>{
    if(start!=true){
        audio.play()
        start=true
    }else{
        audio.pause()
        start=false

    }

})