import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryCollection = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryCollection.insertAdjacentHTML("beforeend", galleryMarkup);

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
function createGalleryMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join("");
}
