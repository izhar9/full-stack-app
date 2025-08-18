/* jab bhi koi endpoint par api banate hai tab agar api error return karega tab vo kis 
format me error return karega uske uske liye ye class hai, ye class api ke error par call
karte hai
*/


class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message);
        this.statusCode = statusCode;  // HTTP error code (400, 404, 500 etc.)
        this.data = null;              // error me data nahi hota, so null
        this.message = message;        // error message
        this.success = false;          // clearly batane ke liye ke request fail hui
        this.errors = errors;          // agar multiple validation errors ho to array me daal sakte ho

        if (stack) {
            this.stack = stack;        // agar manually stack pass kiya ho
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}


export {ApiError}