const Display = () => {
  let getBooks = localStorage.getItem('books');
  getBooks = JSON.parse(getBooks);

  if (getBooks != null) {
    const booksSection = document.getElementById('books');
    let book = '';
    for (let i = 0; i < getBooks.length; i += 1) {
      let background;
      if (i % 2 === 0) {
        background = 'gray';
      } else {
        background = 'white';
      }
      book += `<div class="book ${background}"><p>${getBooks[i].title} by ${getBooks[i].author}</p>
      <button class="button" value=${i}>Remove</button>
      </div>`;
    }
    booksSection.innerHTML = `${book}`;
  }
};

export default Display;