

import { galleryItems } from './gallery-items.js';
// Change code below this line

const imgCollection = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `
    <li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt=${description}
     
    />
  </a>
</li>
`).join('');

imgCollection.insertAdjacentHTML("beforeend", markup);

imgCollection.addEventListener('click', onOpenBigPic);

function onOpenBigPic(evt) {
   
    evt.preventDefault();
    
    if (evt.target.tagName !== "IMG") return;
    //console.dir(evt.target);
    console.log(evt.target.dataset.source);

    const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} />      
    
`)

instance.show()
}   


