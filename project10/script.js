// get DOM elements
const container=document.getElementById('container');
const prevBtn=document.getElementById('previous');
const playBtn=document.getElementById('play');
const nextBtn=document.getElementById('next');
const albumArt=document.getElementById('album-art');

const audio=document.getElementById('audio');
const trackTitle=document.getElementById('song-title');
const progressContainer=document.getElementById('progress');
const progressBar=document.getElementById('progress-bar');


// put songs n array
const tracks=['Ertrugul','National Anthem'];

//set default song
let trackIndex=1;

// function to inialize app with default track
function trackLoad(track){
    // update tracktitle using inner text
    trackTitle.innerText='track';
    audio.src=`music/${track}.mp3`
    albumArt.src=`images/${track}.jpeg`

};
//function for pauseTrack
function pauseTrack(){
    container.classList.remove('play');
    /// now replace the play with pase
    playBtn.querySelector('i.fas').classList.remove('fa-pause');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    // pause play song in the audio element
    audio.pause();

}
function playTrack(){
    container.classList.add('play');
    /// now replace the play with pase
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');
    // pause play song in the audio element
    audio.pause();

}
// function for prevTrack
function prevTrack(){
    //decreement in track
    trackIndex--;
    // if track value is less than 0 goto last track
    if(trackIndex < 0 ){
        trackIndex=tracks.length-1;

    };
    // load the new track

trackLoad(tracks[trackIndex]);
// play thenew track
playTrack();

}
// function for nextTrack
function nextTrack(){
    //increment in indexTrack
    trackIndex++;
    //if the value is less than 0 then go to last track
    if(trackIndex > tracks.length-1){
        trackIndex=0;
    };

    trackLoad(tracks[trackIndex]);
// play thenew track
playTrack();
    


}

//EventListener for playbtn
playBtn.addEventListener('click', () =>{
// check if is playing 
const istrackPlaying= container.classList.contains('play');
// if its playing pause it
if(istrackPlaying){
    pauseTrack();

}else{
    playTrack();
}
});
//2. evenlistner for previous btn
prevBtn.addEventListener('click',prevTrack);
nextBtn.addEventListener('click',nextTrack);
    






//call the loadtrack function
trackLoad(tracks[trackIndex]);
