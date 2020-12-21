# Burger Welly
A simple app to keep track of all the burgers I had during the Wellington on a Plate event.

The [Visa Wellington on a Plate](https://www.visawoap.com/visawoap) event is New Zealand's biggest annual food festival spanning one month full of tasty events around Wellington.
The three-week burger celebration, where more than 200 venues are serving up creative burger and beer matches, is the highlight of Visawoap.

This burger welly app is my very first full stack app. I created it, to particularly practice Handlebars.js and CRUD operations on a SQL database.

## Technologies
This project is created with:
* Handlebars.js
* Express.js
* SQLite3
* CSS

## Getting started
* After cloning this repo, install dependencies with `npm install`
* To start the server: `npm start`
* To debug the server (and have it reload with Nodemon after changes): `npm run dev`

## Routes
| Method | Path | Description | NOTES |
|---|---|---|---|
| GET | / | gets all burgers from the database
| GET | /burger/:id | gets a burger by id from the database
| POST | /burger/new | adds a new burger to the database
| DELETE | /burger/delete/:id | deletes a burger by id
| PATCH | /burger/edit/:id | updates a burger by id
