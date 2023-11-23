import {authors, genres} from "./data.js";

const dataSearchGenres = document.querySelector('[data-search-genres]');
const dataSearchAuthors = document.querySelector('[data-search-authors]');

/**
 * Creates an HTML element, sets its attributes and text content, appends child elements,
 * and appends the created element to parent.
 * Create a new HTML element of the specified type. Iterates over the key-value pairs in the attributes object and sets each attribute on the created element.
 * Sets the text content of the element if the text parameter is provided.
 * Checks if both 'data' and 'callback' are provided. If true, it iterates over each item in the 'data' array and calls the provided callback function with each item.
 * The resulting child elements are then appended to the main element.
 * Appends the created element to the specified parent element if a parent is provided and then returns created HTML element.
 * @param {string} type - The type of the DOM element to create
 * @param {Object} attributes - An object containing key-value pairs for attributes
 * @param {string} text - Optional text content for the element
 * @param {DocumentFragment} parent - Parent element to append the new element to
 * @param {Array} data - Optional array of data for iteration
 * @param {Function} callback - Optional callback function for each data item
 */
export function createAndAppendElement(type, attributes, text = '', parent, data = [], callback = null) {
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
 * Creates document fragment to hold genre options.
 * Uses the 'createAndAppendElement' function to create an 'option' element with the value 'any', displaying the text 'All Genres'.
 * This 'option' represents the choice to select 'all genres'. The option element is appended to the 'genresFragment'.
 * Iterates over the entries of the 'genres' object.
 * For each genre, it creates an 'option' element with the genre's ID as the value and the genre name as the text content.
 * Each 'option' element is appended to the 'genresFragment'.
 * Appends the populated 'genresFragment' to the element with the id 'dataSearchGenres' in the DOM.
 * @type {DocumentFragment}
 * param {String}
 */
export const genresFragment = document.createDocumentFragment();
createAndAppendElement('option', { value: 'any' }, 'All Genres', genresFragment);

Object.entries(genres).forEach(([id, name]) => {
    createAndAppendElement('option', { value: id }, name, genresFragment);
});

dataSearchGenres.appendChild(genresFragment);

/**
 * Dropdowns for authors are populated dynamically using a loop over the respective data structures (genres and authors).
 * Creates a document fragment for holding multiple DOM elements.
 * Uses the 'createAndAppendElement' function to create an 'option' element with the value 'any', displaying the text 'All Authors'.
 * This 'option' represents the choice to select 'all authors'. The 'option' element is appended to the 'authorsFragment'.
 * Iterates over the entries of the authors object (presumably an object mapping author IDs to author names).
 * For each author, it creates an 'option' element with the author's ID as the value and the author name as the text content.
 * Each 'option' element is appended to the 'authorsFragment'.
 * Appends the populated 'authorsFragment' to the element with the id 'dataSearchAuthors' in the DOM.
 * @type {DocumentFragment}
 */
export const authorsFragment = document.createDocumentFragment();
createAndAppendElement('option', { value: 'any' }, 'All Authors', authorsFragment);

Object.entries(authors).forEach(([id, name]) => {
    createAndAppendElement('option', { value: id }, name, authorsFragment);
});

dataSearchAuthors.appendChild(authorsFragment);
