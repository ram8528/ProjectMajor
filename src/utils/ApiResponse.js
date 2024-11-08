// Define a class ApiResponse to standardize API responses
class ApiResponse{
    // Constructor to initialize response properties
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode  // HTTP status code for the response (e.g., 200, 404)
        this.data = data  // The actual data to be returned in the response
        this.message = message  // Optional message, default is "Success"
        this.success = statusCode < 400  // Indicates if the request was successful (statusCode < 400 means success)
    }
}
