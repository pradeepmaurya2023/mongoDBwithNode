// getting started with mongoose
const mongoose = require('mongoose');


// establishing connection using main()
main().then(()=>{
    console.log('Connection is successful');
})
.catch(err => console.log(err));

// creating an async await function to connect mongodb to express/JS
async function main() {
  //                      'connectionName:portd/database name'
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// ----------------------------------------------------
// defining schemas in-detail
const bookSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    author : {
        type : String
    },
    price : {
        type : Number
    }
})

const Book = mongoose.model('Book',bookSchema);

let book1 = new Book({
    title:'Math1',
    author:'RD SHARMA',
    price:150
});

book1.save().then((res)=>{
    console.log('Data Inserted successfully');
    console.log(res);
}).catch((err)=>{
    console.log(err);
})