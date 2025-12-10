(async function() {
    'use strict';

    async function loadPics(search) {
        try {
            const response = await fetch(`${search}.json`);
            if (!response.ok) {
                throw new Error(`${response.status} - ${response.statusText}`);
            }
            return response.json();
        } catch (error) {
            console.error(`Fetch error: ${error.message}`);
        }
    }
   const pictureElements = document.querySelector('#picture');
    let activeIndex = 0;
    function updatePic(){
        

    }
    const searchInput =document.querySelector('#search');
    document.querySelector('#go').addEventListener('click', async () => {
        const pics = await loadPics(searchInput.value);


        pics.items.forEach(pic => {
            const url = pic.media.m;

           document.body.innerHTML +=  `<img src="${url}" alt="${pic.title}">`;
        })

    });


})();