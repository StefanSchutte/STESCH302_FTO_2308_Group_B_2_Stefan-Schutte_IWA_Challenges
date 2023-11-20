import {BOOKS_PER_PAGE, books, genres, authors } from "./data.js";

/**
 * My query selectors for html elements. UI parts such as buttons, overlays, search fields... Used to manipulate the DOM later in the code.
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
const dataHeaderSettings = document.querySelector('[data-header-settings]');
const headerLogo = document.querySelector('.header__logo');

/**
 * Navigate back to main page
 */
headerLogo.addEventListener('click',()=>{
    const mainPageUrl = 'http://localhost:63342/STESCH302_FTO_2308_Group_B_2_Stefan-Schutte_IWA_Challenges/IWA_Capstone_practice/index.html?_ijt=6br4845jkvkd5btlo38k12kb2f';

    window.location.href = mainPageUrl;
})
/**
 * Initializes variables, page and range, and performs error checking to ensure that the required data is available.
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

/**
 * Function responsible for applying user settings to your application.
 * @param userSettings
 */
function applyUserSettings (userSettings) {

    const theme = userSettings.theme;
    document.documentElement.style.setProperty('--color-dark', theme === 'night' ? night.dark : day.dark);
    document.documentElement.style.setProperty('--color-light', theme === 'night' ? night.light : day.light);
}
/**
 * preview - A function createPreview is defined to generate HTML elements representing book previews.
 * It then creates a document fragment and populates it with book previews using a loop over the first 36 books from the books array.
 * These previews are then  appended to the fragment to the dataListItems element in the DOM.
 * @type {DocumentFragment}
 */
function createPreview(book) {
    const { author, image, title, id, description, published } = book;

    const previewElement = document.createElement('button');
    previewElement.classList.add('preview');
    previewElement.setAttribute('data-preview', id);

    previewElement.innerHTML = /* html */ `
        <img class="preview__image" src="${image}" >
        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

    return previewElement;
}

/**
 * Actions.submit gathers user settings from the dataSettingsTheme element.
 * It creates a userSettings object, collecting the theme.
 * Calls the applyUserSettings function, passing the userSettings object as an argument.
 * List.updateRemaining calculates the number of remaining items in the matches array based on the current page and the number of items per page.
 * updates the text and disabled state of the "Show more" button (dataListButton) based on the calculated number of remaining items.
 * The button's text is set to display the remaining items count, or 0 if there are no remaining items.
 * The button is disabled if there are no remaining items, meaning there are no more items to show.
 * @type {{settings: {submit: actions.settings.submit}, list: {updateRemaining: actions.list.updateRemaining}}}
 */
const actions = {
    settings: {
        submit: function () {
            const userSettings = {
                theme: dataSettingsTheme.value,
            };
            applyUserSettings(userSettings);
        }
    },
    list: {
        updateRemaining: function () {
            const remainingItems = matches.length - page * BOOKS_PER_PAGE;
            dataListButton.value = `Show more (${remainingItems > 0 ? remainingItems : 0})`;
            dataListButton.disabled = !(remainingItems > 0);
        }
    }
};

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
dataSearchCancel.addEventListener('click', () => {
    if (!dataSearchOverlay.open) return;
    dataSearchOverlay.open = false
    dataSearchTitle.value = '';
});

/**
 * Button for settings.
 * Checks whether overlay is currently open. If open it returns.
 * If overlay is not open - overlay is displayed.
 * If it's not open (!dataListClose.open evaluates to true), sets the property of dataListClose to true for closing overlay.
 */
dataHeaderSettings.addEventListener('click', ()=> {
    if (dataSettingsOverlay.open) return;

    dataSettingsOverlay.open = true;

    if (!dataListClose.open) {
        dataListClose.open = true;}
});

/**
 * Checks whether the settings overlay is not open. If the overlay is not open, the function immediately returns.
 * If the settings overlay is open, sets dataSettingsOverlay to false, indicating that the settings overlay should be closed.
 */
dataSettingsCancel.addEventListener('click', () => {
    if (!(dataSettingsOverlay).open) return;
    dataSettingsOverlay.open = false});

/**
 *  Gathering user settings from the form and applying it. Closes the settings overlay.
 */
dataSettingsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    actions.settings.submit();
    dataSettingsOverlay.open = false;
});

/**
 * Checks if the dataListActive element is currently open. If it is, it closes or hides the active element by setting its open property to false.
 */
dataListClose.addEventListener('click', () => {
    if (!dataListActive.open) return;

    dataListActive.open = false;
});

dataListButton.addEventListener('click', () => {
    const newPage = page + 1;
    const startIndex = page * BOOKS_PER_PAGE;
    const endIndex = newPage * BOOKS_PER_PAGE;
    //const previewsFragment = createPreview(matches, startIndex, endIndex);

    // Ensure endIndex does not exceed the total number of books
    const actualEndIndex = Math.min(endIndex, matches.length);

    const previewsFragment = document.createDocumentFragment();

    for (let i = startIndex; i < actualEndIndex; i++) {
        const book = matches[i];
        const preview = createPreview(book);
        previewsFragment.appendChild(preview);
    }

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

    dataSearchTitle.value = '';
    if (dataSearchOverlay.open) {
        dataSearchOverlay.open = false;
    }

    if (dataListClose.open) {
        dataListClose.open = false;
    }

    dataListButton.disabled = true;

    if (dataListItems.length < 1) {
        dataListMessage.add('list__message_show')
    } else {
        dataListMessage.remove('list__message_show')
    }

    dataListItems.innerHTML = '';

    const extracted = result.slice(range[0], range[1]);

    for (const {author, image, title, id, description, published} of extracted) {
        const element = document.createElement('button');
        element.classList = 'preview';
        element.setAttribute('data-preview', id);

        element.innerHTML = /* html */ `
        <img
            class="preview__image"
            src="${image}"
        >

        <div class="preview__info">
            <h3 class="preview__title">${title}</h3>
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;

        fragment.appendChild(element);
    }

    dataListItems.appendChild(fragment);
});

/**
 * Preview.
 * Callback function. Uses the closest method to find the closest ancestor of the clicked element (given by event.target) that has the class preview.
 * This is done to check if the clicked element or any of its ancestors have the preview class.
 * If clicked element or any of its ancestors did not have the class preview, the function exits.
 * Extracts the data-preview attribute from the clicked preview, which should correspond to the id of the book.
 * Then, it uses Array.find to find the book in the books array that matches the extracted id.
 * If no matching book found, return.
 * If the book is found (active is truthy), it updates the UI with information from the clicked book.
 * @ngdoc method
 */
    dataListItems.addEventListener('click', (event) => {
        const clickedPreview = event.target.closest('.preview');

        if (!clickedPreview) {
            return;
        }

        const previewId = clickedPreview.dataset.preview;
        const active = books.find((book) => book.id === previewId);

        if (!active) return;

        dataListActive.open = true;
        dataListBlur.src = active.image;
        dataListTitle.innerText = active.title;
        dataListSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        dataListDescription.innerText = active.description;

});