(async function() {
'use strict';
const errorElements = $('.error');
 const videoList = $('#videos');
  const videoPlayer = $('#player');
  const videoTitle = $('#name');
async function fetchJson(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`${response.status} - ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        errorElements.text(`Fetch error: ${error.message}`);
    }
}
try{
 const videos = await fetchJson('videos.json');
 if (!videos) {
    return;
 }
 videos.forEach(video => {
     videoList.append(`<option value="${video.url}">${video.title}</option>`);
 });
    videoList.change(e => {
        const selectedVideo = videos.find(video => video.url === e.target.value);
        if (selectedVideo) {
            videoPlayer.attr('src', selectedVideo.url);
            videoTitle.text(selectedVideo.title);
        }
    });
}
catch (error){
    errorElements.text(`Fetch error: ${error.message}`);
}
}());