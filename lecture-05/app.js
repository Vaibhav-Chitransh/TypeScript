var userInput1; // like not known beforehand (aisa bhi ho sakta hai ki kuch bhi naa daale)
var userInput2; // can use any datatype
var userName;
userInput1 = 5;
userInput2 = 10;
userName = userInput2;
// userName = userInput1;   // Gives error when the the type is unknown
// never return type   ->   used generally in functions with try catch block (to return errors) 
function generateError(message, code) {
    throw { message: message, statusCode: code };
}
generateError('Internal Server Error', 501);
