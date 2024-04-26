window.addEventListener('resize', function() {
    var width = window.innerWidth;
    if (width <= 768 || /Mobi|Android/i.test(navigator.userAgent)) {
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        var btnGroup = document.querySelector('.btn-group');
        btnGroup.style.justifyContent = 'center';
        btnGroup.style.alignItems = 'center';
        var imageContainer = document.querySelector('.image-container');
        imageContainer.style.display = 'none';
    } else { //test
        document.body.style.alignItems = '';
        document.body.style.justifyContent = '';
        var btnGroup = document.querySelector('.btn-group');
        btnGroup.style.justifyContent = '';
        btnGroup.style.alignItems = '';
        var imageContainer = document.querySelector('.image-container');
        imageContainer.style.display = '';
    }
});

window.dispatchEvent(new Event('resize'));