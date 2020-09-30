# Feige Todos
This project is a dead simple Todolist app for demonstration purpose. It was built with Angular version 9.1.7.

Online demo: [https://feige-json-server.herokuapp.com/](https://feige-json-server.herokuapp.com/)

## Features checklist

1. ✅ Built Mock API with json-server from the ground up, by myself: [Heroku](https://feige-json-server.herokuapp.com/todos).
2. ✅ I chose **Angular** because I'm being familiar with it. Vue or React are all fine but I've not practiced with them for two years, that would be high risk if I chose them.
3. ✅ User can create a task
4. ✅ User can view all their current tasks
5. ✅ User can update a task
6. ✅ User can delete a task
7. ✅ The page is **mobile-responsive** (in my perspective)
8. ✅ Fetched from a mock REST API that returns an appropriate JSON format
9. ✅ Using TypeScript: it's default for Angular project
10. ✅ Hosting the front-end client using [Heroku](https://feige-json-server.herokuapp.com) too.
11. ✅ Using a state management: [NgRx](https://ngrx.io/) (based on redux)
12. ❌ end-to-end testing frameworks: Sorry that I didn't have enough time for this. So I decided to spend time for manually testing and writing report. To be honest, I've written unit-test before (2 years ago), but most of the time I do not, due to the tight budget from previous companies.
13. ❌ I did not use any CSS framework, there's no need for this simple project. Actually even with bigger project, I will choose not to use too.
14. ✅ App design: I searched and picked a random design from Google, which is simple enough to implement.

## Limitation & Improvements

To keep it simple and focus more on techniques, there are some limitations:
* I came up with simple design
* I did not implement some animations to make the app smoother.
* I chose default `<input type="date">` for date picker, which is not fully support in [Safari](https://caniuse.com/input-datetime).
* Duedate (datepicker) doesn't have option to set it `null`, which means the duedate cannot be set `unlimited`.
* Duedate is just for displaying purpose, there is no warning if the duedate is close to or pass the current date.
* **Free Heroku app does have a sleeping time if it's not being touched. So the first time you go to the app, it will be slow (to wake it up), then the speed will be much better**.
* There are a lot of ideas we can add/improve the features or UX to make it more usable, but it's not necessary for the demonstation purpose.


## Setup the server

You can choose to use the already setup server, or build your own server:

**1. Use the Feige Json Server**

I've already setup the server, use the API endpoint here: [https://feige-json-server.herokuapp.com/todos](https://feige-json-server.herokuapp.com/todos)

```
GET     /todos
GET     /todos/{id}
POST    /todos
PUT     /todos
DELETE  /todos/{id}
```

**2. Build your own server with json-server**

Follow the guide here to build your own server: [https://github.com/typicode/json-server](https://github.com/typicode/json-server)

## Run the project
Make sure that you've already installed the [Angular-CLI](https://angular.io/guide/setup-local)
1. Pull the project
2. run `npm install` or `yarn install`
3. run `npm start` or `yarn start`
4. If you wish to use the Feige's demo server, change the `API_ENDPOINT` in the `/src/environments/environment.ts` with the `environment.prod.ts`


## Build

Run `yarn build` to build the project with `production` mode. The build artifacts will be stored in the `dist/` directory.
