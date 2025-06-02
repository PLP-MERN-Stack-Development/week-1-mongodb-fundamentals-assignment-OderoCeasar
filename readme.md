# PLP Bookstore MongoDB Project

This project is part of **Week 1** of the MongoDB learning journey. It demonstrates the use of MongoDB for storing and querying book data using Node.js scripts.



## Requirements

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (local or Atlas)
- MongoDB Compass (optional, for visual inspection)



## Setup Instructions

### 1. Install Dependencies
Install MongoDB and Node.js if not already installed.

### 2. Run MongoDB Server
If using local MongoDB:
 linux
sudo systemctl start mongod
If using MongoDB Atlas, update the uri in insert_books.js:
    const uri = "your-atlas-uri";
Insert Sample Book Data
Run the script to insert 12 books into the database:
    node insert_books.js
You should see:
    Connected to MongoDB server
    Collection dropped successfully
    12 books were successfully inserted into the database
Run MongoDB Queries
Use MongoDB Compass or the Mongo shell:
    mongosh
Switch to the database:
    use plp_bookstore
Run the queries from queries.js file:
    db.books.find()
    db.books.find({ genre: 'Fiction' })
// and others...
    Tasks Covered
    Basic CRUD operations
    Advanced filtering, sorting, pagination
    Aggregation pipeline queries
    Indexing and query optimization

    Screenshot (Example)
Insert a screenshot of your MongoDB Compass showing:

    Database: plp_bookstore

    Collection: books

    Documents: Inserted book data
