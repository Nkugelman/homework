(async function() {
    'use strict';
   const videoElem = document.querySelector('video');
   async function loadVideos(){
    try{
        const r = await fetch('videos.json');
        if(!r.ok){
            throw new Error (`${r.status}- ${r.statusText}`)
            
        }
        return r.json();
       

    }
    catch(e){
        console.error(e);
        
    }
   }
 async  function displayVideos(){
    const videos =  await loadVideos();
    if(!videos){
        return;
    }
    let activeVideo;
    const videoList =document.querySelector('#videos');
    videos.forEach(video=>{
        const videoLi = document.createElement('li');
       videoLi.innerHTML = `
  <span>${video.name}</span>
  <img src="${video.picture}" alt="${video.name}">
`;

        videoList.appendChild(videoLi);
        videoLi.addEventListener('click',()=>{
            videoElem.src=video.url;
            //videoElem.play();
            if(activeVideo ){
           // activeVideo.style.borderColor='black';
           activeVideo.className='visited';
            }
           // videoLi.style.borderColor='red';
           // videoLi.style.color='lightgray';
           videoLi.className='visited active';
           
          activeVideo=videoLi;

        })

    });


   }
     
    displayVideos();
}());