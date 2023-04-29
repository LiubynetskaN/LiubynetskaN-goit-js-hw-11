export { gallery };

const galleryEl = document.querySelector('.gallery');

function galleryEl(images) {
  const markup = images
    .map(image => {
      const { id, largeImageURL, webformatURL, tags, likes, views, comments, downloads } = image;
      return `
        <a class="gallery__link" href="${largeImageURL}">
          <div class="gallery-item" id="${id}">
            <img class="gallery-item__img" src="${webformatURL}" alt="${tags}" loading="lazy" />
            <div class="info">
              <p class="info-item"><b>Вподобайки</b>${likes}</p>
              <p class="info-item"><b>Проглядайки</b>${views}</p>
              <p class="info-item"><b>Балакалки</b>${comments}</p>
              <p class="info-item"><b>Поцупивки</b>${downloads}</p>
            </div>
          </div>
        </a>
      `;
    })
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
}