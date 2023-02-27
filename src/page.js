import { pageView } from './view.js';

export function initPage() {
    pageView();  //called the elements 
        button.addEventListener('click', () => {
            search()
            input.value = '';
        });
        input.addEventListener('keyup', (e) => {
            if(e.key === 'Enter'){
                search();
                input.value = '';
            }
        }) 

}

async function search(data) {      
      
    try {
        const response = await fetchData(data);
        results(response);
    } catch (error) {
        alert(error.statusText)
    }
}

function results(bookInfo){
    document.getElementById('img-section').innerHTML = '';
    document.getElementById('book-author-section').innerHTML = '';
    document.getElementById('description-section').innerHTML = '';
    const img = document.createElement('img');
    document.getElementById('img-section').appendChild(img);
    img.src = bookInfo.items[0].volumeInfo.imageLinks.thumbnail;
    const bookName = document.createElement('h2');
    document.getElementById('book-author-section').appendChild(bookName);
    bookName.textContent = `Book: ${bookInfo.items[0].volumeInfo.title}`;
    const author = document.createElement('h3');
    document.getElementById('book-author-section').appendChild(author);
    author.textContent = `Author: ${bookInfo.items[0].volumeInfo.authors[0]}`;
    const description = document.createElement('p');
    document.getElementById('description-section').appendChild(description);
    description.textContent = `Description: ${bookInfo.items[0].volumeInfo.description}`;

}

function fetchData(data) {
return fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}&key=AIzaSyDs1Ksy7B96SOovc8LZATe1d8p-RcvCLL0`)
    .then((response) => {
        if(!response.ok){
            document.getElementById('info-section').innerHTML = 'Fetch not responding';
        }
        return response.json()
    })

    .then((data) => {
        console.log(data);
        return data;        
    })
    .catch((error) => alert('Oops: ' + error.message));

}