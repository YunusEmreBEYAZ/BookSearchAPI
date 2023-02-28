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

async function search() {      

    try {
        const bookURL = `https://www.googleapis.com/books/v1/volumes?q=${input.value}&key=AIzaSyDs1Ksy7B96SOovc8LZATe1d8p-RcvCLL0`;
        const fetchedBook = await fetchData(bookURL);
        const searchedBookTitle = fetchedBook.items[0].volumeInfo.title;
        const searchedAuthor = fetchedBook.items[0].volumeInfo.authors[0];
        const authorURL = `https://www.googleapis.com/books/v1/volumes?q=inauthor:${searchedAuthor}&key=AIzaSyDs1Ksy7B96SOovc8LZATe1d8p-RcvCLL0`;
        const fetchedAuthor = await fetchData(authorURL);
        const authorBooks = fetchedAuthor.items;
        const otherBooks = authorBooks.filter(book => book.volumeInfo.title !== searchedBookTitle);
        const otherBookImages = otherBooks.map(book => book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : book.volumeInfo.title);
        results(fetchedBook, otherBookImages); 
    } catch (error) {
        document.getElementById('info-section').innerHTML = `Error ${error}`;
    }

}



function results(bookInfo, otherBookImages){
    document.getElementById('img-section').innerHTML = '';
    document.getElementById('book-author-section').innerHTML = '';
    document.getElementById('description-section').innerHTML = '';
    document.getElementById('otherBookContainer').innerHTML = '';
    const img = document.createElement('img');
    img.setAttribute('alt', 'Book Image');
    document.getElementById('img-section').appendChild(img);
    img.src = bookInfo.items[0].volumeInfo.imageLinks.thumbnail;
    const bookName = document.createElement('h2');
    document.getElementById('book-author-section').appendChild(bookName);
    bookName.textContent = bookInfo.items[0].volumeInfo.title ? `${bookInfo.items[0].volumeInfo.title}` : 'Book not found';
    const author = document.createElement('h3');
    document.getElementById('book-author-section').appendChild(author);
    author.textContent = bookInfo.items[0].volumeInfo.authors[0] ? `Author: ${bookInfo.items[0].volumeInfo.authors[0]}` : 'Author: Not found';
    const description = document.createElement('p');
    document.getElementById('description-section').appendChild(description);
    description.textContent = bookInfo.items[0].volumeInfo.description ? `Description: ${bookInfo.items[0].volumeInfo.description}`: 'No Description';
    document.getElementById('related-books').textContent = `Author's Books`;
    otherBookImages.forEach(bookUrl => {
        const otherBook = document.createElement('img');
        otherBook.setAttribute('alt', 'No image');
        document.getElementById('otherBookContainer').appendChild(otherBook);
        otherBook.src = bookUrl;
    });
}

function fetchData(url) {
return fetch(url)
    .then((response) => {
        if(!response.ok){
            document.getElementById('info-section').innerHTML = (`Fetch is not responding: ${response}`);  
        }
        return response.json()
    })
    .then((data) => {
        return data;        
    })
    .catch((error) => {
        document.getElementById('info-section').innerHTML = `Error: ${error.message}`
    });

}
