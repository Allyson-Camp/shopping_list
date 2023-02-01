/* Imports */
import { getItems, signOutUser, createItem, completeItem, deleteItems, checkAuth } from './fetch-utils.js';
import { renderItem } from './render-utils.js';
// this will check if we have a user and set signout link if it exists
import './auth/user.js';

checkAuth(); 

/* Get DOM Elements */
const listFormEl = document.querySelector('.list-form');
const deleteButtonEl = document.querySelector('.delete-button');
const itemsEl = document.querySelector('.items');
const logoutButtonEl = document.getElementById('sign-out-link');

/* State */
let itemsArray = [];

/* Events */
window.addEventListener('load', async () => {
    const items = await getItems();
    itemsArray = items;
    displayItems();
});

listFormEl.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(listFormEl);

    await createItem(data.get('item'), data.get('quantity'));

    displayItems();

    listFormEl.reset();
});

deleteButtonEl.addEventListener('click', async () => {
    displayItems();
    await deleteItems();
});

logoutButtonEl.addEventListener('click', () => {
    signOutUser();
});

/* Display Functions */
async function displayItems(){
    itemsEl.textContent = '';

    const items = await getItems();
    itemsArray = items;

    for (let item of itemsArray) {
        const itemsAdded = renderItem(item);

        itemsAdded.addEventListener('click', async () => {
            await completeItem(item.id);
            displayItems();
        });
        listFormEl.append(itemsAdded);
    }
}