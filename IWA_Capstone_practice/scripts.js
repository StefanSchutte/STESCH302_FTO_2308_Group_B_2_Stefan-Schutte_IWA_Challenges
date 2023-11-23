import {BOOKS_PER_PAGE, books, genres, authors } from "./data.js";
import {applyUserSettings} from "./theme.js";

/**
 * My query selectors for html elements. UI parts such as buttons, overlays, search fields... Used to manipulate the DOM later in the code.
 * @type {Element}
 */
const dataListItems = document.querySelector('[data-list-items]');
const dataListButton = document.querySelector('[data-list-button]');
// const dataSearchGenres = document.querySelector('[data-search-genres]');
// const dataSearchAuthors = document.querySelector('[data-search-authors]');
const dataListMessage = document.querySelector('[data-list-message]');
const dataListImage = document.querySelector('[data-list-image]');
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
    window.location.href = 'http://localhost:63342/STESCH302_FTO_2308_Group_B_2_Stefan-Schutte_IWA_Challenges/IWA_Capstone_practice/index.html?_ijt=6br4845jkvkd5btlo38k12kb2f';
})

/**
 * Initializes variables, page and range, and performs error checking to ensure that the required data is available.
 * Basic error checking to ensure that the required data is available and ensures that the books variable exists and is an array.
 * Assigns books to matches, page is initialized to 1, and range is set.
 * And secondly ensures that the range variable exists and has a length of at least 2.
 * @type {[{image: string, pages: number, genres: string[], author: string, popularity: number, description: string, id: string, published: string, title: string}
 */
const matches = books
let page = 1;
const range = [0, 10];
if (!books || !Array.isArray(books)) throw new Error('Source required')
if (!range || range.length < 2) throw new Error('Range must be an array with two numbers')

//functions

/**
 * A function createPreview is defined to generate HTML elements representing book previews.
 * Uses object destructuring to extract properties.
 * Button is created to preview a book. Sets innerHTML of button.
 * The authors object is used to dynamically display the author's name.
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
            <div class="preview__author">${authors[author]}</div>
        </div>
    `;
    return previewElement;
}

/**
 * Actions.submit gathers user settings from the dataSettingsTheme element.
 * It creates a userSettings object, with property 'theme' and value is obtained from 'dataSettingsTheme's value. It collects the theme.
 * Calls the applyUserSettings function, passing the userSettings object as an argument, to update theme.
 * Gathers user settings from the theme and applies them using the applyUserSettings function.
 * List.updateRemaining calculates the number of remaining items in the matches array based on the current page and the number of items per page.
 * Updates the text and disabled state of the "Show more" button (dataListButton) based on the calculated number of remaining items.
 * The button's text is set to display the remaining items count, or 0 if there are no remaining items.
 * The button is disabled if there are no remaining items, meaning there are no more items to show.
 * It calls a function 'updateRemainingCount' with the 'remainingItems' value.
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
            updateRemainingCount(remainingItems);
            console.log(remainingItems);
            //seperate
            //update again
        }
    }
};

/**
 * Updates the display of remaining count of items in list.
 * Function finds element with class property and updates innerText of element.
 * @param count - number of remaining items to be displayed, then incorporated into the text content of the element, indicating the remaining count of items.
 */
function updateRemainingCount(count) {
    const remainingCountElement = document.querySelector('.list__remaining');
    remainingCountElement.innerText = ` (${count})`;
}

/**
 * Creates document fragment and populates it with book previews before appending fragment an element in the DOM.
 * Extracts and creates shallow copy of  first 36 books from array using slice method.
 * Then iterates over each book in 'extractedPreview'. Then calls the 'createPreview function, passing current book as an argument.
 * Generates preview element for each book, which is then appended to document fragment.
 * The document fragment, containing all the book previews, is appended to the 'dataListItems' element in the DOM.
 * @type {DocumentFragment}
 */
const fragment = document.createDocumentFragment();
const extractedPreview = books.slice(0, 36);

for (const book of extractedPreview) {
    const preview = createPreview(book);

    fragment.appendChild(preview);
}
dataListItems.appendChild(fragment);

/**
 * The "Show more" button is configured based on the number of remaining items to display.
 * When clicked, it adds more book previews to the list.
 * Sets the 'value' property of 'dataListButton' to a string that includes "Show more" and the count of remaining items based on the current page and the number of books per page.
 * If there are no remaining items, it sets the count to 0.
 * Sets the 'disabled' property of 'dataListButton' to true if there are no remaining items, meaning there are no more books to show. Otherwise, it sets it to false.
 * Sets the 'innerHTML' property of 'dataListButton' to an HTML string.
 * @type {string}
 */
dataListButton.value = `Show more (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})`;

dataListButton.disabled = !(matches.length - page * BOOKS_PER_PAGE > 0);

dataListButton.innerHTML = /* html */
    `
    <span>Show more</span>
    <span class="list__remaining"> (${matches.length - page * BOOKS_PER_PAGE > 0 ? matches.length - page * BOOKS_PER_PAGE : 0})</span>`


//Event listeners are attached to various elements, such as the search and settings buttons, cancel buttons, and the "Show more" button.
//These listeners handle actions like opening/closing overlays, submitting search/settings forms, and displaying more book previews.

/**
 * When the 'dataSearchCancel' element is clicked, check if 'open' property of 'dataSearchOverlay is falsy. If not, returns.
 * Sets 'open' property of 'dataSearchOverlay' to 'false' to close overlay.
 * Clears the content of an input field.
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
 * If the settings overlay is open, sets 'dataSettingsOverlay' to false, indicating that the settings overlay should be closed.
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

/**
 * Increments 'page' var, representing next page to be loaded.
 * Calculates the starting index of the books to be displayed on the current page.
 * Calculates the ending index of the books to be displayed on the next page.
 * Ensures that actualEndIndex does not exceed the total number of books in the matches array.
 * Creates a document fragment to hold the book previews before appending them to the DOM.
 * Loops through the books in the specified range and creates a preview for each book. These previews are then appended to the 'previewsFragment'.
 * Appends the created previews to the 'dataListItems' element in the DOM.
 * Updates the page variable to the new page, indicating that the next page should be loaded next time the button is clicked.
 * Calls the updateRemaining function to recalculate and update the remaining items count and the state of the "Show more" button based on the current page and the number of items per page.
 *
 */
dataListButton.addEventListener('click', () => {
    const newPage = page + 1;
    const startIndex = page * BOOKS_PER_PAGE;
    const endIndex = newPage * BOOKS_PER_PAGE;

    const actualEndIndex = Math.min(endIndex, matches.length);

    const previewsFragment = document.createDocumentFragment();

    for (let i = startIndex; i < actualEndIndex; i++) {
        const book = matches[i];
        const preview = createPreview(book);
        previewsFragment.appendChild(preview);
    }

    dataListItems.appendChild(previewsFragment);

    page = newPage;
    actions.list.updateRemaining()
});

/**
 * Checks if 'dataSearchOverlay' is open, if open, returns.
 * Else sets 'open' property to 'true', displaying overlay.
 * @param {string} dataSearchOverlay
 */
dataHeaderSearch.addEventListener('click', () => {

    if (dataSearchOverlay.open) return;
    dataSearchOverlay.open = true;
    dataSearchTitle.focus();
});

/**
 * Search Functionality:
 * When the search form is submitted, it filters the book data based on the entered criteria (title, author, genre).
 * The filtered results are then displayed in the UI, and a detailed view is shown for the selected book when clicked.
 * Form data is extracted and filters are applied to the list of books.
 * Clear search input and closes overlay if open.
 * Disable "Show more" button and display a message if no results.
 * Clear and populate the data list with search results.
 * Scrolls to the top of the data list.
 * Update the "Show more" button based on the remaining items.
 * Store the search results in a variable for future reference.
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

    if (result.length === 0) {
        dataListMessage.classList.add('list__message_show');
    } else {
        dataListMessage.classList.remove('list__message_show');
    }

    dataListItems.innerHTML = '';

    const startIndex = 0;
    const endIndex = Math.min(result.length, startIndex + BOOKS_PER_PAGE);

    const previewsFragment = document.createDocumentFragment();

    for (let i = startIndex; i < endIndex; i++) {
        const book = result[i];
        const preview = createPreview(book);
        previewsFragment.appendChild(preview);
    }
    dataListItems.scrollTop = 0;
    dataListItems.appendChild(previewsFragment);

    const remainingItems = result.length - endIndex;
    dataListButton.value = `Show more (${remainingItems > 0 ? remainingItems : 0})`;
    dataListButton.disabled = !(remainingItems > 0);

    const remainingCountElement = document.querySelector('.list__remaining');
    remainingCountElement.innerText = ` (${remainingItems})`;
//end the search

});

/**
 * Uses event delegation to determine if a click occurred on an element with the class 'preview' or its descendant. This is achieved using the closest method.
 * This is done to check if the clicked element or any of its ancestors have the preview class.
 * If clicked element or any of its ancestors did not have the class preview, the function exits.
 * Extracts the 'data-preview' attribute value from the clicked preview, which should correspond to the id of the book.
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
        dataListImage.src = active.image
        dataListTitle.innerText = active.title;
        dataListSubtitle.innerText = `${authors[active.author]} (${new Date(active.published).getFullYear()})`;
        dataListDescription.innerText = active.description;
});