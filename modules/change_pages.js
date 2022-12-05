const list = document.getElementById('list-books');
const subtitle = document.getElementById('subtitle');
const form = document.getElementById('add-books');
const contact = document.getElementById('contact');
export const btnList = document.getElementById('listLink');
export const btnAddNew = document.getElementById('addLink');
export const btnContact = document.getElementById('contactLink');

const List = () => {
  list.classList.remove('hide');
  subtitle.classList.add('hide');
  form.classList.add('hide');
  contact.classList.add('hide');
  btnList.classList.add('blue');
  btnList.classList.remove('link_nav');
  btnAddNew.classList.add('link_nav');
  btnContact.classList.add('link_nav');
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

const AddNew = () => {
  list.classList.add('hide');
  subtitle.classList.remove('hide');
  form.classList.remove('hide');
  contact.classList.add('hide');
  btnAddNew.classList.add('blue');
  btnAddNew.classList.remove('link_nav');
  btnList.classList.add('link_nav');
  btnContact.classList.add('link_nav');
};

const Contact = () => {
  list.classList.add('hide');
  subtitle.classList.add('hide');
  form.classList.add('hide');
  contact.classList.remove('hide');
  btnContact.classList.add('blue');
  btnContact.classList.remove('link_nav');
  btnList.classList.add('link_nav');
  btnAddNew.classList.add('link_nav');
};

export { List, AddNew, Contact };