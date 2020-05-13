# Unit 4 Project: Creating a ToDo List App

##### Credit to Shift_Up coach Noah Passalacqua
![Become](https://avatars2.githubusercontent.com/u/38302861?s=200&v=4)

### Welcome to the Unit 4 Project!

Please read the instructions carefully and submit your project files to in the directory `Unit4/Unit4-Project`.

Be creative when completing this project and add your own style. However, remember to stay focused on the main bullet points.

##### Unit Project Instructions

1. Create an `html`, `css`, and `js` file linking them together.

1. Add an input field for users to add a todo item.

1. Create an empty list element in the `<body>`.

1. Create an event listener on the input field. On `ENTER`, it should append an item to the list with the user's text.

1. For each item created in the list:
    1. Add a checkbox to mark the item as complete. If checked, apply the ~~strikethrough~~ style to the item's text.
    1. Add a button that will delete the item from the list.

1. Create an empty state view for the list if there are no items in the list.
    1. Just an element with some text saying something like "Add your first todo" is fine. Here is an example:
    
    <img src="https://freshman.tech/assets/images/todo-list/empty-state.gif" />

1. Make sure everything works. Add, delete, and check an item.

#### Persisting the data with an API

We are going to use a local mock server to save and persist your data.

**NOTE**: To clear the database of items, reset the `db.json` file to look like this:
```json
{ "item": [] }
```

1. First lets design the data structure for our ToDo items. This will be an object that will hold properties to describe each item.
    1. When we are ready to create these items, they will populate the array property `item` as described above.
    ```json
    {
      "id": 1,
      "text": "Finish the Unit 4 Project",
      "completed": false
    }
    ```

1. Lets run our mock server:
    1. Open terminal
    1. Navigate to the project folder: `cd Unit4/Unit4-Project`
    1. Start the mock server script: `./start_mock_server.sh`
    1. The server will run at the endpoint: `http://localhost:3000`
    1. Navigate to `http://localhost:3000/item` in your browser to see the empty list of our ToDo items.

1. Update your `js` file to fetch all the items from the API once the document is ready.
    1. Fetch the data using a `GET` request to `/item`
    1. Read the response from the request and render the todo items with the corresponding `id` so that we can uniquely reference this item later on.

1. When adding an item, submit a `POST` request to `/item` with `text={user input}` and `completed=false`
    1. Be sure to read the response data and grab the item `id`

1. When clicking the checkbox, submit a `PATCH` request to `/item/{item id}` with `completed={value of the checkbox}`

1. When deleting an item, submit a `DELETE` request to `/item/{item id}`

1. Make sure the data is correctly persisted when you reload the page.

1. When finished, be sure to stop the server script.

1. As usual, create a new branch and then new Pull Request and assign it to your coach for review.
