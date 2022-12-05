import Library from './add_remove.js';
import Display from './display.js';

const GetIndex = (index) => {
  const library = new Library(null, null, index);
  library.remove();
  Display();
  // eslint-disable-next-line no-restricted-globals
  location.reload();
};

export default GetIndex;