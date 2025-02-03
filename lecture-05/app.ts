let userInput1 : unknown;   // like not known beforehand (aisa bhi ho sakta hai ki kuch bhi naa daale)
let userInput2 : any;   // can use any datatype
let userName : string;

userInput1 = 5;
userInput2 = 10;

userName = userInput2;
// userName = userInput1;   // Gives error when the the type is unknown


// never return type   ->   used generally in functions with try catch block (to return errors) 

function generateError(message : string, code : number) : never {
    throw {message : message, statusCode : code};
}

generateError('Internal Server Error', 501);