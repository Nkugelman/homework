(function(){
'use strict';
const loadButn = $('#load')
const fileInput = $('#file');

loadButn.click(async() =>{
    const fileData = $('#file').val();

    $('#loading').show();
    $('#content').empty();
    $('#error').empty();

    try{
        await new Promise(resolve => setTimeout(resolve, 2000));
        const response = await fetch(fileData);
        if(! response.ok){
            throw new Error (`${response.status }- ${response.statusText}`);
        }
        const data = await response.text();
        $('#content').text(data);
    

    }
    catch(e){
     $('#error').text(e.message)
        
    }
    finally{
        $('#loading').hide();
    }


})



}());