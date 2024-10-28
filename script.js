// alab 308.5.1
console.log("=============================Part#1========================================");
let num = [2,4,6,8,10];
let names = ['Rajeen', 'Iskander', 'Yoon', 'Chenhao', 'Amber'];


function sumFunction(numArray){      
    //It takes an array of number and returns the sum.
    let sum = 0;
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i];
        //console.log(sum);
    }
    return sum;
}

console.log(" - The sum of the array is", sumFunction(num));


function avgFunction(numArray){
    return sumFunction(numArray) / numArray.length;
}

console.log(" - The Average of the array is", avgFunction(num));

function longestString(namesArray){
    //Set the longest name variable to the first name in the array.
    let longestName = namesArray[0];
    //loop through each name in the array.
    for(let i = 1; i < namesArray.length; i++){
        //if the current name length is longer than the longest name's length the set it as the new longest.
        if(longestName.length < namesArray[i].length){
            longestName = namesArray[i];
        }
    }
    return longestName;
}

console.log(" - The longest string of the array is", longestString(names));

function stringsLongerThan(stringArray,number){
    //This function take an array of strings and a number and outputs the strings that have the length greater than the number.
    let newArray = [];
    //Empty array created
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i].length > number){
            newArray.push(stringArray[i]);
            //This for loop checks the strings individually and compares their length to the number
            //If the above condition is true, then it adds the string to the empty array 'newArray'
        }
    }
    return newArray;
}

//Alternative way:
// function stringsLongerThan3(arr, num) {
//     // Using array filter method
//     return arr.filter((word) => word.length > num);
// }

console.log(" - The string longer than the numbers are:", stringsLongerThan(names,5));

// const stringsLongerThan2 = (stringArray, number) => {
//     let newArray = [];
//     //Empty array created
//     for(let i = 0; i < stringArray.length; i++){
//         if(stringArray[i].length > number){
//             newArray.push(stringArray[i]);
//             //This for loop checks the strings individually and compares their length to the number
//             //If the above condition is true, then it adds the string to the empty array 'newArray'
//         }
//     }
//     return newArray;
// }

// console.log(" - The string longer than the numbers are:", stringsLongerThan2(names,3));
console.log("");
console.log("=============================Part#2======================================");

const DATA = [
    { id: "42", name: "Bruce", occupation: "Knight", age: "41" }, 
    { id: "48", name: "Barry", occupation: "Runner", age: "25" }, 
    { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" }, 
    { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" }, 
    { id: "7", name: "Bilbo", occupation: "None", age: "111" }
];

function sortByAge(){
    //This function sorts the age from the smaller number to higher number.
    //The parameter 'a' will have the age key value of the first object in the array and will compare it to the second one.
    //Then the second one will become a which will be compared to the third. and So on.
    return DATA.sort((a,b) => a.age - b.age);
    //DATA.sort(function(a, b){return a.age - b.age});
};

console.log(sortByAge());

function filterArrayByAge(){
    //putting a plus infront of object converts string value to integer (i.e "40" = 40).
    return DATA.filter((object) => +object.age < 50);
}

console.log(filterArrayByAge());

function change(){
    return DATA.map((object) => {
        //Make a new key value with a key being "Job" and value being object.occupation.
        object["Job"] = object.occupation;
        //Then we will delete exsisting occupation key value.
        delete object.occupation;
        object.age = ((+object.age)+1).toString();
        return object;
    })
}

console.log(change());

// const array1 = [1, 4, 9, 16];

// // Pass a function to map
// const map1 = array1.map((x) => x * 2);

// console.log(map1);
// // Expected output: Array [2, 8, 18, 32]