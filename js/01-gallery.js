import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

for (const image of galleryItems) {
  const listEl = `<div class="gallery__item">
    <a class="gallery__link" href=${image.original}>
      <img
       class="gallery__image"
       src=${image.preview}
        data-source=${image.original}
        alt=${image.description}
     />
    </a>
   </div>`;
  galleryEl.insertAdjacentHTML("beforeend", listEl);

  galleryEl.addEventListener("click", (event) => event.preventDefault());
}

galleryEl.addEventListener("click", (event) => {
  const instance = basicLightbox.create(
    `<img src=${event.target.dataset.source}>`
  );
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
});
