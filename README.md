# BAckend functionality with Frontend and Database

This is a full stack project like Youtube

Model link
{
    https://app.eraser.io/workspace/mvTM9oMz6BDvuLINSr6P
}

.////////// CLoudinary 
import { v2 as cloudinary } from 'cloudinary';

(async function() {

    // Configuration
    cloudinary.config({ 
        cloud_name: 'dteihcpym', 
        api_key: '989115293871972', 
        api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
    });
    
    // Upload an image
     const uploadResult = await cloudinary.uploader
       .upload(
           'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', {
               public_id: 'shoes',
           }
       )
       .catch((error) => {
           console.log(error);
       });
    
    console.log(uploadResult);


    //        MULTER  -> https://github.com/expressjs/multer/blob/master/doc/README-fr.md
    const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })


//   Nodemon -> https://www.npmjs.com/package/nodemon
// bcrypt -> https://www.npmjs.com/package/bcrypt
// jsonwebtoken -> https://www.npmjs.com/package/jsonwebtoken
// dotenv -> https://www.npmjs.com/package/dotenv
// https://www.npmjs.com/package/mongoose-aggregate-paginate-v2
// https://www.npmjs.com/package/cors
// https://www.npmjs.com/package/cookie-parser
// https://www.npmjs.com/package/prettier
// https://www.npmjs.com/package/mongoose
// "-r dotenv/config --experimental-json-modules src/index.js" -> Load environment variables from .env before running index.js.
Allow you to import JSON files as modules using import syntax inside index.js.
