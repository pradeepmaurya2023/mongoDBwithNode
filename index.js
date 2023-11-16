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
  await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// defining schemas with the help of an example 
const userSchema = new mongoose.Schema({
  name : String,
  email : String,
  age : Number
});


// const bookSchema = new mongoose.Schema({
//   name : String,
//   author : String,
//   price : Number
// });

// defining methods for schemas
// bookSchema.methods.about = function about(){
//   console.log(`hello My name is ${this.name}, I'm a book written by ${this.author} and my price is ${this.price}`);
// }

// defining modal for User collection
const User = mongoose.model('User',userSchema);
// const book = mongoose.model('book',bookSchema);

// const maths = new book({name:'Maths',author:'RD SHARMA',price:202});
// calling schema method
// maths.about();
// maths.save();

// defining modal for Employee collection
// const Employee = mongoose.model('Employee',userSchema);

// --------------------------------------------
// INSERTING ONE DOCUMENT AT A TIME

// creating an object of User Modal class
// const user1 = new User({
//   name:"Kumar",
//   email: 'kumar@gmail.com',
//   age:20
// })
// user1.save();

// const user3 = new User({
//   name:"bob",
//   email: 'bob@gmail.com',
//   age:20
// })

// user3.save().then((res)=>{
//   console.log('Data inserted successfully');
//   console.log(res);
// }).catch((err)=>{
//   console.log(err);
// });

// --------------------------------------------
// INSERTING MANY DOCUMENTS AT A TIME
// User.insertMany([
//   {name: 'Tony1', email: 'tony@mail.com', age:50},
//   {name: 'Peter2', email: 'peter@mail.com', age:20},
//   {name: 'Bruce3', email: 'bruce@mail.com', age:47}
// ]).then((res)=>{
//   console.log('Data inserted successfully');
//   console.log(res);  
// });

// --------------------------------------------
// FIND() in our DB using mongoose
// #1 model.find();
// User.find().then((res)=>{
//   console.log(res);
// })

// Searching based on filters
// User.find({age : {$gte : 47}}).then((res)=>{
//   console.log(res[0].name);
// })

// #2 model.findOne()
// User.findOne().then((res)=>{
//   console.log(res);
// })

//  Searching based on id
// #3 model.findById('id')
// User.findById('654cdea0868a90533760f0c9').then((res)=>{
//   console.log(res.name);
// })

// --------------------------------------------
// UPDATE IN OUR DATABASE USING MONGOOSE

// #1 using model.updateOne({filter},{update key value}).then()
// User.updateOne({name:'Bruce'},{age:44}).then((res)=>{
//   console.log('Document update successfully');
//   console.log(res);
// })

// #2 using model.updateMany({filter},{update key value}).then()
// User.updateMany({age : {$gt : 40}},{age:44}).then((res)=>{
//   console.log('Document update successfully');
//   console.log(res);
// });

// --------------------------------------------
// FIND AND UPDATE IN OUR DATABASE USING MONGOOSE
// #1 using model.findOneAndUpdate({filter},{update key:value},{new:true}).then()
// new option is used to return new and updated value
// User.findOneAndUpdate({name:'Bruce'},{age:39},{new:true}).then((res)=>{
//   console.log('Document update successfully');
//   console.log(res);
// });

// #2 using model.findByIdAndUpdate({filter},{update key:value},{new:true}).then()
// new option is used to return new and updated value
// User.findByIdAndUpdate('654ce168c2f47336ef1534ac',{name:'natasha'},{new:true}).then((res)=>{
//   console.log('Document update successfully');
//   console.log(res);
// });

// --------------------------------------------
// DELETE IN OUR DATABASE USING MONGOOSE
// #1 model.deleteOne({filter key:value}).then()
// User.deleteOne({name:'eve'}).then((res)=>{
//   console.log('Deleted Successfully');
//   console.log(res);
// });
// #2 model.deleteMany({filter key:value}).then()
// User.deleteMany({age: {$gt:40 }}).then((res)=>{
//   console.log('Deleted Successfully');
//   console.log(res);
// });

// FIND AND DELETE IN OUR DATABASE USING MONGOOSE
// #1 model.findOneAndDelete({filter},{new:true}).then()
// User.findOneAndDelete({name:'Tony1'}).then((res)=>{
//   console.log('Deleted Successfully');
//   console.log(res);
// });

// #2 model.findByIdAndDelete({filter},{new:true}).then()
// User.findByIdAndDelete('id').then((res)=>{
//   console.log('Deleted Successfully');
//   console.log(res);
// });

// using .exec() to use promises concept
const query = User.find({name :'Bruce'}).exec();
query.then((data)=>{
  console.log(data[0]['id']);
}).catch((err)=>{
  console.log('Record not found');
}).finally(()=>{
  console.log('Query Execution completed')
})

