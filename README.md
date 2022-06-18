# team-profile-generator

## Task

Build a Node.js command-line application that takes in information about employees on a software engineering team, then generates an HTML webpage that displays summaries for each person. Write a unit test for every part of code and ensure that it passes each test.

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```

## Technologies Used:

JavaScript, Node.js, Inquirer

## Installation:

Clone the repository using SSH keys:

git clone git@github.com:git@github.com:smeea-2018/team-profile-generator.git

Install the required packages

npm install

Start execution

npm run start

To run the test:

npm run tes

## License:

MIT

## Mock-up:

![Mock-up](./dist/assets/team-profile-generator.gif)

<a href = "https://drive.google.com/file/d/1Rg1yfODL8BqJRcayH6_ObEtDqvK4So2w/view">Watch Video </a>

## Contact Me:

<a href = "mailto: smeeaa131@gmail.com"> email </a>
