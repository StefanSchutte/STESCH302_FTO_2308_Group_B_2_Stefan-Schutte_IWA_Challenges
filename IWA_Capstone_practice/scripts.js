//import { data } from "./data.js"
import {BOOKS_PER_PAGE, books, genres, authors } from "./data.js";

/**
 * My query selectors for html elements. UI parts such as buttons, overlays, search fields...
 * @type {Element}
 */
const dataListItems = document.querySelector('[data-list-items]');
const dataListButton = document.querySelector('[data-list-button]');
const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');
const dataListMessage = document.querySelector('[data-list-message]');
const dataListOverlay = document.querySelector('[data-list-overlay]');
const dataListActive = document.querySelector('[data-list-active]');
const dataListBlur = document.querySelector('[data-list-blur]');
const dataListTitle = document.querySelector('[data-list-title]');
const dataListSubtitle = document.querySelector('[data-list-subtitle]');
const dataListDescription = document.querySelector('[data-list-description]');
const dataSearchOverlay = document.querySelector('[data-search-overlay]');
const dataSearchTitle = document.querySelector('[data-search-title]');
const dataSearchForm = document.querySelector('[data-search-form]');
const dataSettingsOverlay = document.querySelector('[data-settings-overlay]');
const dataSettingsForm = document.querySelector('[data-settings-form]');
const dataHeaderSearch = document.querySelector('[data-header-search]');
const dataSettingsTheme = document.querySelector('[data-settings-theme]');
const dataSettingsCancel = document.querySelector('[data-settings-cancel]');
const dataSearchCancel = document.querySelector('[data-search-cancel]');
const dataListClose = document.querySelector('[data-list-close]');

/**
 * ek het geen idea
 * @type {[{image: string, pages: number, genres: string[], author: string, popularity: number, description: string, id: string, published: string, title: string},{image: string, pages: number, genres: string[], author: string, popularity: number, description: string, id: string, published: string, title: string},{image: string, pages: number, genres, author: string, popularity: number, description: string, id: string, published: string, title: string},{image: string, pages: number, genres, author: string, popularity: number, description: string, id: string, published: string, title: string},{image: string, pages: number, genres, author: string, popularity: number, description: string, id: string, published: string, title: string},null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]}
 */
const matches = books
let page = 1;
const range = [0, 10];
if (!books || !Array.isArray(books)) throw new Error('Source required')
if (!range || range.length < 2) throw new Error('Range must be an array with two numbers')

/**
 * themes -  sets up themes for light and dark modes based on the user's system preference (prefers-color-scheme).
 * The chosen theme is then applied to the document's root element.
 * @type {{light: string, dark: string}}
 */
const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}

const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

const theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day';

document.documentElement.style.setProperty('--color-dark', theme === 'night' ? night.dark: day.dark);
document.documentElement.style.setProperty('--color-light',theme === 'night' ? night.light : day.light);

/**
 * preview - A function createPreview is defined to generate HTML elements representing book previews.
 * These previews are then appended to a document fragment.
 * @type {DocumentFragment}
 */
function createPreview(book) {
    const { author, image, title, id, description, published } = book;

    const previewElement = document.createElement('button');
    previewElement.classList.add('preview');
    previewElement.setAttribute('data-preview', id);

    previewElement.innerHTML = /* html */ `
        <img class="preview__image" src="${image}" />
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${author}</div>
            <p class="preview__description">${description}</p>
            <div class="preview__date">${new Date(published).toLocaleDateString()}</div>
        </div>
    `;

    return previewElement;
}

const fragment = document.createDocumentFragment();
const extractedPreview = books.slice(0, 36);

for (const book of extractedPreview) {
    const preview = createPreview(book);
    fragment.appendChild(preview);
}

dataListItems.appendChild(fragment);

/**
 * Helper function to create and append elements to the DOM
 * @param {string} type - The type of the DOM element to create
 * @param {Object} attributes - An object containing key-value pairs for attributes
 * @param {string} text - Optional text content for the element
 * @param {HTMLElement} parent - Parent element to append the new element to
 * @param {Array} data - Optional array of data for iteration
 * @param {Function} callback - Optional callback function for each data item
 */
function createAndAppendElement(type, attributes, text = '', parent, data = [], callback = null) {
    const element = document.createElement(type);
    for (const [key, value] of Object.entries(attributes)) {
        element[key] = value;
    }
    if (text) element.innerText = text;

    if (data.length && callback) {
        data.forEach(item => {
            const childElement = callback(item);
            element.appendChild(childElement);
        });
    }

    if (parent) parent.appendChild(element);
    return element;
}

/**
 * Dropdowns for genres are populated dynamically using a loop over the respective data structures (genres and authors).
 * The options are added to document fragments and appended to the corresponding HTML elements.
 * @type {DocumentFragment}
 */
const genresFragment = document.createDocumentFragment();
createAndAppendElement('option', { value: 'any' }, 'All Genres', genresFragment);

Object.entries(genres).forEach(([id, name]) => {
    createAndAppendElement('option', { value: id }, name, genresFragment);
});

dataSearchGenres.appendChild(genresFragment);

/**
 * Dropdowns for authors are populated dynamically using a loop over the respective data structures (genres and authors).
 * The options are added to document fragments and appended to the corresponding HTML elements.
 * @type {DocumentFragment}
 */
const authorsFragment = document.createDocumentFragment();
createAndAppendElement('option', { value: 'any' }, 'All Authors', authorsFragment);

Object.entries(authors).forEach(([id, name]) => {
    createAndAppendElement('option', { value: id }, name, authorsFragment);
});

dataSearchAuthors.appendChild(authorsFragment);


/**
 * The "Show more" button is configured based on the number of remaining items to display.
 * When clicked, it adds more book previews to the list.
 * @type {string}
 */
dataListButton.value = `Show more (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})`;

dataListButton.disabled = !(matches.length - page * BOOKS_PER_PAGE > 0);

dataListButton.innerHTML = /* html */
    `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})</span>`

/**
 * Event listeners are attached to various elements, such as the search and settings buttons, cancel buttons, and the "Show more" button.
 * These listeners handle actions like opening/closing overlays, submitting search/settings forms, and displaying more book previews.
 */
dataSearchCancel.addEventListener('click', () => {if (!dataSearchOverlay.open) return; dataSearchOverlay.open = false});
dataSettingsCancel.addEventListener('click', () => {if (!(dataSettingsOverlay).open) return; dataSettingsOverlay.open = false});
dataSettingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    actions.settings.submit();
    dataSettingsOverlay.open = false;
});
dataListClose.addEventListener('click', () => {
    if (!dataListActive.open) return;

    dataListActive.open = false;
});

dataListButton.addEventListener('click', () => {
    const newPage = page + 1;
    const startIndex = page * BOOKS_PER_PAGE;
    const endIndex = newPage * BOOKS_PER_PAGE;
    const previewsFragment = createPreview(matches, startIndex, endIndex);

    dataListItems.appendChild(previewsFragment);

    actions.list.updateRemaining();
    page = newPage;
});

dataHeaderSearch.addEventListener('click', () => {
    if (dataSearchOverlay.open) return;
    dataSearchOverlay.open = true;
    dataSearchTitle.focus();
});

/**
 * Search Functionality:
 * When the search form is submitted, it filters the book data based on the entered criteria (title, author, genre).
 * The filtered results are then displayed in the UI, and a detailed view is shown for the selected book when clicked.
 */
dataSearchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const filters = Object.fromEntries(formData);
    const result = [];

    for (const book of matches) {
        const titleMatch = filters.title.trim() === '' || book.title.toLowerCase().includes(filters.title.toLowerCase());
        const authorMatch = filters.author === 'any' || book.author === filters.author;
        const genreMatch = filters.genre === 'any' || book.genres.includes(filters.genre);

        if (titleMatch && authorMatch && genreMatch) {
            result.push(book);
        }
    }


if (dataListItems.length < 1){
    dataListMessage.add('list__message_show')
} else {
    dataListMessage.remove('list__message_show')
}

    dataListItems.innerHTML = '';

    const extracted = result.slice(range[0], range[1]);

    for (const { author, image, title, id, description, published } of extracted) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);

        element.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        />
        
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
            <p class="preview__description">${description}</p>
            <div class="preview__date">${new Date(published).toLocaleDateString()}</div>
        </div>
    `;

        fragment.appendChild(element);
    }

    dataListItems.appendChild(fragment);

    dataListItems.addEventListener('click', (event) => {
        const pathArray = Array.from(event.path || event.composedPath());
        let active = null;

        for (const node of pathArray) {
            if (active) break;
            const previewId = node?.dataset?.preview;

            for (const singleBook of books) {
                if (singleBook.id === previewId) active = singleBook;
            }
        }

        if (!active) return;

        dataListActive.open = true;
        dataListBlur.src = active.image;
        dataListTitle.innerText = active.title;

        // Assuming data.authors is a valid data structure
        dataListSubtitle.innerText = `${data.authors[active.author]} (${new Date(active.published).getFullYear()})`;
        dataListDescription.innerText = active.description;
    });

});