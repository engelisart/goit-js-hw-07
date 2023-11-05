import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

galleryItems.forEach((galleryItem) => {
  let item = `<li class="gallery__item">
    <a class="gallery__link" href="${galleryItem.original}">
      <img
        class="gallery__image"
        src="${galleryItem.preview}"
        data-source="${galleryItem.original}"
        alt="${galleryItem.description}"
      />
    </a>
  </li>`;

  gallery.innerHTML += item;
});

gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
  event.preventDefault();
  const imgUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
	<img src = "${imgUrl}" />
`);

  instance.show();
  console.log(imgUrl);

}
