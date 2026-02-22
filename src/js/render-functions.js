import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader-spinner');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images
    .map(
      image => `
<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
    <img
      class="gallery-image"
      src="${image.webformatURL}"
      alt="${image.tags}"
    />
  </a>

  <div class="info">
    <p class="info-item">
      <span class="info-title">Likes</span>
      <span class="info-value">${image.likes}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Views</span>
      <span class="info-value">${image.views}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Comments</span>
      <span class="info-value">${image.comments}</span>
    </p>
    <p class="info-item">
      <span class="info-title">Downloads</span>
      <span class="info-value">${image.downloads}</span>
    </p>
  </div>
</li>
`
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}


export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMoreBtn.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMoreBtn.classList.add('hidden');
}