let acceptLicense = false

document.querySelector('#theLink').addEventListener('click', e => {
    if (!acceptLicense) {
        e.preventDefault();
    }
    console.log("it was clicked");
    
})