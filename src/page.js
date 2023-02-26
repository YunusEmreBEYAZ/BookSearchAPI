import { initView } from './view.js';

export function initPage() {
    document.body.innerHTML = ''; // for cleaning the body before using
    initView();  //called the elements 
    document.getElementById('button').addEventListener('click', search);
    document.getElementById('input').addEventListener('keyup', (e) => {
        if(e.key === 'Enter'){
            search();
        }
    })

    async function search(data) {      
        document.getElementById('info-div').innerHTML = '';  
        try {
            const response = await fetchData(data);

        } catch (error) {
            alert(error.message)
        }
        new Error('Request failed!');
    }
    

}

function results(data){
    const img = document.createElement('img');
    document.getElementById('info-div').appendChild(img);
    img.src = data.items[0].volumeInfo.imageLinks.thumbnail;
    const bookName = document.createElement('h2');
    document.getElementById('info-div').appendChild(bookName);
    bookName.textContent = data.items[0].volumeInfo.title;
    const author = document.createElement('h2');
    document.getElementById('info-div').appendChild(author);
    author.textContent = data.items[0].volumeInfo.authors[0];
    const description = document.createElement('p');
    document.getElementById('info-div').appendChild(description);
    description.textContent = data.items[0].volumeInfo.description;
}

function fetchData(data) {
let inputValue = document.getElementById('input').value;
    inputValue = ''; // clear the previous search
return fetch(`https://www.googleapis.com/books/v1/volumes?q=${input.value}&key=AIzaSyDs1Ksy7B96SOovc8LZATe1d8p-RcvCLL0`)
    .then((response) => {
        if(!response.ok){
            document.getElementById('info-div').innerHTML = 'Fetch not responding'
        }
        return response.json()
    })

    .then((data) => {
        console.log(data);
        return data;        
    })
    .then((data) => results(data))
    .catch((error) => alert('Oops: ' + error.message));

}
