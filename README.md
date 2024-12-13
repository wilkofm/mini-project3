# mini-project3

Album Reviewer Database

# Project Outline

What Do I Want To Make?

A database for a social media platform where users can rate and review their favourite albums. This database will be made up of four tables, an album table, a user table, an artist table and a review table. The user will interact with the album via the review table.

# Github

How many branches and what for?

Main Branch

- This is my production-ready branch. It should always contain stable, tested code

MySQL Database branch

- This is the branch where I will set up and implement the code that will run the database

Models branch

- This is the branch where I will create the models in my database

Routes branch

- This is the branch where I will create the routes in my database

Controllers branch

- This is the branch where I will create the controllers in my database

# Implementation

How To Implement This Project Yourself

- Import the files within this GitHub project into your development environment
- Install relevant packages to run this project (sequelize, mysql)
- Update the .env with your database details

# Http Request Methods

Mini Project Collections

GET requests
http://localhost:8080/api/albums
http://localhost:8080/api/artists
http://localhost:8080/api/reviews
http://localhost:8080/api/users

POST requests
http://localhost:8080/api/albums/create
http://localhost:8080/api/artists/create
http://localhost:8080/api/reviews/create
http://localhost:8080/api/users/create

Album JSON example

{
"albumId": 6,
"artistId": 1,
"albumTitle": "Round About Midnight",
"year": 1957,
"genre": "Jazz"
}

PUT requests
http://localhost:8080/api/albums/6
http://localhost:8080/api/artists/1
http://localhost:8080/api/reviews/1
http://localhost:8080/api/users/1

Album JSON example

{
"albumTitle": “Round About Midnight (Remastered)",
"year": 2020
}

DELETE requests
http://localhost:8080/api/albums/6
http://localhost:8080/api/artists/1
http://localhost:8080/api/reviews/1
http://localhost:8080/api/users/1

Join Operation GET requests
http://localhost:8080/api/albums/details
http://localhost:8080/api/artists/details
http://localhost:8080/api/reviews/details
http://localhost:8080/api/users/details

Transaction POST requests
http://localhost:8080/api/albums/createWithReviews

Album JSON example

{
"albumData": {
"albumTitle": "Round About Midnight",
"artistId": 1,
"year": 1957,
"genre": "Jazz"
},
"reviewsData": [
{
"userId": 2,
"rating": 5,
"review": "A masterpiece of jazz."
},
{
"userId": 3,
"rating": 4,
"review": "Iconic and timeless."
}
]
}
