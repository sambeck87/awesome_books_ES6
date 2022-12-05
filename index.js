import Display from './modules/display.js';
import GetContent from './modules/get_content.js';
import GetIndex from './modules/get_index.js';
import {
  List, AddNew, Contact, btnList, btnAddNew, btnContact,
} from './modules/change_pages.js';
import myDate from './modules/date.js';

setInterval(myDate, 1000);

Display();

let index = 0;
const buttonAdd = document.getElementById('add');
const deleteBtn = document.querySelectorAll('.button');

deleteBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    index = btn.value;
    GetIndex(index);
  });
});

buttonAdd.addEventListener('click', GetContent);
btnList.addEventListener('click', List);
btnAddNew.addEventListener('click', AddNew);
btnContact.addEventListener('click', Contact);