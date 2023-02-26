'use strict'



export function initView() {
    const body = document.querySelector('body');
    const searchDiv = document.createElement('div');
    searchDiv.setAttribute('id' ,'upper-div');
    body.appendChild(searchDiv);
    const infoDiv = document.createElement('div');
    infoDiv.setAttribute('id', 'info-div');
    body.appendChild(infoDiv);
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', 'input');
    searchDiv.appendChild(input);
    const button = document.createElement('button');
    button.setAttribute('id', 'button');
    button.textContent = 'Search';
    searchDiv.appendChild(button);
    

}