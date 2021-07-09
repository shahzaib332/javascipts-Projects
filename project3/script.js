//get DOM elements
const video=document.getElementById('video');
const play =document.getElementById('play');
const stop =document.getElementById('stop');
const progress =document.getElementById('progress');
const time =document.getElementById('time');
//function to plauy pause video
function playPauseVideo(){
    // check if video is paused or playing
    if ( video.paused){
        video.play();
    } else{
        //if video is playing paused the video
        video.pause();
    }


};
// function to play / pause icons
function updateIcons(){
    // check if video is paused or playing
    if (video.paused){
        // if video is paused then show the play button
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    }else{
        // if video is playing then show the pause button
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }



};

//function to update the video progress
function timeupdate(){
    


};

//function to update the video progress
function updateProgress(){
    //console.log(video.duration);
    // update the value of progress bar using cureenttime / total time
    progress.value=(video.currentTime / video.duration) *100;
    // use currenttime to calculate mints
    let minutes = Math.floor(video.currentTime / 60)
    // format mints to always 2 digit
    if (minutes < 10){
        minutes = '0'+ String(minutes);
    }
    

    // use cureent time to calc sconds
    let seconds = Math.floor(video.currentTime % 60)

    if (seconds < 10){
        seconds = '0'+ String(seconds);
    }
    // update the time in UI
    time.innerHTML = `${minutes}:${seconds}`;
//    console.log(minutes,seconds);

};

//function to stop video playback
function stopVideo(){
    //reset the video  line to 0
    video.currentTime = 0;
    video.pause();


};
//function to update video progress bvasedon
function updateVideoProgress(){
    // set the curnttime of video based on position of the slider
    video.currentTime=(progress.value * video.duration )/100;




};


//Event Listners
// 1. listen for click on video
video.addEventListener('click',playPauseVideo);
// 2. listen for pause click on video
video.addEventListener('pause',updateIcons);
// 3. listen for play evenet on video
video.addEventListener('play',updateIcons);
// 4. listen for timeupdate evenet on video
video.addEventListener('timeupdate',updateProgress);

//5. listen for a click on play button
play.addEventListener('click',playPauseVideo);

//6. listen for a click on stop button
stop.addEventListener('click',stopVideo);
//7 listen for change event on progress bar
progress.addEventListener('change',updateVideoProgress)

