# Todo List by Roman Pavlenko

## [Demo link](https://todolist-phi-liard.vercel.app/)

## Local deployment

If you want to run this project on your device

```
 1.Clone repository
 run from terminal opened in project folder
 2. npm install
 3. npm run dev
 4. open [http://localhost:3000/](http://localhost:3000/)
```

## Project details

This is a [Next.js](https://nextjs.org/) project.

It uses [JSON placeholder](https://jsonplaceholder.typicode.com/) to fetch initial list of todos.

I used this technologies to implement this project

Next.js
Redux
REST API
Typescript
HTML/CSS

### How it works

  1. On page load GET request gets todos from JSON Placeholder api
  2. Writes list into Redux StoreProvider
  3. Renders list
  
  From this point you can add new Todos, Edit existing, or Delete them.
  it not only makes changes on this page, but sends same request to Api (which can't be changed), and Api sends response back

