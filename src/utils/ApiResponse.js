/* jab bhi koi endpoint par api banate hai tab agar api success return karega tab vo kis 
format me data return karega uske uske liye ye class hai, ye class api ke success par call
karte hai
*/

class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode   // HTTP status code (200, 201 etc.)
        this.data = data               // jo actual data bhejna hai (user info, token, etc.)
        this.message = message         // optional message (by default "Success")
    }
}


export {ApiResponse}