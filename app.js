/* Imports */
import { getItems, signOutUser, createItem, completeItem } from './fetch-utils.js';
import { renderItem } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

/* Get DOM Elements */
const listFormEl = document.querySelector('.list-form');
const deleteButtonEl = document.querySelector('.delete-button');
const itemsEl = document.querySelector('.items');
const logoutButtonEl = document.getElementById('sign-out-link');

/* State */
let itemsArray = [];

/* Events */
// window.addEventListener('load', async () => {

// });

listFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = FormData(listFormEl);

    const newItem = data.get('item', 'quantity');
    await createItem();

    displayItems();
});

// deleteButtonEl.addEventListener('click', async () => {

// });

// logoutButtonEl.addEventListener('click', () => {
//     signOutUser();
// });
/* Display Functions */
async function displayItems(){
    itemsEl.textContent = '';

    const items = await getItems();
    itemsArray = items;

    for (let item of itemsArray) {
        const itemsAdded = renderItem(item);

        itemsAdded.addEventListener('click', async () => {
            // await completeItem(arguement?????)
            displayItems();
        });
    }
    //loop through items
    // for each todo, render a new todo DOM element using your render function
        // then add an event listener to each todo
            // on click, update the todo in supabase
            // then (shockingly!) call displayTodos() to refresh the list
        // append the rendered todo DOM element to the todosEl
}