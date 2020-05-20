const rE = new Event('pr');
const bE = new Event('br');

const gE = id => document.getElementById(id);
const qS = s => document.querySelector(s);
const cE = e => document.createElement(e);

export const createCurrentBookTab = book => {

  const item = document.createElement('div');
  item.classList.add('carousel-item');

  const frame = document.createElement('div');
  frame.classList.add('current-book-frame');

  const image = document.createElement('div');
  image.classList.add('current-book-frame-img');
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-book', 'fa-8x');

  image.appendChild(icon);
  frame.appendChild(image);
  item.appendChild(frame);

  const content = document.createElement('div');
  content.classList.add('current-book-frame-content');

  const title = document.createElement('h3');
  title.innerText = book.title;
  content.appendChild(title);

  const author = document.createElement('h5');
  author.innerText = book.author;
  content.appendChild(author);

  const description = document.createElement('p');
  description.innerText = book.description;
  content.appendChild(description);

  const progress = document.createElement('div');
  progress.classList.add('progress', 'current-book-progress');

  const progressBar = document.createElement('div');
  progressBar.classList.add('progress-bar');
  progressBar.style.width = (book.currentPage / book.pages) * 100 + '%';

  progress.appendChild(progressBar);
  content.appendChild(progress);

  const form = document.createElement('div');
  form.classList.add('progress-form');

  const span = document.createElement('span');
  span.innerText = 'Page ';
  form.appendChild(span);

  const input = document.createElement('input');
  input.setAttribute('type', 'number');
  input.defaultValue = book.currentPage;
  form.appendChild(input);
  form.appendChild(input);

  const otherSpan = document.createElement('span');
  otherSpan.innerText = ' of ' + book.pages;
  form.appendChild(otherSpan);

  const updateButton = document.createElement('button');
  updateButton.classList.add('btn', 'btn-sm', 'btn-primary');
  updateButton.innerText = 'Update';
  form.appendChild(updateButton);

  const randomPageButton = document.createElement('button');
  randomPageButton.classList.add('btn', 'btn-sm', 'btn-primary');
  randomPageButton.innerText = 'Open Random Page';
  form.appendChild(randomPageButton);

  content.appendChild(form);
  frame.appendChild(content);

  updateButton.addEventListener('click', () => {
    const error = book.readBook(+input.value);
    if (error === 0) {
      input.value = book.currentPage;
      alert('Invalid page number!');
      return;
    }
    if (!book.read) {
      progressBar.style.width = (book.currentPage / book.pages) * 100 + '%';
      document.dispatchEvent(rE);
    } else {
      if (item.previousElementSibling) {
        item.previousElementSibling.classList.add('active');
      } else if (item.nextElementSibling) {
        item.nextElementSibling.classList.add('active');
      }
      document.dispatchEvent(bE);
      createReadBook(book);
      item.parentElement.removeChild(item);
    }
  });

  randomPageButton.addEventListener('click', () => {
    book.openRandomPage();
    input.defaultValue = book.currentPage;
    if (!book.read) {
      progressBar.style.width = (book.currentPage / book.pages) * 100 + '%';
      document.dispatchEvent(rE);
    }
  });

  return item;
};

export const createReadBook = book => {
  const list = document.getElementById('read-books-list');
  const item = document.createElement('li');
  item.classList.add('list-group-item');
  item.innerText = book.title;
  list.appendChild(item);
  ch();
};

export const ch = () => {
  const t = gE('carousel-inner').classList.value.split(' ')[1];
  const b = qS('.container');
  const o = cE('div');
  const h = cE('h1');
  o.classList.add('over');
  o.appendChild(h);
  h.innerText = t;
  b.appendChild(o);
};
