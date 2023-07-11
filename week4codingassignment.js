//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    //Programmatically subtract the value of the first element in the array from the value in the last element of the array.
    //Do not use numbers to reference the last element, find it programmatically.
    //ages[7] - ages[0] is not allowed!
    //Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    //Use a loop to iterate through the array and calculate the average age.
const ages = [3,9,23,64,2,8,28,93]
   console.log(ages[ages.length-1] - ages[0]) //gives the last element in the array - the first
   ages.push(39) // adds 39 to the end of the array
   console.log(ages)
   console.log(ages[ages.length-1] - ages[0]) //should subtract 3 from the newly added 39

   
    let sumOfAges = 0;
   for (let i = 0; i<ages.length; i++){ //iterates through the array
    sumOfAges += ages[i]
   } console.log(sumOfAges / ages.length) //outputs the average age in the array
   
   
    
//Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    //Use a loop to iterate through the array and calculate the average number of letters per name.
    //Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
namesAvg = names.join('').length/names.length // puts all the names together and divides by the number of names to get the average
console.log(namesAvg)

console.log(names.join(' '))//concatenates the names separated by a space


//How do you access the last element of any array?
//array.length - 1


//How do you access the first element of any array?
//array[0]


//Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
//For example:

   // let names = ["Kelly", "Sam", "Kate"];    // starting with this array
   // let nameLengths = [5, 3, 4];             // create a new array
  const nameLengths = []
  for (let i=0; i<names.length; i++){
    nameLengths.push(names[i].length) //iterates through the names array and calculates the lengths, then pushes the lengths to the new array
  }
console.log(nameLengths)

//Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let sumOfAllNames = 0
for(let i=0; i<nameLengths.length; i++)
sumOfAllNames += nameLengths[i]
console.log(sumOfAllNames)
//iterates through the lengths array above and adds the length of each name together

//Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
function concatItself(word, n){
    let result = ''
    for( let i=0; i<n; i++){
        result += word
    }
   return result
}
console.log(concatItself('drums',5))

//Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
const fullName = (firstName, lastName)=> `${firstName} + ${lastName}`
console.log('Layla', 'Castaneda')


//Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
 const numbers = [8,25,52,7,23,19]
function sumOfNumbers(numbers){
let totalSum = 0 
for(let i=0; i<numbers.length; i++){
    totalSum += numbers[i]
    if (totalSum > 100){
        return true
}
}}
console.log(sumOfNumbers(numbers))
//had difficulty getting this one to log true. Brought up during office hours where Matt had me break things down and log each step to see what was happening. For some reason it was stopping after running the first element in the array when an else statement was present to return false


//Write a function that takes an array of numbers and returns the average of all the elements in the array.
function avgOfNumbers(numbers){
    let totalSum = 0;
for(let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
}
    return totalSum/numbers.length
}
console.log(avgOfNumbers(numbers))
// iterates through the array used above, adds the numbers and divides by the number of elements


//Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
const array1 = [15,10,25]
const array2 = [6,12,24]
let total1 = 0
let total2 = 0
function compareAvg(array1, array2){
    for(let i=0;i<array1.length; i++){
        console.log('index', i) //Just wanted to see it was iterating through correctly
        total1 += array1[i]/array1.length
    }
    for(let i=0;i<array2.length; i++){
        total2 =+ array2[i]/array2.length
    }
    if(total1 > total2){
        return true
    } 
} console.log(compareAvg(array1, array2))


//Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let isHotOutside = true
let moneyInPocket = 12
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside === true && moneyInPocket > 10.50){
        return true
    } 
} console.log(willBuyDrink(isHotOutside,moneyInPocket))


//Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

 function calculateTip (dinnerTotal, percentage){
    return dinnerTotal * .18}
    console.log(calculateTip(156, .18))
//I created this function to calculate a tip when eating dinner out. I have always just tipped 1 dollar for every 5 in the total, but this would allow me to change the percentage of the tip depending on the service.
