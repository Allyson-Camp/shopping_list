export function renderItem(item) {
    const listDiv = document.createElement('div');
    const itemEl = document.createElement('p');

    itemEl.textContent = item.item;

    listDiv.classList.add(item.purchased === true ? 'purchased' : 'not-purchased');
    itemEl.classList.add('item');

    listDiv.append(itemEl);

    return listDiv;
}