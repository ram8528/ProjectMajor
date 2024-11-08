// require('dotenv').config({path: './env'})      -> old version

// Import dotenv to load environment variables from a .env file
import dotenv from "dotenv";  

// Import the connectDB function from the db/index.js file for database connection
import connectDB from "./db/index.js";  

// ASAP we have to use dotenv in our code
dotenv.config({
    path: './env'  // Ensure the environment variables are loaded from the './env' file
});

// function connectDB(){}
// connectDB()

// Connect to the database and start the server upon a successful connection
connectDB()  // Call the connectDB function to establish a MongoDB connection
.then(() => {  // If the database connection is successful, start the server
    // Listen on the provided port or default to 8000 if PORT is not set in the .env file
    
    app.listen(process.env.PORT || 8000, () => {
        // Log a success message indicating the server is running
        console.log(`Server is running at port : ${process.env.PORT}`);
    });
})
.catch((err) => {  // If there is an error in connecting to the database, log the error
    console.log("MONGODB connection failed !!!", err);  // Log the error message for debugging
});














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