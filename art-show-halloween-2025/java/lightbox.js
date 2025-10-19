let lightboxContainer = document.getElementById('lightboxContainer');
let lightbox = document.getElementById('lightbox');

let galleryImages = document.getElementsByClassName('galleryImage');

for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = function() {
        lightboxContainer.classList.add('display');
        lightbox.src = this.src;
        lightbox.alt = this.alt;
    }
}

let closers = document.getElementsByClassName('closer');

for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = function() {
        lightboxContainer.classList.remove('display');
        lightbox.src = "";
        lightbox.alt = "";
    }

    let galleryVideos = document.getElementsByClassName('galleryVideo');
}

for (let i = 0; i < galleryVideos.length; i++) {
    let galleryVideo = galleryVideos[i];
    galleryVideo.onclick = function() {
        lightboxContainer.classList.add('display');
        lightbox.src = this.src;
        lightbox.alt = this.alt;
    }
}