window.addEventListener('resize', function() {
    var width = window.innerWidth;
    var btnGroup = document.querySelector('.btn-group');
    var imageContainer = document.querySelector('.image-container');
    var logo = document.querySelector('.image-container-top-right');
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        document.body.style.justifyContent = 'center';
        btnGroup.style.marginLeft = '0';
        btnGroup.style.transform = 'scale(1.8)';
        logo.style.right = '40px';
        logo.style.top = '40px';
        logo.style.transform = 'scale(1.5)';
        imageContainer.style.display = 'none';
    } else if (width <= 768) {
        document.body.style.alignItems = 'center';
        document.body.style.justifyContent = 'center';
        btnGroup.style.justifyContent = 'center';
        btnGroup.style.alignItems = 'center';
        imageContainer.style.display = 'none';
    } else {
        document.body.style.alignItems = '';
        document.body.style.justifyContent = '';
        btnGroup.style.justifyContent = '';
        btnGroup.style.alignItems = '';
        imageContainer.style.display = '';
    }
});

window.dispatchEvent(new Event('resize'));
