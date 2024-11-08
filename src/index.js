// require('dotenv').config({path: './env'})      -> old version

import dotenv from "dotenv"     // ASAP we have to use dotenv in our code
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

// function connectDB(){}
// connectDB()

connectDB()





















/*  // This approach is not appreciated on the indstry standards . Because in this approach all express and DB is connected at one place so don't follow it . This approach is done using iffi's.

import express from "express"
const app = express()

( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

        app.on("error", (error) => {
            console.log("ERROR : ",error);
            throw error
        })

        app.listen(process.env.PORT, () =>{
            console.log(`App is listening on Port ${process.env.PORT}`);
        })


    }catch(error){
        console.log("ERROR: ",error)
        throw err
    }


})




What is an IIFE (Immediately Invoked Function Expression)?
An IIFE is a function that is defined and invoked (or executed) immediately after its creation. It's often used to avoid polluting the global scope, especially in JavaScript environments like Node.js where global scope pollution can lead to unexpected issues.

An IIFE looks like this:

javascript
Copy code
(function() {
  // code inside the function
  console.log("This is an IIFE!");
})();
Or, with an arrow function (ES6+):

javascript
Copy code
(() => {
  console.log("This is an IIFE with arrow function!");
})();
How does it work?
The function is wrapped in parentheses to turn it into an expression (since functions are normally declarations, not expressions).
The final set of parentheses () at the end invokes the function immediately.
*/