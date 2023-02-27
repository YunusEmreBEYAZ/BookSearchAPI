'use strict'



export function pageView() {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    body.appendChild(container);
    const searchSection = document.createElement('div');
    searchSection.setAttribute('id' ,'search-section');
    container.appendChild(searchSection);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'input');
    searchSection.appendChild(input);
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.textContent = 'Search';
    searchSection.appendChild(button);
    const infoSection = document.createElement('div');
    infoSection.setAttribute('id', 'info-section');
    container.appendChild(infoSection);
    const imgSection = document.createElement('div');
    imgSection.setAttribute('id', 'img-section');
    infoSection.appendChild(imgSection);
    const bookAuthorSection = document.createElement('div');
    bookAuthorSection.setAttribute('id', 'book-author-section');
    infoSection.appendChild(bookAuthorSection);
    const descriptionSection = document.createElement('div');
    descriptionSection.setAttribute('id', 'description-section');
    infoSection.appendChild(descriptionSection);


    

}