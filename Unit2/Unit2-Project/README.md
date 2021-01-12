# Manage and Deploy a Project with Git
##### Credit to OpenClassrooms
![Become](https://github.com/OCclassprojects/logo/blob/master/fav-icon.png?raw=true)

### Welcome to the Unit 2 Project!

I would like for you to follow these instructions **line by line**! 

All of the commands you will need for this activity are in the course content! 
When you are done, push your branch to the remote repository and create a pull request!

**NOTE:** When instructed to take a screenshot, immediately save and commit the images to `Unit2-Project/screenshots/{number}` (commit messages do **not** matter)

1. Find your personal ShiftUp repository by going to https://github.com/shift-up and looking for the repo with your name (e.g. `https://github.com/shift-up/Your-Name`). If you do not see a repository with your name, reach out to "Adrian Laurenzi" or "Ray Batra" on the Shift_Up Slack.
1. Clone your personal GitHub repository to your local machine.
1. Use `git log` to look at the file structure and commits. Note how many commits, trees, and blobs there are!
    1. Take and save screenshot to `Unit2-Project/screenshots/1`
1. Create a new branch and check it out (you can name the branch what you want).
1. Use `git log` to look at your new branch.
1. Create a new file called **redqueen.txt** and paste the following:
    > "Why, sometimes I've believed as many as six impossible things before breakfast." -Red Queen, Alice in Wonderland
1. Add and commit everything with the message **"Added redqueen"**.
1. Create a new file called **test.txt**
1. Write **"Shift_Up is awesome!"** in your file and save it.
1. Add and commit everything with the message **"Added test"**.
    1. Take and save screenshot to `Unit2-Project/screenshots/2`
1. Now run a `git fetch` to see if any new files are on the main repo. In this case you should *not* see any changes since the remote has not been changed. However, it is generally a good practice to run `git fetch` every time you start coding to ensure your local repo is up-to-date.
1. Push your branch to the remote repository and create a Pull Request.

### Additional bonus steps

1. After your Pull Request is approved by a coach, use the GitHub user interface or use `git merge` to merge your branch to the master branch on your local repo.
1. Get on the `master` branch as your working directory.
1. Use `git rebase` to move the **redqueen** commit to after the **test** commit.
    1. Change the commit message to **"Moved commit"**.
1. Use `git log`
1. Add and commit everything with the message **"Added redqueen"**.
1. Use `git rebase` to **squash** all your commits in this branch into one.
    1. Change the commit message to **"Squashed Unit2-Project"**.
1. Use the command `git log --graph --full-history --all` and commit it to your branch.

