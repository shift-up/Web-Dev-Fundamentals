export class Book {
    constructor(title, author, pages, description, currentPage) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.description = description;
        this.currentPage = currentPage;
        this.read = false;
    }

    readBook(page) {
    	if (page < 1 || page > this.pages) {
    		return 0;
    	}

    	if (page == this.pages) {
    		this.read = true;
    	}

    	this.currentPage = page;
    	return 1;
    }
}

let myBook = new Book('The Story of Tau', 'Will Alexander', 250, "d1", 10);
let myBook2 = new Book('The Story of Tau2', 'Will Alexander2', 100, "d2", 1);
let myBook3 = new Book('The Story of Tau3', 'Will Alexander3', 50, "d3", 1);

export const books = [myBook, myBook2, myBook3];
