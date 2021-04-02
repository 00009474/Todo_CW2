# To-do App

The to-do application is created using Node Js and express and allows users to create, edit and delete various tasks that they will submit to this site. In total, this application includes several parts: a navigation bar, a form for entering the desired to-do, a button that allows user to load a to-do note, a table that displays information and possible actions with it and a footer.

## How to run it

In order to run the application locally on computer, the user must in advance install various modules and extensions for node js and express

First of all, user needs to open a terminal or command line and use the cd command to go to the project folder

```bash
cd Desktop
```
After the user is in the project folder, it is necessary to install the required modules in order.

First, let's start by installing Nodemon:

```bash
npm i nodemon -D
```

Next, user needs to install the [express](https://expressjs.com/) and [pug](https://pugjs.org/api/getting-started.html) extensions:

```bash
npm i express pug
```

And the last two things that user needs to do is install two extension, [body-parser](https://www.npmjs.com/package/body-parser) and [fs](https://nodejs.org/api/fs.html)

```bash
npm i body-parser
```

```bash
npm i fs
```

After that, user needs to start the server, this can be done in two ways:

```bash
npm run dev
```

or

```bash
node app.js
```

Next, the user needs to go to the Internet browser and write in the search line: localhost:3000

Further, all the necessary to-dos are saved in a local file in JSON format _tododata.json_

### api/v1/todos

In order to view the data that is in the local database, the user needs to register the following path: http://localhost:3000/api/v1/todos

After use, user can close the integrated development system, or using the Ctrl + C key combination, he/she can shut down the server, and then restart it as described above.

## Application dependencies’ list

Node js, express, nodemon, pug, body-parser, fs

## Link to github and glith

Github: https://github.com/00009474/Todo_CW2
or click [here](https://github.com/00009474/Todo_CW2)

Glith: https://windy-canyon-ermine.glitch.me/
or click [here](https://windy-canyon-ermine.glitch.me/)