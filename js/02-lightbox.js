import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgCollection = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => `

<li class="gallery__item">
   <a class="gallery__link" href=${original}>
      <img class="gallery__image"
      src=${preview}
      alt=${description}
        />
     </a>
</li>

`).join('');

imgCollection.insertAdjacentHTML("beforeend", markup);

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionsDelay: 250
});