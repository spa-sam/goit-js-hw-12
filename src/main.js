'use strict';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const options = {
  base: 'https://pixabay.com/api/',
  key: '41493530-c71176b83a18405cd33ba2537',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

const params = new URLSearchParams(options);
const BASE_URL = `${options.base}?${params}`;

function createInfoBlock(title, value) {
  return `
    <div class="info-block">
      <p>${title}</p>
      <p>${value}</p>
    </div>
  `;
}

function createImageCardMarkup({
  largeImageURL,
  webformatURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <a href="${largeImageURL}" class="lightbox-image linkStyle">
      <div class="image-card cardStyle">
        <img src="${webformatURL}" alt="${tags}" class="imgStyle" />
        <div class="infoStyle">
          ${createInfoBlock('Likes', likes)}
          ${createInfoBlock('Views', views)}
          ${createInfoBlock('Comments', comments)}
          ${createInfoBlock('Downloads', downloads)}
        </div>
      </div>
    </a>
  `;
}
const lightbox = new SimpleLightbox('.lightbox-image', {
  captionsData: 'alt',
  captionDelay: 250,
});

function createGalleryElement(parentElement) {
  const gallery = document.createElement('div');
  gallery.className = 'gallery custom-gallery-style';
  parentElement.appendChild(gallery);
  return gallery;
}

const container = document.querySelector('.container');
const toastOptions = {
  title: '',
  message:
    'Sorry, there are no images matching<br> your search query. Please try again!',
  position: 'topRight',
  backgroundColor: '#EF4040',
  messageColor: '#FAFAFB',
  theme: 'dark',
  messageSize: '322px',
};

document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const gallery =
    document.querySelector('.gallery') || createGalleryElement(container);
  gallery.innerHTML = '';
  const loader = document.querySelector('.loader');
  loader.style.display = 'block';
  const searchQuery = document.querySelector('input').value;
  params.set('q', searchQuery);

  fetch(`${BASE_URL}?${params.toString()}`)
    .then(response => response.json())
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning(toastOptions);
      } else {
        data.hits.forEach(image => {
          const markup = createImageCardMarkup(image);
          gallery.insertAdjacentHTML('beforeend', markup);
        });
      }
      document.querySelector('form').reset();
      lightbox.refresh();
      loader.style.display = 'none';
    })
    .catch(error => {
      console.error('Error:', error);
      loader.style.display = 'none';
      iziToast.error({
        ...toastOptions,
        message: 'An error occurred. Please try again later.',
      });
    });
});
