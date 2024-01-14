'use strict';

import axios from 'axios';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// опції для пошуку
const options = {
  base: 'https://pixabay.com/api/',
  key: '41493530-c71176b83a18405cd33ba2537',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
};

let page = 1;
const perPage = 40;

// створюємо параметри для пошуку
const params = new URLSearchParams(options);
const BASE_URL = options.base;

params.set('page', page);
params.set('per_page', perPage);

// створюємо розмітку для інформації про картинку
function createInfoBlock(title, value) {
  return `
    <div class="info-block">
      <p>${title}</p>
      <p>${value}</p>
    </div>
  `;
}

// створюємо розмітку для картинки
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

// створюємо галерею
function createGalleryElement(parentElement) {
  const gallery = document.createElement('div');
  gallery.className = 'gallery custom-gallery-style';
  parentElement.appendChild(gallery);
  return gallery;
}

const container = document.querySelector('.container');
// опції для повідомлень
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

// створюємо елементи
const gallery =
  document.querySelector('.gallery') || createGalleryElement(container);
const form = document.querySelector('form');
const input = document.querySelector('input');

const loader = document.createElement('div');
loader.classList.add('loader-text');
loader.style.display = 'none';
loader.textContent = 'Loading images, please wait...';

// Створюємо кнопку "Load more"
let loadMoreBtn = document.querySelector('.load-more-btn');
if (!loadMoreBtn) {
  loadMoreBtn = document.createElement('button');
  loadMoreBtn.classList.add('load-more-btn');
  loadMoreBtn.textContent = 'Load more';
  loadMoreBtn.style.display = 'none';
}
// Створюємо контейнер для кнопки і загрузчика
const btnLoaderContainer = document.createElement('div');
btnLoaderContainer.classList.add('btn-loader-container');
btnLoaderContainer.appendChild(loadMoreBtn);
btnLoaderContainer.appendChild(loader);
form.insertAdjacentElement('afterend', btnLoaderContainer);

let totalHits = 0; // загальна кількість картинок
let requestCount = 0; // лічильник запитів

// функція для отримання даних
async function fetchData() {
  try {
    loader.style.display = 'block';
    const response = await axios.get(`${BASE_URL}?${params}`);
    const data = response.data;
    totalHits = data.totalHits; // зберігаємо totalHits
    if (data.hits.length === 0) {
      iziToast.warning(toastOptions);
    } else {
      loadMoreBtn.style.display = 'block';
      data.hits.forEach(image => {
        const markup = createImageCardMarkup(image);
        gallery.insertAdjacentHTML('beforeend', markup);
      });
      // переносимо  контейнер з кнопкою і загрузчиком в кінець галереї
      gallery.insertAdjacentElement('afterend', btnLoaderContainer);
    }

    lightbox.refresh();
    loader.style.display = 'none';

    requestCount++;

    // Отримуємо першу карточку галереї
    const card = document.querySelector('.image-card');
    if (card && requestCount > 1) {
      // якщо карточка і запитів більше одного
      // Отримуємо висоту карточки
      const cardHeight = card.getBoundingClientRect().height;
      // Прокручуємо сторінку на дві висоти карточки
      window.scrollBy({
        top: cardHeight * 2,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.error('Error:', error);
    loader.style.display = 'none';
    iziToast.error({
      ...toastOptions,
      message: 'An error occurred. Please try again later.',
    });
  }
}

//  пошук по формі
form.addEventListener('submit', function (event) {
  event.preventDefault();
  gallery.innerHTML = '';
  loader.style.display = 'block';
  loadMoreBtn.style.display = 'none';
  params.set('page', 1);
  const searchQuery = input.value.trim();
  if (!searchQuery) {
    loader.style.display = 'none';
    iziToast.warning({
      ...toastOptions,
      message: 'Please enter your search query!',
    });
    return;
  }
  form.reset();
  params.set('q', searchQuery);
  setTimeout(fetchData, 2000); // для демо завантаження
});

// Кнопка "Load more"
loadMoreBtn.addEventListener('click', function () {
  loadMoreBtn.style.display = 'none';
  loader.style.display = 'block';
  page++;
  params.set('page', page);
  setTimeout(fetchData, 2000); // для демо завантаження
  if (page * perPage >= totalHits) {
    loadMoreBtn.style.display = 'none';
    loader.style.display = 'none';
    iziToast.warning({
      ...toastOptions,
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
});
