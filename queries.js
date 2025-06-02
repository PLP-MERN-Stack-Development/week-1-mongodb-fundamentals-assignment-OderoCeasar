
// Find books in Political Satire
db.books.find({ genre: 'Political Satire' });

// Books published after 1950
db.books.find({ published_year: { $gt: 1950 } });

// Books written by George Orwell
db.books.find({ author: 'George Orwell' });

// Updating the price of "The Lord Of the Rings" to 20.00
db.books.updateOne({ title: 'The Lord of the Rings' }, { $set: { price: 20.00 } });

// Delete the book "Moby Dick"
db.books.deleteOne({ title: 'Moby Dick' });


// Advanced Queries
// Books in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } });

// Project only title, author, price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 });

// Sort books by ascending price
db.books.find().sort({ price: 1 });

// Sort books by descending price
db.books.find().sort({ price: -1 });

// Implementing pagination using limit
db.books.find().limit(5);

// Implementing pagination using skip and limit
db.books.find().skip(5).limit(5);



// Aggregation Pipeline
// calculate the average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// find the author with the most books in the collection
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
]);

// books by publication decade and counts them
db.books.aggregate([
  {
    $project: {
      decade: { $concat: [ { $toString: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] } }, "0s" ] }
    }
  },
  {
    $group: {
      _id: "$decade",
      count: { $sum: 1 }
    }
  }
]);


// Indexing
// Create index on title
db.books.createIndex({ title: 1 });

// Create compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Explain a query using title index
db.books.find({ title: "1984" }).explain("executionStats");
