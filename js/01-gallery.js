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

  galleryEl.querySelector(".gallery__link").onclick = () => {
    const instance = basicLightbox.create(`<img src=${image.original}>`);
    instance.show();
  };
}

// for (let i = 0; i < galleryItems.length; i++) {
//   const listEl = `<div class="gallery__item">
//     <a class="gallery__link" href=${galleryItems[i].original}>
//       <img
//        class="gallery__image"
//        src=${galleryItems[i].preview}
//         data-source=${galleryItems[i].original}
//         alt=${galleryItems[i].description}
//      />
//     </a>
//    </div>`;
//   galleryEl.insertAdjacentHTML("beforeend", listEl);

//   galleryEl.addEventListener("click", (event) => event.preventDefault());

//   galleryEl.querySelector(".gallery__link").onclick = () => {
//     const instance = basicLightbox.create(
//       `<img src=${galleryItems[i].original}>`
//     );
//     instance.show();
//   };
// }

// document.addEventListener("keydown", (event) => {
//   if (event.key === "Escape") {
//     instance.close();
//   }
// });
