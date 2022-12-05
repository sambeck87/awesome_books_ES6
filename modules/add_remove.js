export default class Library {
  constructor(book, storage, index) {
    this.book = book;
    this.library = storage;
    this.index = index;
  }

  add = () => {
    if (this.library === null) {
      this.library = [];
    }
    const data = this.library;
    data.push(this.book);
    const allData = JSON.stringify(data);
    localStorage.setItem('books', allData);
  }

  remove = () => {
    let getData = localStorage.getItem('books');
    getData = JSON.parse(getData);
    getData.splice(this.index, 1);
    getData = JSON.stringify(getData);
    localStorage.setItem('books', getData);
  }
}