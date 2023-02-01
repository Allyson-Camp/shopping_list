export function renderItem(item) {
    const listDiv = document.createElement('div');
    const itemEl = document.createElement('p');
    const quantityEl = document.createElement('p');
    //quantity p el, add text content .quantity

    itemEl.textContent = item.item;
    quantityEl.textContent = item.quantity;

    listDiv.classList.add(item.purchased === true ? 'purchased' : 'not-purchased');
    itemEl.classList.add('item');

    listDiv.append(itemEl, quantityEl);

    return listDiv;
}