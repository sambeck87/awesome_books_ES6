import Library from './add_remove.js';
import Book from './books_constructor.js';

const GetContent = () => {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const titleBook = title.value;
  const authorBook = author.value;
  const message = document.querySelector('#message');
  if (titleBook === '' || authorBook === '') {
    message.classList.remove('show');
    return;
  }
  const book = new Book(titleBook, authorBook);
  let storage = localStorage.getItem('books');
  storage = JSON.parse(storage);

  const library = new Library(book, storage);
  library.add();
};

export default GetContent;