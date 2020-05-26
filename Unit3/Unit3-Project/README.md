# Unit 3 Project: Create a book-tracking app for readers

##### Credit to OpenClassrooms
![Become](https://github.com/OCclassprojects/logo/blob/master/fav-icon.png?raw=true)

### Welcome to the Unit 3 Project!

This project will build on the book-tracking app you created at the end of Module 3.2 (the Open Classrooms Javascript course). After you get the code working as the OC quiz instructions describe, you will get to add some of your own custom functionality the book app. **NOTE:** we found that the secret word does not appear as expected, but when you use the modified Open Classrooms code we provide (instructions below) it should show the secret word when the code is implemented correctly.

### Project Instructions

1. Open the [project page on Open Classrooms](https://openclassrooms.com/en/courses/5664271-learn-programming-with-javascript/exercises/3800)

1. Complete the project according to the instructions at OC link above. We have provided the starter code for you in the `SOURCE_FILES` directory here (its almost the same as the code inside `EN_starter NEW.zip` but has some minor modifications from the version from Open Classrooms such as the "Open Random Page" button).

1. Copy the files in `SOURCE_FILES` to `PROJECT_SUBMISSION`

1. After you complete the project and find out secret word (and answer the question on the quiz correctly), you will add some additional code to `Book.js` by following the instructions below.

### Extra challenges for your book-tracking app (not included in Open Classrooms)

1. Add another instance method to the `Book` class (below the `readBook(page)` instance method you already wrote):

	- `openRandomPage()`
		- It does not take any arguments nor have a `return` statement
		- Implement logic to set the instance's `currentPage` field to a random value between 1 and the value of the instance's pages field (`this.pages`).
		- Use a web search to find the Javascript method to generate a random number (hint: you will need to use both Math.random and Math.floor built-in Javascript functions)
		- Make sure your implementation is correct by clicking the "Open Random Page" button next to the "Update" button. It should open a random page each time you click the button.

1. Create your own book style. First, update `styles.css` to change the cover background color (*Hint: you may want to use the Chrome Developer Tools inspector to determine which CSS class to edit*).

1. Add some CSS and HTML code to change your book's appearance by editing the `index.html` and `style.css` files:

	- Add at least 1 new CSS class selector with at least 2 properties
	- Add at least 2 new HTML elements
	- Add CSS code that uses the ID selector to reference an HTML element by its `id`

1. **Extra challenge (optional):** implement code to loop over the `books` array to find the longest book (i.e. book with largest number of pages). Your code should use the `console.log` (or `alert`) function to output the name of the longest book in the console (or show a popup). Your code should use a `for` or `while` loop and must come after the line `export const books = ...`.

1. Once you are happy with your code, create a new branch (e.g. `unit3-project`), push all your local changes to the branch (which will include 6 new files inside the `PROJECT_SUBMISSION` directory), then go to GitHub and create a new Pull Request and assign to your coach for review.

