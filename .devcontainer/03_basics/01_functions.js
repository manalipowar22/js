function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("L");
    console.log("I");
}

// sayMyName()

// 
function addTwoNumbers(number1, number2){
    
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result:",result);

function LoginUserMessage(username = "Abu"){
    if(username === undefined){ //if(!username)
    console.log("Please enter a username");
    return
    }
    return `${username} just logged in`
}

// console.log(LoginUserMessage("manali"))
// console.log(LoginUserMessage(" "))
// console.log(LoginUserMessage( ))

function calculateCardPrice(val1, val2, ...num1){
 return num1
}

// console.log(calculateCardPrice(200, 400, 500, 2000))


const user = {
    username: "manali",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 199
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
































