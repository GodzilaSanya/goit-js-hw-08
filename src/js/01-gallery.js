// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import simpleLightbox from 'simplelightbox';
import { createMarkup } from './helpers/createMarkup';

//додованяя елементів в DOM
const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML('beforeend', createMarkup(galleryItems));

//ініціалізація
var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
