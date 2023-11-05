// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import simpleLightbox from 'simplelightbox';
// Change code below this line

console.log(galleryItems);

//створеня розмітки
const markup = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>`
  )
  .join('');

const list = document.querySelector('.gallery');
list.insertAdjacentHTML('beforeend', markup);

//додавання слухача
list.addEventListener('click', handleClick);

/*івент на клік: 
- відміняє дефолтну поведінку,
- витягує реф на картинку
- викликає створення модалки */
function handleClick(event) {
  event.preventDefault();
  if (event.target === event.currentTarget) {
    return;
  }
  const img = event.target.dataset.source;
  createInstance(img);
}

/* створення інстансу
- створює інстанс
- додає слухач клавіатури на відкриття модалки
- видаляє слухач клавіатури на закриття модалки
- закриває модалку при натисненні Esc
 */
function createInstance(img) {
  const instance = basicLightbox.create(
    `
          <img src="${img}" width="800" height="600">
      `,
    {
      onShow: instance => {
        document.addEventListener('keydown', handlePress);
      },
      onClose: instance => {
        document.removeEventListener('keydown', handlePress);
      },
    }
  );

  instance.show();
  function handlePress(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
}
