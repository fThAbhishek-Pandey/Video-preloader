// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const preloader = document.querySelector('.preloader');
console.log(preloader);
window.addEventListener('DOMContentLoaded',function(){
          console.group('I am loaded');
          preloader.classList.add('hide-preloader');
});

const playBtn = document.querySelector('.switch-btn');
const playVideo = document.querySelector('.video-container');
playBtn.addEventListener('click',function(evt){
        evt.preventDefault;
        if ( !playBtn.classList.contains('slide')){
            playBtn.classList.add('slide');
            playVideo.pause();
        }
       else {
        playBtn.classList.remove('slide');
        playVideo.play();
       }
        // evt.currentTarget.classList.toggle("");
        console.log('i am clicked');
});